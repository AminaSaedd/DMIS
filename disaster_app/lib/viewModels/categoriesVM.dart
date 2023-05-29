import 'dart:convert';

List<CategoriesVm> categoriesVmFromJson(String str) => List<CategoriesVm>.from(
    json.decode(str).map((x) => CategoriesVm.fromJson(x)));

String categoriesVmToJson(List<CategoriesVm> data) =>
    json.encode(List<dynamic>.from(data.map((x) => x.toJson())));

class CategoriesVm {
  int id;
  String name;

  CategoriesVm({
    required this.id,
    required this.name,
  });

  factory CategoriesVm.fromJson(Map<String, dynamic> json) => CategoriesVm(
        id: json["id"],
        name: json["name"],
      );

  Map<String, dynamic> toJson() => {
        "id": id,
        "name": name,
      };
}
