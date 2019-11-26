import 'package:flutter/material.dart';
import './src/screens/HomeScreen.dart';

void main() => runApp(App());

class App extends StatelessWidget {
 @override
 Widget build(BuildContext context) {
   return MaterialApp(
     title: 'My Flutter App',
     debugShowCheckedModeBanner: false,
     home: Home(),
   );
 }
}