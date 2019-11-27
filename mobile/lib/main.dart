import 'package:flutter/material.dart';
import './src/screens/LoginScreen.dart';
import './src/screens/RegisterScreen.dart';

var routes = <String, WidgetBuilder>{
  "/RegistrationScreen": (BuildContext context) => RegistrationScreen(),
  "/LoginScreen": (BuildContext context) => LoginScreen(),
  
};


void main() => runApp(new MaterialApp(
    theme: ThemeData(
      primaryColor: Colors.deepPurple,
      primarySwatch: Colors.deepPurple,
      primaryColorDark: Colors.deepPurple
    ),
    debugShowCheckedModeBanner: false,
    home: LoginScreen(),
    routes: routes
  )
);