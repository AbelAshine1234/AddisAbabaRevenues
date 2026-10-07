class TimelineStep {
  final String title;
  final String date;
  final bool isCompleted;
  final bool isCurrent;

  const TimelineStep({
    required this.title,
    required this.date,
    this.isCompleted = false,
    this.isCurrent = false,
  });
}

class ReportItem {
  final String id;
  final String title;
  final String category;
  final String status;
  final String date;
  final String description;
  final String location;
  final String assignedUnit;
  final bool isAnonymous;
  final List<TimelineStep> timeline;

  const ReportItem({
    required this.id,
    required this.title,
    required this.category,
    required this.status,
    required this.date,
    required this.description,
    this.location = 'Bole Sub-City, Addis Ababa, Ethiopia',
    this.assignedUnit = 'Assigned to Bole Sub-City Unit',
    this.isAnonymous = true,
    this.timeline = const [],
  });

  static List<ReportItem> get sampleReports => [
    const ReportItem(
      id: 'ARB-2024-00142',
      title: 'VAT Evasion — No Receipt Issued',
      category: 'VAT / Tax Evasion',
      status: 'Under Review',
      date: 'Aug 14, 2026',
      description: 'Supermarket refusing to print official fiscal cash register vouchers upon payment.',
      location: 'Bole Sub-City, Addis Ababa, Ethiopia',
      assignedUnit: 'Bole Sub-City Tax Inspection Unit',
      timeline: [
        TimelineStep(title: 'Report Received', date: 'Aug 12, 09:30', isCompleted: true),
        TimelineStep(title: 'Under Review', date: 'Aug 12, 14:15', isCompleted: true, isCurrent: true),
        TimelineStep(title: 'Assigned to Investigator', date: 'Aug 13, 10:00', isCompleted: false),
        TimelineStep(title: 'Resolved', date: 'Pending', isCompleted: false),
      ],
    ),
    const ReportItem(
      id: 'ARB-2024-00139',
      title: 'Employee Misconduct',
      category: 'Employee Misconduct',
      status: 'Assigned to Investigator',
      date: 'Aug 14, 2026',
      description: 'Officer requested informal fee to accelerate tax clearance certificate processing.',
      location: 'Kirkos Sub-City, Addis Ababa, Ethiopia',
      assignedUnit: 'Ethics & Anti-Corruption Directorate',
      timeline: [
        TimelineStep(title: 'Report Received', date: 'Aug 11, 10:00', isCompleted: true),
        TimelineStep(title: 'Under Review', date: 'Aug 11, 15:30', isCompleted: true),
        TimelineStep(title: 'Assigned to Investigator', date: 'Aug 13, 10:00', isCompleted: true, isCurrent: true),
        TimelineStep(title: 'Resolved', date: 'Pending', isCompleted: false),
      ],
    ),
    const ReportItem(
      id: 'ARB-2024-00125',
      title: 'Unregistered Business',
      category: 'Unregistered Business',
      status: 'Resolved',
      date: 'Aug 14, 2026',
      description: 'Warehouse operating wholesale electronics without TIN registration or business license.',
      location: 'Addis Ketema Sub-City, Addis Ababa, Ethiopia',
      assignedUnit: 'Commercial Registration Enforcement Unit',
      timeline: [
        TimelineStep(title: 'Report Received', date: 'Aug 05, 11:20', isCompleted: true),
        TimelineStep(title: 'Under Review', date: 'Aug 06, 09:00', isCompleted: true),
        TimelineStep(title: 'Assigned to Investigator', date: 'Aug 07, 14:00', isCompleted: true),
        TimelineStep(title: 'Resolved', date: 'Aug 12, 16:30', isCompleted: true, isCurrent: true),
      ],
    ),
    const ReportItem(
      id: 'ARB-2024-00098',
      title: 'VAT Evasion — No Receipt Issued',
      category: 'VAT / Tax Evasion',
      status: 'Under Review',
      date: 'Aug 14, 2026',
      description: 'Restaurant providing handwritten pre-bills instead of official sales receipt.',
      location: 'Arada Sub-City, Addis Ababa, Ethiopia',
      assignedUnit: 'Arada Tax Enforcement Division',
      timeline: [
        TimelineStep(title: 'Report Received', date: 'Aug 10, 13:00', isCompleted: true),
        TimelineStep(title: 'Under Review', date: 'Aug 11, 09:30', isCompleted: true, isCurrent: true),
        TimelineStep(title: 'Assigned to Investigator', date: 'Aug 12, 11:00', isCompleted: false),
        TimelineStep(title: 'Resolved', date: 'Pending', isCompleted: false),
      ],
    ),
    const ReportItem(
      id: 'ARB-2024-00089',
      title: 'Employee Misconduct',
      category: 'Employee Misconduct',
      status: 'Assigned to Investigator',
      date: 'Aug 14, 2026',
      description: 'Misbehavior during property valuation assessment.',
      location: 'Yeka Sub-City, Addis Ababa, Ethiopia',
      assignedUnit: 'Internal Audit & Ethics Unit',
      timeline: [
        TimelineStep(title: 'Report Received', date: 'Aug 08, 08:45', isCompleted: true),
        TimelineStep(title: 'Under Review', date: 'Aug 08, 13:10', isCompleted: true),
        TimelineStep(title: 'Assigned to Investigator', date: 'Aug 10, 09:00', isCompleted: true, isCurrent: true),
        TimelineStep(title: 'Resolved', date: 'Pending', isCompleted: false),
      ],
    ),
    const ReportItem(
      id: 'ARB-2024-00072',
      title: 'Fake Receipt Reported',
      category: 'Fake Receipt Reported',
      status: 'Under Review',
      date: 'Aug 14, 2026',
      description: 'Discovered forged sales receipts with invalid Tax Identification Number.',
      location: 'Nifas Silk-Lafto, Addis Ababa, Ethiopia',
      assignedUnit: 'Fraud Investigation Directorate',
      timeline: [
        TimelineStep(title: 'Report Received', date: 'Aug 09, 14:00', isCompleted: true),
        TimelineStep(title: 'Under Review', date: 'Aug 10, 10:30', isCompleted: true, isCurrent: true),
        TimelineStep(title: 'Assigned to Investigator', date: 'Pending', isCompleted: false),
        TimelineStep(title: 'Resolved', date: 'Pending', isCompleted: false),
      ],
    ),
  ];
}
