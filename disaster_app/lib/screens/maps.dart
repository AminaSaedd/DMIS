import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:location/location.dart';

class MapScreen extends StatefulWidget {
  @override
  _MapScreenState createState() => _MapScreenState();
}

class _MapScreenState extends State<MapScreen> {
  late GoogleMapController _mapController;
  LatLng? _pickedLocation;

  void _selectLocation(LatLng position) {
    setState(() {
      _pickedLocation = position;
    });
  }

  @override
  void didChangeDependencies() async {
    await _getUserLocation();
    super.didChangeDependencies();
  }

  late bool _serviceEnabled;
  late PermissionStatus _permissionGranted;

  Future<void> _getUserLocation() async {
    Location location = Location();

    // Check if location service is enable
    _serviceEnabled = await location.serviceEnabled();
    if (!_serviceEnabled) {
      _serviceEnabled = await location.requestService();
      if (!_serviceEnabled) {
        return;
      }
    }

    // Check if permission is granted
    _permissionGranted = await location.hasPermission();
    if (_permissionGranted == PermissionStatus.denied) {
      _permissionGranted = await location.requestPermission();
      if (_permissionGranted != PermissionStatus.granted) {
        return;
      }
    }

    final locationData = await location.getLocation();
    setState(() {
      _pickedLocation = LatLng(
        locationData.latitude!,
        locationData.longitude!,
      );
      Marker(
        markerId: const MarkerId('picked'),
        position: LatLng(
          locationData.latitude!,
          locationData.longitude!,
        ),
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.secondary,
        title: const Text('Pick a location'),
      ),
      body: GoogleMap(
        initialCameraPosition: CameraPosition(
          // target: LatLng(37.4219999, -122.0840575),
          target: _pickedLocation ?? const LatLng(9.558575, 44.049925),
          zoom: 15,
        ),
        onTap: _selectLocation,
        onMapCreated: (controller) {
          _mapController = controller;
        },
        markers: _pickedLocation == null
            ? {}
            : {
                Marker(
                  markerId: const MarkerId('picked'),
                  position: _pickedLocation!,
                ),
              },
      ),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: _pickedLocation == null
            ? null
            : () {
                Navigator.of(context).pop(_pickedLocation);
              },
        label: const Text('Confirm location'),
        icon: const Icon(Icons.location_pin),
      ),
    );
  }
}
// import 'dart:async';
// import 'dart:ui' as ui;
// import 'package:custom_info_window/custom_info_window.dart';
// import 'package:flutter/material.dart';
// import 'package:flutter/services.dart';
// import 'package:geolocator/geolocator.dart';
// import 'package:google_maps_flutter/google_maps_flutter.dart';

// class Location {
//   final double latitude;
//   final double longitude;

//   Location(this.latitude, this.longitude);
// }

// class MapScreen extends StatefulWidget {
//   static const routeName = '/maps';
//   const MapScreen({super.key});

//   @override
//   State<MapScreen> createState() => _MapScreenState();
// }

// class _MapScreenState extends State<MapScreen> {
//   List<Location> locations = [
//     Location(40.7128, -74.0060),
//     Location(51.5074, -0.1278),
//     Location(-33.865143, 151.209900),
//     Location(35.6895, 139.6917),
//     Location(55.7558, 37.6173),
//   ];
//   final Completer<GoogleMapController> _controller =
//       Completer<GoogleMapController>();

//   final Map<String, Marker> _markers = {};
//   Set<Marker> markers = {};

//   final CustomInfoWindowController _customInfoWindowController =
//       CustomInfoWindowController();

//   late LatLng _currentPosition = const LatLng(55.7558, 37.6173);
//   bool _isLoading = true;

//   @override
//   void didChangeDependencies() async {
//     // await getData(context);
//     super.didChangeDependencies();
//   }

//   @override
//   void initState() {
//     super.initState();
//     getLocation();
//   }

//   getLocation() async {
//     LocationPermission permission;
//     permission = await Geolocator.requestPermission();

//     Position position = await Geolocator.getCurrentPosition(
//         desiredAccuracy: LocationAccuracy.high);
//     double lat = position.latitude;
//     double long = position.longitude;

//     LatLng location = LatLng(lat, long);

//     setState(() {
//       _currentPosition = location;
//       _isLoading = false;
//     });
//   }

//   // getData(BuildContext context) async {
//   //   stadiumList = await Provider.of<StadiumProvider>(context, listen: false)
//   //       .getStadiums(context);
//   //   if (stadiumList != null) {
//   //     setState(() {
//   //       _isLoading = true;
//   //     });
//   //     return stadiumList;
//   //   }
//   // }

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       body: Stack(
//         children: [
//           GoogleMap(
//             mapType: MapType.normal,
//             initialCameraPosition: CameraPosition(
//               target: _currentPosition,
//               zoom: 13,
//             ),
//             onMapCreated: (GoogleMapController controller) {
//               // _controller.complete(controller);
//               _customInfoWindowController.googleMapController = controller;
//               addMarkers(context);
//             },
//             onTap: (position) {
//               _customInfoWindowController.addInfoWindow!;
//             },
//             onCameraMove: (position) {
//               _customInfoWindowController.hideInfoWindow!();
//             },
//             markers: Set<Marker>.of(markers),
//           ),
//           CustomInfoWindow(
//             controller: _customInfoWindowController,
//             height: 250,
//             width: 300,
//             offset: 35,
//           )
//         ],
//       ),
//     );
//   }

//   Future<Uint8List> getBytesFromAsset(String path, int width) async {
//     ByteData data = await rootBundle.load(path);
//     ui.Codec codec = await ui.instantiateImageCodec(data.buffer.asUint8List(),
//         targetWidth: width);
//     ui.FrameInfo fi = await codec.getNextFrame();
//     return (await fi.image.toByteData(format: ui.ImageByteFormat.png))!
//         .buffer
//         .asUint8List();
//   }

//   addMarkers(BuildContext context) async {
//     // final Uint8List markerIcon =
//     //     await getBytesFromAsset('assets/images/stadium.png', 100);
//     // Marker resultMarker;

//     for (var i = 0; i < locations.length; i++) {
//       markers.add(
//         Marker(
//           markerId: MarkerId(locations[i].latitude.toString()),
//           position: LatLng(
//             double.parse(locations[i].latitude.toString()),
//             double.parse(locations[i].longitude.toString()),
//           ),
//           onTap: () {
//             _customInfoWindowController.addInfoWindow!(
//               Text(locations[i].latitude.toString()),
//               LatLng(
//                 double.parse(locations[i].latitude.toString()),
//                 double.parse(locations[i].longitude.toString()),
//               ),
//             );
//           },
//           infoWindow: const InfoWindow(),
//           // icon: BitmapDescriptor.fromBytes(markerIcon),
//         ),
//       );
//       // markers.add(resultMarker);
//       setState(() {});
//     }

//     setState(() {});
//   }
// }
