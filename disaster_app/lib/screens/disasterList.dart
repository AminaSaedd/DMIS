import 'dart:io';
import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:image_picker/image_picker.dart';
import 'package:provider/provider.dart';

import '../core/api/providers/disaster_provider.dart';
import '../viewModels/disasterVM.dart';
import 'maps.dart';

class DisasterList extends StatefulWidget {
  @override
  _ImagePickerDemoState createState() => _ImagePickerDemoState();
}

class _ImagePickerDemoState extends State<DisasterList> {
  TextEditingController txtDescription = TextEditingController();
  int? selectedOption = 1; // set initial value
  List<int> options = [1, 2, 3];
  List<File> _images = [];
  LatLng? _pickedLocation;
  Future<void> _pickImages(ImageSource source) async {
    List<XFile> xFiles = await ImagePicker().pickMultiImage();
    List<File> images = xFiles.map((xfile) => File(xfile.path)).toList();
    setState(() {
      _images = images;
    });
  }

  void _removeImage(File image) {
    setState(() {
      _images.remove(image);
    });
  }

  Future<void> postData() async {
    final Map<String, dynamic> obj = {
      'Images': _images,
      'Category': selectedOption,
      'lat': _pickedLocation!.latitude,
      'long': _pickedLocation!.longitude,
      'description': txtDescription.text
    };
    final disaster = DisasterVM(
      images: _images,
      latitude: _pickedLocation!.latitude,
      longitude: _pickedLocation!.longitude,
      selectedOption: selectedOption!,
      description: txtDescription.text,
    );
    print("here is what we are sending $obj");
    var res = await Provider.of<DisasterProvider>(context, listen: false)
        .PostDisaster(context, disaster);

    // Map? valueMap = jsonDecode(res!);
    // setBookerToStorage("booker", res);
  }

  Widget _buildSelectedImagesPreview() {
    return Wrap(
      spacing: 10,
      runSpacing: 10,
      children: List.generate(_images.length, (index) {
        File image = _images[index];
        return GestureDetector(
          onTap: () => _removeImage(image), // handle remove image
          child: Stack(
            alignment: Alignment.topRight,
            children: [
              Image.file(image, height: 180, width: 180, fit: BoxFit.cover),
              const Icon(Icons.close, color: Colors.white, size: 20),
            ],
          ),
        );
      }),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Image Picker Demo'),
      ),
      body: SingleChildScrollView(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          children: [
            Container(
              margin: const EdgeInsets.symmetric(horizontal: 20, vertical: 0),
              child: SizedBox(
                width: double.infinity,
                child: DropdownButtonFormField<String>(
                  value: selectedOption.toString(),
                  items: options.map((int option) {
                    return DropdownMenuItem<String>(
                      value: option.toString(),
                      child: Text(option.toString()),
                    );
                  }).toList(),
                  onChanged: (newValue) {
                    setState(() {
                      selectedOption = newValue as int?;
                    });
                  },
                ),
              ),
            ),
            Container(
              margin: const EdgeInsets.symmetric(horizontal: 20, vertical: 0),
              child: TextFormField(
                style: const TextStyle(
                  color: Colors.black,
                  // backgroundColor: Colors.white,
                ),
                decoration: const InputDecoration(
                  fillColor: Colors.white,
                  hintText: 'Description',
                  hintStyle: TextStyle(color: Colors.white),
                  contentPadding: EdgeInsets.all(20.0),
                ),
                textInputAction: TextInputAction.next,
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter Description';
                  }
                  return null;
                },
                controller: txtDescription,
              ),
            ),
            Container(
              margin: const EdgeInsets.symmetric(horizontal: 0, vertical: 20),
              child: ElevatedButton(
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => MapScreen()),
                  ).then((value) => {
                        print(
                            "here i come from Mapppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp $value"),
                        setState(() {
                          _pickedLocation = value;
                        })
                      });
                },
                child: const Padding(
                  padding: EdgeInsets.symmetric(vertical: 10.0, horizontal: 7),
                  child: Text('Pick Lication'),
                ),
              ),
            ),
            ElevatedButton(
              onPressed: () => _pickImages(ImageSource.gallery),
              child: const Padding(
                padding: EdgeInsets.symmetric(vertical: 10.0, horizontal: 7),
                child: Text('Pick Images'),
              ),
            ),
            const SizedBox(height: 16),
            Container(
              margin: const EdgeInsets.symmetric(horizontal: 5, vertical: 10),
              padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 5),
              // constraints: const BoxConstraints(maxHeight: 80),
              decoration: BoxDecoration(
                color: Colors.white,
                border: Border.all(color: Colors.blue, width: 1),
                borderRadius: BorderRadius.circular(15),
              ),
              child: Center(
                child: Row(
                  children: [
                    Expanded(
                      child: _images.isEmpty
                          ? const Center(child: Text('No Images Selected'))
                          : _buildSelectedImagesPreview(),
                    ),
                  ],
                ),
              ),
            ),
            ElevatedButton(
              onPressed: postData,
              child: const Padding(
                padding: EdgeInsets.symmetric(vertical: 15.0, horizontal: 20),
                child: Text('Submit'),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
