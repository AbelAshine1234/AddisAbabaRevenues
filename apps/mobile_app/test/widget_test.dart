import 'package:flutter_test/flutter_test.dart';
import 'package:aarb_citizen_app/main.dart';

void main() {
  testWidgets('App smoke test', (WidgetTester tester) async {
    await tester.pumpWidget(const AarbCitizenApp());
    await tester.pumpAndSettle(const Duration(seconds: 3));
    expect(find.text('Report any misconduct\nconfidentially'), findsOneWidget);
  });
}
