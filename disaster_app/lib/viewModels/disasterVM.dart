import 'dart:io';

class DisasterVM {
  DisasterVM({
    required this.images,
    required this.latitude,
    required this.longitude,
    required this.selectedOption,
    required this.description,
  });

  List<File> images;
  double latitude;
  double longitude;
  int selectedOption;
  String description;
}
