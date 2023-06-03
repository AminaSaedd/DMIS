import 'package:flutter/material.dart';
// import 'package:shared_preferences/shared_preferences.dart';
import 'package:http/http.dart' as http;

class BaseAPI {
  // local host
  // static String baseAPI = "https://localhost:7228/api";

  // local IP Address
  // static String baseAPI = "http://localhost:5064/api";

  String baseAPI = "http://10.10.1.2:8081/api";
  String DisasterPath = 'disasters';
  String CategoriesPath = 'categories';

  // var authPath = Uri.parse("$baseAPI/login");

  // Future<String> getToken() async {
  //   final prefs = await SharedPreferences.getInstance();
  //   String token = prefs.getString('token') ?? '';
  //   return (token);
  // }

  Map<String, String> headers = {
    "Content-Type": "application/json; charset=UTF-8",
    // 'Authorization': 'Bearer $myToken',
  };

  void _showErrorDialog(String message, BuildContext context) {
    showDialog(
      context: context,
      builder: (ctx) => AlertDialog(
        title: const Text('An error occured'),
        content: Text(message),
        actions: <Widget>[
          ElevatedButton(
              child: const Text('Okey'),
              onPressed: () {
                Navigator.of(ctx).pop();
                // Navigator.of(context).pushNamed(LoginScreen.routeName);
              })
        ],
      ),
    );
  }

  Future<String?> getData(
      {required BuildContext context,
      required String url,
      String? params,
      String? queryString}) async {
    String token = "";
    // String token = await getToken();
    Map<String, String> header = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // 'Authorization': 'Bearer $token',
    };

    var link = Uri.parse(
        '$baseAPI/$url${params != null ? '?/$params' : ''}${queryString != null ? '?$queryString' : ''}');
    final response = await http.get(link, headers: header);
    print('status code ${response.statusCode}');
    if (response.statusCode == 200) {
      var json = response.body;
      return json;
    } else if (response.statusCode == 201) {
      var json = response.body;
      return json;
    } else if (response.statusCode == 401) {
      // ignore: use_build_context_synchronously
      _showErrorDialog('Your session has be expired', context);
      return null;
    } else if (response.statusCode == 401) {
      // ignore: use_build_context_synchronously
      _showErrorDialog('Server Erro', context);
      return null;
    } else {
      print('status code ${response.statusCode}');
      // ignore: use_build_context_synchronously
      _showErrorDialog('Something went wrong, please try again', context);
      return null;
    }
  }

  Future<String?> putData(BuildContext context, String url, int id, Object body,
      [String? queryString]) async {
    // String token = await getToken();
    Map<String, String> header = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // 'Authorization': 'Bearer $token',
    };
    var link = Uri.parse(
        '$baseAPI/$id/ $url${queryString != null ? '?$queryString' : ''}');
    final response = await http.put(link, body: body, headers: header);
    if (response.statusCode == 201) {
      var json = response.body;
      return json;
    } else if (response.statusCode == 401) {
      // ignore: use_build_context_synchronously
      _showErrorDialog('Your session has be expired', context);
      return null;
    } else if (response.statusCode == 401) {
      // ignore: use_build_context_synchronously
      _showErrorDialog('Server Erro', context);
      return null;
    } else {
      // ignore: use_build_context_synchronously
      _showErrorDialog('Something went wrong, please try again', context);
      return null;
    }
  }

  Future<String?> postData(BuildContext context, String url, Object body,
      [String? queryString]) async {
    // String token = await getToken();
    Map<String, String> header = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // 'Authorization': 'Bearer $token',
    };
    var link =
        Uri.parse('$baseAPI/$url${queryString != null ? '?$queryString' : ''}');
    final response = await http.post(link, body: body, headers: header);
    if (response.statusCode == 200) {
      var json = response.body;
      return json;
    } else if (response.statusCode == 201) {
      var json = response.body;
      return json;
    } else if (response.statusCode == 401) {
      // ignore: use_build_context_synchronously
      _showErrorDialog('Your session has be expired', context);
      return null;
    } else if (response.statusCode == 400) {
      // ignore: use_build_context_synchronously
      print("here are payment console, $response");
      _showErrorDialog(response.body, context);
      return null;
    } else if (response.statusCode == 401) {
      // ignore: use_build_context_synchronously
      _showErrorDialog('Server Erro', context);
      return null;
    } else {
      // ignore: use_build_context_synchronously
      _showErrorDialog('Something went wrong, please try again', context);
      return null;
    }
  }
}
