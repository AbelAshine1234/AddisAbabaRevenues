import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../core/widgets/main_scaffold.dart';
import '../features/splash/presentation/screens/splash_screen.dart';
import '../features/onboarding/presentation/screens/onboarding_screen.dart';
import '../features/home/presentation/screens/home_screen.dart';
import '../features/chat/presentation/screens/chat_screen.dart';
import '../features/reports/presentation/screens/reports_screen.dart';
import '../features/profile/presentation/screens/profile_screen.dart';
import '../features/reports/presentation/screens/create_report_screen.dart';
import '../features/reports/presentation/screens/report_success_screen.dart';
import '../features/track/presentation/screens/track_report_screen.dart';
import 'package:aarb_citizen_app/features/reports/models/report_item.dart';

final GlobalKey<NavigatorState> _rootNavigatorKey = GlobalKey<NavigatorState>();
final GlobalKey<NavigatorState> _shellNavigatorKey = GlobalKey<NavigatorState>();

final GoRouter appRouter = GoRouter(
  navigatorKey: _rootNavigatorKey,
  initialLocation: '/splash',
  routes: [
    GoRoute(
      path: '/splash',
      builder: (context, state) => const SplashScreen(),
    ),
    GoRoute(
      path: '/onboarding',
      builder: (context, state) => const OnboardingScreen(),
    ),
    ShellRoute(
      navigatorKey: _shellNavigatorKey,
      builder: (context, state, child) {
        int index = 0;
        final loc = state.uri.toString();
        if (loc.startsWith('/chat')) {
          index = 1;
        } else if (loc.startsWith('/reports')) {
          index = 2;
        } else if (loc.startsWith('/profile')) {
          index = 3;
        }
        return MainScaffold(
          currentIndex: index,
          child: child,
        );
      },
      routes: [
        GoRoute(
          path: '/home',
          builder: (context, state) => const HomeScreen(),
        ),
        GoRoute(
          path: '/chat',
          builder: (context, state) => const ChatScreen(),
        ),
        GoRoute(
          path: '/reports',
          builder: (context, state) => const ReportsScreen(),
        ),
        GoRoute(
          path: '/profile',
          builder: (context, state) => const ProfileScreen(),
        ),
      ],
    ),
    GoRoute(
      path: '/create-report',
      parentNavigatorKey: _rootNavigatorKey,
      builder: (context, state) => const CreateReportScreen(),
    ),
    GoRoute(
      path: '/report-success',
      parentNavigatorKey: _rootNavigatorKey,
      builder: (context, state) => ReportSuccessScreen(
        report: state.extra as ReportItem?,
      ),
    ),
    GoRoute(
      path: '/track-report',
      parentNavigatorKey: _rootNavigatorKey,
      builder: (context, state) => TrackReportScreen(
        initialId: state.uri.queryParameters['id'],
      ),
    ),
  ],
);
