import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';

export interface ReportRecord {
  id: string;
  referenceNumber: string;
  title: string;
  category: string;
  status: string;
  date: string;
  description: string;
  location: string;
  assignedUnit: string;
  isAnonymous: boolean;
  timeline: {
    title: string;
    date: string;
    isCompleted: boolean;
    isCurrent?: boolean;
  }[];
}

@Injectable()
export class ReportsService {
  private reports: ReportRecord[] = [
    {
      id: '1',
      referenceNumber: 'ARB-2024-00142',
      title: 'VAT Evasion — No Receipt Issued',
      category: 'VAT / Tax Evasion',
      status: 'Under Review',
      date: 'Aug 14, 2026',
      description: 'Supermarket refusing to print official fiscal cash register vouchers upon payment.',
      location: 'Bole Sub-City, Addis Ababa, Ethiopia',
      assignedUnit: 'Bole Sub-City Tax Inspection Unit',
      isAnonymous: true,
      timeline: [
        { title: 'Report Received', date: 'Aug 12, 09:30', isCompleted: true },
        { title: 'Under Review', date: 'Aug 12, 14:15', isCompleted: true, isCurrent: true },
        { title: 'Assigned to Investigator', date: 'Aug 13, 10:00', isCompleted: false },
        { title: 'Resolved', date: 'Pending', isCompleted: false },
      ],
    },
    {
      id: '2',
      referenceNumber: 'ARB-2024-00139',
      title: 'Employee Misconduct',
      category: 'Employee Misconduct',
      status: 'Assigned to Investigator',
      date: 'Aug 14, 2026',
      description: 'Officer requested informal fee to accelerate tax clearance certificate processing.',
      location: 'Kirkos Sub-City, Addis Ababa, Ethiopia',
      assignedUnit: 'Ethics & Anti-Corruption Directorate',
      isAnonymous: true,
      timeline: [
        { title: 'Report Received', date: 'Aug 11, 10:00', isCompleted: true },
        { title: 'Under Review', date: 'Aug 11, 15:30', isCompleted: true },
        { title: 'Assigned to Investigator', date: 'Aug 13, 10:00', isCompleted: true, isCurrent: true },
        { title: 'Resolved', date: 'Pending', isCompleted: false },
      ],
    },
    {
      id: '3',
      referenceNumber: 'ARB-2024-00125',
      title: 'Unregistered Business',
      category: 'Unregistered Business',
      status: 'Resolved',
      date: 'Aug 14, 2026',
      description: 'Warehouse operating wholesale electronics without TIN registration or business license.',
      location: 'Addis Ketema Sub-City, Addis Ababa, Ethiopia',
      assignedUnit: 'Commercial Registration Enforcement Unit',
      isAnonymous: true,
      timeline: [
        { title: 'Report Received', date: 'Aug 05, 11:20', isCompleted: true },
        { title: 'Under Review', date: 'Aug 06, 09:00', isCompleted: true },
        { title: 'Assigned to Investigator', date: 'Aug 07, 14:00', isCompleted: true },
        { title: 'Resolved', date: 'Aug 12, 16:30', isCompleted: true, isCurrent: true },
      ],
    },
    {
      id: '4',
      referenceNumber: 'ARB-2024-00089',
      title: 'Fake Receipt Reported',
      category: 'Fake Receipt Reported',
      status: 'Under Review',
      date: 'Aug 14, 2026',
      description: 'Discovered forged sales receipts with invalid Tax Identification Number.',
      location: 'Nifas Silk-Lafto, Addis Ababa, Ethiopia',
      assignedUnit: 'Fraud Investigation Directorate',
      isAnonymous: true,
      timeline: [
        { title: 'Report Received', date: 'Aug 08, 08:45', isCompleted: true },
        { title: 'Under Review', date: 'Aug 08, 13:10', isCompleted: true, isCurrent: true },
        { title: 'Assigned to Investigator', date: 'Aug 10, 09:00', isCompleted: false },
        { title: 'Resolved', date: 'Pending', isCompleted: false },
      ],
    },
  ];

  findAll(category?: string) {
    if (category) {
      return this.reports.filter((r) => r.category.toLowerCase().includes(category.toLowerCase()));
    }
    return this.reports;
  }

  findByReference(referenceNumber: string) {
    const clean = referenceNumber.trim().toUpperCase().replace('#', '');
    const found = this.reports.find(
      (r) => r.referenceNumber.toUpperCase() === clean || clean.includes(r.referenceNumber.toUpperCase()),
    );
    if (!found) {
      throw new NotFoundException(`No report found with reference ${referenceNumber}`);
    }
    return found;
  }

  getStats() {
    return {
      reportsThisMonth: 1284,
      avgResponseHours: 1.8,
      trendVsLastMonthPercentage: 8,
      avgResponseImprovementMinutes: 14,
      totalResolvedYearToDate: 4920,
    };
  }

  create(dto: CreateReportDto) {
    const randomSeq = Math.floor(10000 + Math.random() * 90000);
    const referenceNumber = `AARB-2026-${randomSeq}`;
    const now = new Date();
    const dateFormatted = now.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    const newRecord: ReportRecord = {
      id: (this.reports.length + 1).toString(),
      referenceNumber,
      title: dto.category,
      category: dto.category,
      status: 'Submitted',
      date: dateFormatted,
      description: dto.description,
      location: dto.subcity || 'Bole Sub-City, Addis Ababa, Ethiopia',
      assignedUnit: 'Assigned to Bole Sub-City Unit',
      isAnonymous: dto.isAnonymous ?? true,
      timeline: [
        {
          title: 'Report Received',
          date: `${dateFormatted}, ${now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`,
          isCompleted: true,
          isCurrent: true,
        },
        { title: 'Under Review', date: 'Pending', isCompleted: false },
        { title: 'Assigned to Investigator', date: 'Pending', isCompleted: false },
        { title: 'Resolved', date: 'Pending', isCompleted: false },
      ],
    };

    this.reports.unshift(newRecord);
    return {
      success: true,
      message: 'Report successfully submitted',
      data: newRecord,
    };
  }
}
