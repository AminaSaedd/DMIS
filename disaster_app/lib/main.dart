import 'package:disaster_app/Routes/routes.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'core/api/providers/disaster_provider.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    // return MaterialApp(
    //   title: 'Disaster App',
    //   theme: ThemeData(
    //     primarySwatch: Colors.blue,
    //   ),
    //   home: const MyHomePage(title: 'Disaster App'),
    // );
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => DisasterProvider()),
      ],
      child: (MaterialApp(
        title: 'Disaster App',
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
          primaryColor: Colors.blue.shade900,
          colorScheme: ColorScheme.fromSwatch(primarySwatch: Colors.blue)
              .copyWith(secondary: Colors.yellow.shade300),
        ),
        initialRoute: Routes.disasterList,
        routes: routes,
      )),
    );
  }
}

// class MyHomePage extends StatefulWidget {
//   const MyHomePage({super.key, required this.title});
//   final String title;

//   @override
//   State<MyHomePage> createState() => _MyHomePageState();
// }

// class _MyHomePageState extends State<MyHomePage> {
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       debugShowCheckedModeBanner: false,
//       initialRoute: Routes.disasterList,
//       routes: routes,
//     );
//   }
// }
