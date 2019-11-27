import 'package:flutter/material.dart';
import './src/screens/LoginScreen.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
 @override
 Widget build(BuildContext context) {
   return MaterialApp(
     title: 'My Flutter App',
     debugShowCheckedModeBanner: false,
     home: LoginScreen(),
   );
 }
}