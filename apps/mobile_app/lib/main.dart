import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'core/config/app_config.dart';
import 'router/app_router.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  SystemChrome.setSystemUIOverlayStyle(
    const SystemUiOverlayStyle(
      statusBarColor: Colors.transparent,
      statusBarIconBrightness: Brightness.dark,
    ),
  );
  runApp(const AarbCitizenApp());
}

class AarbCitizenApp extends StatelessWidget {
  const AarbCitizenApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'AARB Citizen App',
      debugShowCheckedModeBanner: false,
      theme: AppConfig.theme,
      routerConfig: appRouter,
    );
  }
}
