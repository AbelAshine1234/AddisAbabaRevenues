export interface KnowledgeChunk {
  id: string;
  topic: string;
  keywords: string[];
  content: string;
  amharicSummary: string;
}

export const AARB_KNOWLEDGE_BASE: KnowledgeChunk[] = [
  {
    id: 'vat-receipt-compliance',
    topic: 'VAT and Fiscal Cash Register Sales Receipts',
    keywords: ['vat', 'receipt', 'sales receipt', 'cash register', 'machine', 'voucher', 'pre-bill', 'ደረሰኝ', 'ቫት', 'ካሽ ሬጂስተር'],
    content: `Under Federal Tax Administration Proclamation No. 983/2016 and Addis Ababa City Administration directives:
1. Every business registered for VAT or turnover tax must issue an official electronic fiscal cash register receipt for every sale.
2. Issuing manual handwritten notes, pre-bills, pro-forma invoices, or claiming "machine is broken" is strictly illegal.
3. Penalties include fines from 50,000 ETB to 100,000 ETB, payment of 100% of undeclared taxes, temporary closure of the business premises, and possible criminal prosecution.
4. Citizens are advised to request an official receipt and report non-compliant establishments immediately.`,
    amharicSummary: 'ማንኛውም በቫት የተመዘገበ ነጋዴ ለእያንዳንዱ ግብይት የካሽ ሬጂስተር የሽያጭ ደረሰኝ መስጠት ግዴታው ነው። ያለደረሰኝ መሸጥ ወይም በእጅ የተጻፈ ወረቀት መስጠት በህግ የሚያስቀጣ ነው።',
  },
  {
    id: 'whistleblower-protection-rewards',
    topic: 'Whistleblower Protection and Anonymous Reporting',
    keywords: ['anonymous', 'protect', 'protection', 'identity', 'safe', 'reward', 'whistleblower', 'ምስጢራዊ', 'ጥበቃ', 'ሽልማት', 'ስም'],
    content: `Addis Ababa City Administration guarantees 100% confidentiality to informants and whistleblowers:
1. The AARB Citizen App strips all personal identities and device identifiers when "Report anonymously" is toggled ON.
2. Under Whistleblower Protection Directives, informants are legally immune from retaliation, prosecution, or employer retribution.
3. Verified tip-offs that lead to the recovery of undeclared taxes and penalties qualify the whistleblower for a legal financial reward of up to 10% to 20% of the recovered revenue.
4. Inspectors never reveal the source of the complaint during field audits.`,
    amharicSummary: 'ጥቆማ አቅራቢዎች ማንነታቸው ሙሉ በሙሉ ሚስጥራዊ ሆኖ ይጠበቃል። ህገወጥ የግብር ስወራን ለጠቆመ ዜጋ የተሰወረው ገቢ ሲሰበሰብ ህጋዊ የገንዘብ ሽልማት ይበረከታል::',
  },
  {
    id: 'employee-misconduct-corruption',
    topic: 'Reporting Employee Misconduct, Bribery and Extortion',
    keywords: ['misconduct', 'bribe', 'bribery', 'corruption', 'extortion', 'officer', 'assessor', 'ጉቦ', 'ሙስና', 'ስነምግባር', 'ሰራተኛ'],
    content: `The Addis Ababa Revenues Bureau operates a zero-tolerance policy against corruption:
1. Any tax auditor, assessor, or enforcement officer who requests bribes, delays clearance certificates, or solicits unofficial payments must be reported.
2. Reports filed under "Employee Misconduct" bypass regular audit channels and are routed directly to the Ethics and Anti-Corruption Directorate.
3. Provide the officer's name, sub-city/woreda branch office, tax clearance reference, and date of occurrence if known.`,
    amharicSummary: 'የገቢዎች ቢሮ ሰራተኞች ጉቦ ሲጠይቁ ወይም ስነ-ምግባር ሲያጓድሉ በጥቆማው አማካኝነት ለስነ-ምግባርና ፀረ-ሙስና ዳይሬክቶሬት በቀጥታ ይላካል::',
  },
  {
    id: 'unregistered-fake-receipts',
    topic: 'Unregistered Businesses and Forged Receipts',
    keywords: ['unregistered', 'fake', 'fake receipt', 'tin', 'counterfeit', 'forged', 'ያልተመዘገበ', 'ሀሰተኛ ደረሰኝ', 'ቲን'],
    content: `Unregistered commercial activities and counterfeit vouchers:
1. Operating a business without a valid TIN (Tax Identification Number) and trade license is illegal under Commercial Registration regulations.
2. Forging sales receipts or using another merchant's TIN is a serious fiscal crime.
3. Citizens can verify TIN authenticity through the bureau database. To report, attach clear photographs of the fake receipt and the physical location of the business.`,
    amharicSummary: 'ያለ ንግድ ፈቃድና የግብር ከፋይ መለያ ቁጥር (TIN) የሚሰሩ ነጋዴዎችን እና ሀሰተኛ የሽያጭ ደረሰኞችን ፎቶ በማያያዝ ማጋለጥ ይቻላል::',
  },
  {
    id: 'tracking-timeline-contact',
    topic: 'Case Tracking Timeline and Bureau Contact Hotlines',
    keywords: ['track', 'status', 'timeline', 'reference', 'hotline', 'phone', 'contact', 'bole', '8688', 'መከታተል', 'ስልክ'],
    content: `Tracking your case and Bureau Contacts:
1. Every report generates a unique Case Reference Number formatted as #AARB-YYYY-XXXXX (or ARB-YYYY-XXXXX).
2. Four-stage resolution timeline:
   - Report Received (Logged into system)
   - Under Review (Screened by triage officers)
   - Assigned to Investigator (Field inspectors dispatched to the sub-city branch)
   - Resolved (Enforcement action taken and penalty assessed).
3. Bureau Hotline: 8688 (Toll-free across Addis Ababa). City Emergency: 911.
4. Main branches located in Bole, Kirkos, Arada, Yeka, Addis Ketema, Nifas Silk-Lafto, Gullele, Akaky Kaliti, and Lemi Kura Sub-Cities.`,
    amharicSummary: 'ሪፖርትዎን በኬዝ ቁጥር (#AARB-...) መከታተል ይችላሉ። የቢሮው ነፃ የስልክ መስመር 8688 ሲሆን አደጋ ጊዜ 911 መደወል ይቻላል::',
  },
];
