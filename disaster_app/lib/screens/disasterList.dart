import 'dart:io';
import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:image_picker/image_picker.dart';
import 'package:provider/provider.dart';

import '../core/api/providers/disaster_provider.dart';
import '../viewModels/categoriesVM.dart';
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
  List<CategoriesVm>? categories;
  late CategoriesVm selectedCategory = CategoriesVm(id: 0, name: 'ccc');
  var _isLoading = false;
  var _isLoadings = false;

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

  @override
  void didChangeDependencies() async {
    await getData(context);
    selectedCategory = categories![0];
    super.didChangeDependencies();
  }

  getData(BuildContext context) async {
    categories = await Provider.of<DisasterProvider>(context, listen: false)
        .getCategories(context);
    // subjects = lecturerClasses!.lecturerSubjects;
    setState(() {
      _isLoading = true;
    });
  }

  Future<void> postData() async {
    _isLoadings = true;
    final Map<String, dynamic> obj = {
      'Images': _images,
      'Category': selectedCategory.id,
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
        backgroundColor: Theme.of(context).colorScheme.secondary,
        title: const Center(
            child: Text(
          'Disaster App',
        )),
      ),
      body: SingleChildScrollView(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          children: [
            const SizedBox(height: 8),
            Container(
              // width: 300,
              margin: const EdgeInsets.symmetric(horizontal: 10, vertical: 10),
              child: DropdownButtonFormField<CategoriesVm>(
                decoration: InputDecoration(
                  enabledBorder: OutlineInputBorder(
                    borderSide: const BorderSide(color: Colors.green, width: 2),
                    borderRadius: BorderRadius.circular(20),
                  ),
                  border: OutlineInputBorder(
                    borderSide: const BorderSide(color: Colors.green, width: 2),
                    borderRadius: BorderRadius.circular(20),
                  ),
                  filled: false,
                  // fillColor: Colors.blueAccent,
                ),
                isExpanded: true,
                hint: const Text(' Categories'),
                value: selectedCategory,
                onChanged: (CategoriesVm? newValue) {
                  setState(() {
                    selectedCategory = newValue!;
                  });
                },
                items: categories?.map((CategoriesVm shift) {
                  return DropdownMenuItem<CategoriesVm>(
                    value: shift,
                    child: Text(
                      shift.name,
                      style: const TextStyle(color: Colors.black),
                    ),
                  );
                }).toList(),
              ),
            ),
            // Container(
            //   margin: const EdgeInsets.symmetric(horizontal: 20, vertical: 0),
            //   child: SizedBox(
            //     width: double.infinity,
            //     child: DropdownButtonFormField<String>(
            //       value: selectedOption.toString(),
            //       items: options.map((int option) {
            //         return DropdownMenuItem<String>(
            //           value: option.toString(),
            //           child: Text(option.toString()),
            //         );
            //       }).toList(),
            //       onChanged: (newValue) {
            //         setState(() {
            //           selectedOption = newValue as int?;
            //         });
            //       },
            //     ),
            //   ),
            // ),
            const SizedBox(height: 8),
            Container(
              margin: const EdgeInsets.symmetric(horizontal: 10, vertical: 0),
              child: TextFormField(
                style: const TextStyle(
                  color: Colors.black,
                  // backgroundColor: Colors.white,
                ),
                decoration: InputDecoration(
                  enabledBorder: OutlineInputBorder(
                    borderSide: const BorderSide(color: Colors.green, width: 2),
                    borderRadius: BorderRadius.circular(20),
                  ),
                  border: OutlineInputBorder(
                    borderSide: const BorderSide(color: Colors.green, width: 2),
                    borderRadius: BorderRadius.circular(20),
                  ),
                  filled: false,
                  hintText: 'Description',
                  // fillColor: Colors.blueAccent,
                ),
                // decoration: const InputDecoration(
                //   fillColor: Colors.white,
                //   hintText: 'Description',
                //   hintStyle: TextStyle(color: Colors.white),
                //   contentPadding: EdgeInsets.all(20.0),
                // ),
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
            const SizedBox(height: 8),
            Container(
              margin: const EdgeInsets.symmetric(horizontal: 10, vertical: 10),
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 20),
              // constraints: const BoxConstraints(maxHeight: 80),
              decoration: BoxDecoration(
                color: Colors.white,
                border: Border.all(color: Colors.green, width: 1),
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
              onPressed: () => _pickImages(ImageSource.gallery),
              style: ButtonStyle(
                backgroundColor: MaterialStateProperty.all(Colors.green[800]),
              ),
              child: const Padding(
                padding: EdgeInsets.symmetric(vertical: 10.0, horizontal: 7),
                child: Text('Pick Images'),
              ),
            ),
            Container(
              margin: const EdgeInsets.symmetric(horizontal: 0, vertical: 20),
              child: ElevatedButton(
                style: ButtonStyle(
                  backgroundColor: MaterialStateProperty.all(Colors.green[800]),
                ),
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
                  child: Text(
                    'Pick Lication',
                  ),
                ),
              ),
            ),
            ElevatedButton(
              style: ButtonStyle(
                backgroundColor: MaterialStateProperty.all(Colors.green[800]),
              ),
              onPressed: postData,
              child: Padding(
                padding:
                    const EdgeInsets.symmetric(vertical: 15.0, horizontal: 20),
                child: _isLoadings
                    ? const CircularProgressIndicator()
                    : const Text('Submit'),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
