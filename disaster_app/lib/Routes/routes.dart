import 'package:flutter/material.dart';

import '../screens/disasterList.dart';

// screen improts

class Routes {
  static const disasterList = '/';
  static const maps = '/maps';
}

Map<String, Widget Function(BuildContext)> routes = {
  '/': (context) => DisasterList(),
};
