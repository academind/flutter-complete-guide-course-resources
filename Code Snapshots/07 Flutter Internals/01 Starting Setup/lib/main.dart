import 'package:flutter/material.dart';

import 'package:flutter_internals/ui_updates_demo.dart';

void main() {
  runApp(const App());
}

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(useMaterial3: true),
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Flutter Internals'),
        ),
        body: const UIUpdatesDemo(),
      ),
    );
  }
}
