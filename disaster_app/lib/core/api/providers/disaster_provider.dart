import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';
import '../../../viewModels/categoriesVM.dart';
import '../../../viewModels/disasterVM.dart';
import '../config.dart';
import 'dart:async';

class DisasterProvider extends BaseAPI with ChangeNotifier {
  Future<String?> postDisasterrrr(BuildContext context, dynamic body) async {
    var obj = json.encode(body);
    var response = await super.postData(context, super.DisasterPath, obj);
    notifyListeners();
    print('status code $response');
    return response;
  }

  Future<List<CategoriesVm>?> getCategories(BuildContext context) async {
    var response =
        await super.getData(context: context, url: super.CategoriesPath);
    Map<String, String> header = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // 'Authorization': 'Bearer $token',
    };
    notifyListeners();
    return categoriesVmFromJson(response.toString());
  }

  Future<String> PostDisaster(BuildContext context, DisasterVM disaster) async {
    final uri = Uri.parse('${super.baseAPI}/disasters');
    // final uri = Uri.parse('http://10.10.1.9:8083/api/disasters');
    final request = http.MultipartRequest('POST', uri);
    request.fields['lat'] = disaster.latitude.toString();
    request.fields['long'] = disaster.longitude.toString();
    request.fields['categoryId'] = disaster.selectedOption.toString();
    request.fields['description'] = disaster.description;

    for (var i = 0; i < disaster.images.length; i++) {
      final image = disaster.images[i];
      final stream = http.ByteStream(image.openRead());
      final length = await image.length();
      final multipartFile = http.MultipartFile('images', stream, length,
          filename: image.path.split('/').last);
      request.files.add(multipartFile);
    }
    // print("here is serverrrrrrrr $request");
    // print("here is laatttttttttttt ${request.fields['lat']}");
    // print("here is longggggggggg ${request.fields['long']}");
    // print(
    //     "here is catttttttttttttttttttttttttt ${request.fields['categoryId']}");
    // print("here is fillllllllllllllllll ${request.files}");
    final response = await request.send();
    if (response.statusCode == 200 || response.statusCode == 201) {
      print('Images uploaded successfully!');
    } else {
      print('Error uploading images ${response.statusCode}');
    }

    return "";
  }
}
