export interface ProductModule {
  id: string;
  name: string;
  code: string;
  tagline: string;
  description: string;
  capabilities: string[];
  adminCapabilities?: string[];
  icon: string;
  image?: string;
  badge?: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
}

export interface ProductDetailData {
  id: string;
  slug: string;
  name: string;
  categoryBadge: string;
  targetAudience: string[];
  hero: {
    h1: string;
    supportingContent: string;
    secondaryPositioning?: string;
    primaryCtaLabel: string;
    quickPillars: { label: string; desc: string }[];
  };
  challenges: {
    heading: string;
    intro: string;
    items: { title: string; description: string; icon: string }[];
  };
  showcase: {
    heading: string;
    intro: string;
    screenGroups: {
      id: string;
      title: string;
      type: "employee" | "admin" | "member" | "operator";
      badge: string;
      description: string;
      highlights: string[];
      mockupData: {
        headerTitle: string;
        stats?: { label: string; value: string; change?: string }[];
        items?: { label: string; status: string; detail: string; time?: string }[];
        fields?: { label: string; value: string }[];
      };
    }[];
  };
  modules: ProductModule[];
  workflow: {
    heading: string;
    intro: string;
    userWorkflow: {
      roleTitle: string;
      roleBadge: string;
      steps: WorkflowStep[];
    };
    adminWorkflow: {
      roleTitle: string;
      roleBadge: string;
      steps: WorkflowStep[];
    };
  };
  useCases: {
    heading: string;
    intro: string;
    cases: { title: string; description: string; suitableFor: string }[];
  };
  administration: {
    heading: string;
    description: string;
    capabilities: { title: string; detail: string; icon: string }[];
  };
  faqs: { q: string; a: string }[];
  finalCta: {
    heading: string;
    copy: string;
    ctaLabel: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const PRODUCTS_CATALOG: ProductDetailData[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. ATTENDANCE TRACKING SYSTEM
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "attendance-tracking-system",
    slug: "attendance-tracking-system",
    name: "Attendance Tracking System",
    categoryBadge: "Workforce & Operations Management",
    targetAudience: [
      "Business Owners & Founders",
      "HR & Workforce Managers",
      "Field & Site Supervisors",
      "Operations & Contracting Teams",
    ],
    hero: {
      h1: "Employee Attendance Tracking and Workforce Management",
      supportingContent:
        "A simple, mobile-first app to track daily employee attendance, manage leave requests, view itemized payslips, and coordinate job-site materials and tools in real time.",
      primaryCtaLabel: "Send Enquiry",
      quickPillars: [
        { label: "Live Attendance", desc: "One-tap check-in, live working timer & break pauses." },
        { label: "Leave & Payslips", desc: "Real-time leave balances and instant PDF payslips." },
        { label: "Materials & Tools", desc: "Site material indents, photo proof & asset tracking." },
        { label: "Field CRM", desc: "Client premises directory and on-site onboarding." },
      ],
    },
    challenges: {
      heading: "Bring Structure to Everyday Workforce Operations",
      intro:
        "Organizations face complex operational situations when managing employees across multiple offices, client premises, and job sites.",
      items: [
        {
          title: "Attendance & Working-Time Records",
          description:
            "Attendance and working-time records need to be organized, consolidated, and reviewed without relying on fragmented paper logs or unverified manual check-ins.",
          icon: "Clock",
        },
        {
          title: "Monitoring & Exception Identification",
          description:
            "Managers need to monitor attendance activity in real time, identify missing records, detect delayed check-outs, and review relevant operational exceptions.",
          icon: "AlertTriangle",
        },
        {
          title: "Structured Leave Management",
          description:
            "Organizations need clear employee leave-request submission and review workflows so managers can approve or reject requests with full visibility into past records.",
          icon: "CalendarCheck",
        },
        {
          title: "Site-Based Location-Aware Checks",
          description:
            "Teams working at client premises or field sites require location-aware attendance checks to verify check-ins occur within defined permitted project zones.",
          icon: "MapPin",
        },
        {
          title: "Operational Tasks, Tools & Materials",
          description:
            "Workforce operations frequently involve assigned tasks, customer site records, material indents, and tool inventory that require systematic administration.",
          icon: "Wrench",
        },
        {
          title: "Reporting & Administrative Records",
          description:
            "Administrators require organized access to attendance daybooks, department breakdowns, periodic summaries, notifications, and operational reports.",
          icon: "FileText",
        },
      ],
    },
    showcase: {
      heading: "Explore the Attendance and Workforce Management Experience",
      intro:
        "Review the structured interfaces designed for both on-the-ground employees recording daily attendance and administrators supervising workforce operations.",
      screenGroups: [
        {
          id: "employee-attendance",
          title: "Employee Attendance & Working-Time View",
          type: "employee",
          badge: "Employee Mobile / Web Screen",
          description:
            "Clear daily check-in, check-out, multiple attendance session controls, and break-recording controls with instant session status.",
          highlights: [
            "One-tap Check-In and Check-Out actions",
            "Active session duration & break time counters",
            "Permitted location status indicator",
            "Daily attendance history and working-time summaries",
          ],
          mockupData: {
            headerTitle: "Today's Attendance Session",
            stats: [
              { label: "Status", value: "Checked In", change: "Active" },
              { label: "Check-In Time", value: "09:02 AM" },
              { label: "Working Time", value: "05h 42m" },
              { label: "Location", value: "HQ Campus Zone A" },
            ],
            items: [
              { label: "Morning Session", status: "Completed", detail: "09:02 AM - 01:15 PM (04h 13m)" },
              { label: "Lunch Break", status: "Completed", detail: "01:15 PM - 02:00 PM (45m)" },
              { label: "Afternoon Session", status: "Active", detail: "02:00 PM - In Progress" },
            ],
          },
        },
        {
          id: "location-monitoring",
          title: "Location-Aware Checks & Geofence Verification",
          type: "employee",
          badge: "GPS & Site Verification",
          description:
            "GPS-based checks verifying that attendance sessions occur within defined permitted areas, with out-of-bounds notifications.",
          highlights: [
            "Configured work-site permitted radius check",
            "Periodic location checks during active sessions",
            "Missing location-update alerts",
            "Out-of-bounds notification handling",
          ],
          mockupData: {
            headerTitle: "Location Verification: Site #104",
            fields: [
              { label: "Permitted Work Site", value: "Surampatty Operations Facility" },
              { label: "GPS Coordinates", value: "11.3410° N, 77.7172° E" },
              { label: "Geofence Status", value: "Inside Permitted Zone (Radius: 150m)" },
              { label: "Last Verified Check", value: "4 minutes ago (GPS Accurate)" },
            ],
          },
        },
        {
          id: "leave-tasks",
          title: "Leave Requests, Payslips & Task Management",
          type: "employee",
          badge: "Workforce Self-Service",
          description:
            "Employees can review payslip information, submit leave requests with reason notes, and update progress on assigned work tasks.",
          highlights: [
            "Formal leave submission with dates & balance overview",
            "Secure employee payslip information view",
            "Assigned work tasks with instructions and attachments",
            "Task progress status updates",
          ],
          mockupData: {
            headerTitle: "My Operational Dashboard",
            items: [
              { label: "Leave Request #LR-842", status: "Approved", detail: "Annual Leave (2 Days: Oct 30 - Oct 31)" },
              { label: "September Payslip", status: "Available", detail: "Payroll Record Generated & Ready for Review" },
              { label: "Task: Electrical Sub-panel Inspection", status: "In Progress", detail: "Site B - Instructions & Checklist Attached" },
            ],
          },
        },
        {
          id: "admin-overview",
          title: "Administrative Attendance Overview & Control",
          type: "admin",
          badge: "Admin Oversight Console",
          description:
            "Supervisors review real-time presence across departments, investigate attendance exceptions, and manage force checkout actions.",
          highlights: [
            "Real-time present, late, on-leave, and absent headcount",
            "Out-of-bounds and missing-update alert queues",
            "Administrative force checkout or session continuation actions",
            "Daybook summaries and department-level filters",
          ],
          mockupData: {
            headerTitle: "Daily Workforce Attendance Overview",
            stats: [
              { label: "Total Workforce", value: "128" },
              { label: "Present on Site", value: "116", change: "90.6%" },
              { label: "Approved Leave", value: "8" },
              { label: "Location Alerts", value: "2", change: "Requires Review" },
            ],
            items: [
              { label: "Rajesh Kumar (Field Engineering)", status: "Alert: Out-of-Bounds", detail: "Checked in 240m outside Site C zone", time: "09:14 AM" },
              { label: "Priya S. (Quality Assurance)", status: "On Approved Leave", detail: "Casual Leave - Approved by Supervisor", time: "All Day" },
              { label: "Arun M. (Logistics)", status: "Session Active", detail: "Site A - 08h 15m elapsed (Nearing threshold)", time: "08:45 AM" },
            ],
          },
        },
        {
          id: "admin-operations",
          title: "Material Indents, Tools & Customer Operations",
          type: "admin",
          badge: "Field Operations Management",
          description:
            "Administrators review material indents, track tool inventory requests, manage repair workflows, and maintain customer site records.",
          highlights: [
            "Material indent creation and dispatch/receipt logs",
            "Tool request approvals and repair workflow records",
            "Customer site directory and contact information",
            "Comprehensive audit history for operational requests",
          ],
          mockupData: {
            headerTitle: "Operational Requests & Indents",
            items: [
              { label: "Material Indent #MI-409", status: "Approved for Dispatch", detail: "50m Optical Fiber Spool - Client Site #12" },
              { label: "Tool Request #TR-218", status: "Issued", detail: "Digital Multimeter Fluke 115 - Issued to Karthik V." },
              { label: "Tool Repair #REP-031", status: "Under Inspection", detail: "Rotary Hammer Drill - Service scheduled" },
            ],
          },
        },
      ],
    },
    modules: [
      {
        id: "attendance-recording",
        name: "Attendance & Working Timer",
        code: "Module 01",
        badge: "Time Tracking",
        tagline: "One-tap check-in, live timer, and pause/resume breaks",
        description:
          "Clock in and out with a single tap. The live running timer tracks exact daily work hours automatically, with dedicated buttons to pause for lunch or tea breaks and resume work instantly.",
        capabilities: [
          "One-tap Check-In and Check-Out with exact timestamp recording",
          "Live working timer counting total hours worked in real time",
          "Dedicated Break and Resume buttons for meal & tea pauses",
          "Permitted location and site check-in verification",
          "Daily summary showing completed sessions and total working time",
        ],
        adminCapabilities: [
          "View live headcount and working hours across all departments and job sites",
          "Identify delayed check-outs or unusual overtime with automatic alerts",
        ],
        icon: "Clock",
        image: "/images/attendance/attendance-timer.webp",
      },
      {
        id: "dashboard-quick-actions",
        name: "Mobile Dashboard & Quick Actions",
        code: "Module 02",
        badge: "Central Hub",
        tagline: "One-screen access to every daily workforce tool",
        description:
          "A clean central home screen giving staff instant access to Attendance, Leave Requests, Payslips, Material Indents, Tools, CRM, Repairs, and Daily Work Logs.",
        capabilities: [
          "9 quick-action shortcuts for everyday employee duties",
          "Instant access to attendance punch-in and leave balances",
          "Direct 'Contact Admin' shortcut for fast supervisor support",
          "Clean, fast mobile interface that works smoothly on any smartphone",
          "Unified view of personal daily activities and daybook records",
        ],
        adminCapabilities: [
          "Configure visible quick-action shortcuts based on employee roles",
          "Send broadcast notices directly to staff home screens",
        ],
        icon: "LayoutDashboard",
        image: "/images/attendance/dashboard-hub.webp",
      },
      {
        id: "leave-management",
        name: "Leave Requests & Balance Tracking",
        code: "Module 03",
        badge: "Self-Service",
        tagline: "Real-time leave balances and instant approval workflows",
        description:
          "Check remaining leave balances at a glance, pick start and end dates on an easy calendar, type a short reason, and submit requests for prompt supervisor review.",
        capabilities: [
          "Live balance cards for Casual Leave, Medical Leave, and LOP",
          "Simple calendar date-picker for single or multi-day requests",
          "Reason text area to describe your request in seconds",
          "Real-time status updates from Pending to Approved or Rejected",
          "Complete monthly history log of all past leave applications",
        ],
        adminCapabilities: [
          "Central approval queue to review and approve leave requests with one click",
          "Team calendar overview to ensure sufficient on-site workforce coverage",
        ],
        icon: "Calendar",
        image: "/images/attendance/leave-management.webp",
      },
      {
        id: "payroll-records",
        name: "Payslips & Salary Breakdown",
        code: "Module 04",
        badge: "Payroll",
        tagline: "Transparent earnings, deductions, and one-tap PDF downloads",
        description:
          "Employees can check their monthly salary statements anytime, review an itemized breakdown of earnings and statutory deductions, and download official PDF payslips.",
        capabilities: [
          "Itemized earnings: Basic Pay, HRA, CA, and special allowances",
          "Clear deduction breakdown: Provident Fund (PF), ESI, and other deductions",
          "Monthly attendance summary: days worked, absent days, and late arrivals",
          "Overtime hours tracked and reflected in gross pay",
          "One-tap 'Download PDF' button to save payslips to the phone",
        ],
        adminCapabilities: [
          "Generate verified payslips automatically from real attendance records",
          "Export organized monthly payroll summaries for bank transfers and tax records",
        ],
        icon: "Receipt",
        image: "/images/attendance/payslips-breakdown.webp",
      },
      {
        id: "material-indents",
        name: "Material Indents & Field Requests",
        code: "Module 05",
        badge: "Field Operations",
        tagline: "Order job-site materials with priority and photo proof",
        description:
          "Site staff can requisition needed materials directly from their phone. Choose the project site, mark urgency, enter items with quantity and unit, and attach site photos.",
        capabilities: [
          "Select job site and set priority levels (Normal / Urgent)",
          "Itemized requisition table with description, unit, and quantity",
          "Upload photo requirements to clearly show damaged or needed parts",
          "Add multiple items in a single requisition workflow",
          "Track indent status from submission through approval and site delivery",
        ],
        adminCapabilities: [
          "Centralized dashboard to review indents from all client sites in one place",
          "Approve requests, assign inventory, and log dispatch tracking details",
        ],
        icon: "Truck",
        image: "/images/attendance/material-indent.webp",
      },
      {
        id: "tools-inventory",
        name: "Tools Inventory & Return Tracking",
        code: "Module 06",
        badge: "Asset Management",
        tagline: "Track equipment requests, approvals, and returns on a live timeline",
        description:
          "Keep total control over tools and machinery. View request tickets, follow a step-by-step timeline from approval to return, and inspect item details like brand and color.",
        capabilities: [
          "Unique ticket tracking (e.g. #TR-017) linked to specific project sites",
          "Visual status timeline: Requested → Approved → Returned with exact timestamps",
          "Detailed equipment registry table showing tool number, brand, and color",
          "Acknowledge issued tools and log equipment returns seamlessly",
          "Reduces equipment misplacement and ensures complete team accountability",
        ],
        adminCapabilities: [
          "Maintain digital inventory registry of all company equipment and serials",
          "Receive alerts for overdue equipment and schedule repairs or maintenance",
        ],
        icon: "Wrench",
        image: "/images/attendance/tools-tracking.webp",
      },
      {
        id: "customer-operations",
        name: "CRM & Field Customer Directory",
        code: "Module 07",
        badge: "Client Management",
        tagline: "Quick client search, status filters, and on-site customer onboarding",
        description:
          "Search customer accounts and site locations on the go, filter contacts by status (Open, Following, Closed), and add new customer details directly during site visits.",
        capabilities: [
          "Instant search bar across customer names, companies, and work sites",
          "Filter status tabs: All, Open, Following, Closed, and Customer",
          "Expandable client cards with company names and contact persons",
          "Floating '+ Add Customer' button for fast on-site customer registration",
          "Links customer locations directly to site attendance and service visits",
        ],
        adminCapabilities: [
          "Master customer directory with assigned field supervisors and contact info",
          "Review all site visits, service logs, and indents associated with each client",
        ],
        icon: "Building2",
        image: "/images/attendance/crm-customers.webp",
      },
    ],
    workflow: {
      heading: "How the Attendance Tracking System Works",
      intro:
        "Understand the interconnected workflow between employees recording everyday attendance and administrators managing organizational operations.",
      userWorkflow: {
        roleTitle: "Employee Daily Workflow",
        roleBadge: "On-the-Ground User",
        steps: [
          {
            step: "01",
            title: "Access the Application",
            description: "The employee securely accesses the supported mobile or web application using their credentials.",
          },
          {
            step: "02",
            title: "Record Check-In",
            description: "The employee initiates check-in. If location checks are enabled, the system verifies the device is within the permitted work site or geofence.",
          },
          {
            step: "03",
            title: "Manage Sessions & Breaks",
            description: "The employee pauses for breaks or logs split sessions as supported by their operational shift schedule.",
          },
          {
            step: "04",
            title: "Record Check-Out",
            description: "Upon completing duty, the employee executes check-out. Total active working time is calculated and stored in the daily daybook.",
          },
          {
            step: "05",
            title: "Access Self-Service Workflows",
            description: "The employee can access past attendance logs, submit leave requests, view published payslips, and update assigned tasks.",
          },
        ],
      },
      adminWorkflow: {
        roleTitle: "Administrator Operational Workflow",
        roleBadge: "HR & Operational Supervisors",
        steps: [
          {
            step: "01",
            title: "Manage Organizational Structure",
            description: "The administrator defines work sites, coordinates, departments, employee records, and supervisor assignments.",
          },
          {
            step: "02",
            title: "Monitor Live Attendance",
            description: "The administrator reviews real-time attendance overviews, present headcounts, and active shift sessions.",
          },
          {
            step: "03",
            title: "Handle Location Exceptions & Alerts",
            description: "The administrator investigates out-of-bounds alerts, missing location updates, or late check-outs, choosing to allow continuation or force checkout.",
          },
          {
            step: "04",
            title: "Process Leave & Operational Requests",
            description: "The administrator reviews leave requests, material indents, and tool requests in dedicated approval queues.",
          },
          {
            step: "05",
            title: "Review Reports & Summaries",
            description: "The administrator reviews comprehensive attendance summaries, working-time totals, and operational logs for payroll preparation.",
          },
        ],
      },
    },
    useCases: {
      heading: "Built for Diverse Workforce Environments",
      intro:
        "The Attendance Tracking System adapts to various organizational structures requiring structured time records and operational control.",
      cases: [
        {
          title: "Organizations Managing Employee Attendance",
          description:
            "Companies seeking an organized digital replacement for manual registers or fragmented spreadsheets, ensuring verified check-in records.",
          suitableFor: "Commercial offices, factories, retail outlets, and service centers.",
        },
        {
          title: "Site-Based and Field-Stationed Teams",
          description:
            "Organizations with personnel stationed at specific client facilities, construction sites, or service locations requiring geofenced attendance verification.",
          suitableFor: "Facility management companies, construction contractors, and security services.",
        },
        {
          title: "Supervisors Reviewing Leave & Working Time",
          description:
            "Managers who require transparent visibility into working-time records, break durations, and a streamlined approval queue for leave applications.",
          suitableFor: "Operations managers, HR executives, and team leads.",
        },
        {
          title: "Field Teams Requiring Task, Material & Tool Workflows",
          description:
            "Organizations where frontline teams need to request materials, check out specialized tools, and update progress on assigned maintenance or operational tasks.",
          suitableFor: "Engineering teams, telecom technicians, and field service crews.",
        },
      ],
    },
    administration: {
      heading: "Comprehensive Administration & Operational Oversight",
      description:
        "Authorized administrators maintain complete supervisory control over workforce records, operational requests, and system alerts.",
      capabilities: [
        {
          title: "Work Site & Geofence Setup",
          detail: "Define latitude and longitude center points and configure permitted radial zones for each project or office site.",
          icon: "MapPin",
        },
        {
          title: "Department & Employee Directory",
          detail: "Organize employee profiles, assign primary work sites, and establish reporting hierarchies for approval workflows.",
          icon: "Users",
        },
        {
          title: "Exception Decision Workflows",
          detail: "Review location mismatch alerts and execute manual overrides, session approvals, or force checkout actions.",
          icon: "ShieldAlert",
        },
        {
          title: "Centralized Leave & Indent Queues",
          detail: "Approve or decline leave applications, material indents, and tool requests with administrative remarks.",
          icon: "CheckCircle2",
        },
        {
          title: "Attendance Daybooks & Exportable Summaries",
          detail: "Access date-filtered attendance daybooks, individual session histories, and working-time totals.",
          icon: "FileSpreadsheet",
        },
        {
          title: "Broadcast Messages & Notifications",
          detail: "Transmit administrative announcements, shift notifications, and operational alerts directly to employee applications.",
          icon: "Bell",
        },
      ],
    },
    faqs: [
      {
        q: "How do employees punch attendance and log break times?",
        a: "Employees check in with a single tap on the mobile app. A live running timer counts exact work hours automatically, and dedicated buttons allow pausing for meal or tea breaks and resuming work anytime.",
      },
      {
        q: "What does the Mobile Dashboard include?",
        a: "The dashboard is a central home screen with 9 quick-action shortcuts: Attendance, Apply Leave, Payslips, Contact Admin, Material Indent, Tools, CRM, Repair, and Daybook, giving staff everything they need in one place.",
      },
      {
        q: "How does the Leave Management system work?",
        a: "Staff can view their real-time leave balances (Casual, Medical, and Loss-of-Pay), pick dates on an interactive calendar, type a brief reason, and submit requests for immediate manager review and approval.",
      },
      {
        q: "Can employees access and download their payslips from the app?",
        a: "Yes. Employees can review detailed monthly salary statements with full breakdowns of basic pay, allowances (HRA, CA), statutory deductions (PF, ESI), and working days, then download official PDF copies directly to their phone.",
      },
      {
        q: "How do field teams request job-site materials?",
        a: "Frontline staff can open the Material Indent screen, select their work site, set priority (Normal or Urgent), enter required items with quantities and units, and upload photos of required parts or site needs.",
      },
      {
        q: "How are equipment and tool assignments tracked?",
        a: "Each tool request is logged under a unique ticket (e.g. #TR-017) with an exact timeline (Requested → Approved → Returned). The system lists tool numbers, brands, and colors to prevent equipment loss and ensure accountability.",
      },
      {
        q: "How does the CRM module help field teams?",
        a: "The CRM directory enables field teams to search client companies and site locations, filter accounts by status (Open, Following, Closed), and add new customer profiles directly during on-site visits.",
      },
    ],
    finalCta: {
      heading: "Ready to Streamline Your Workforce Operations?",
      copy: "Connect with our team to discuss your attendance tracking, leave policies, and field management workflows.",
      ctaLabel: "Send Enquiry",
    },
    seo: {
      title: "Employee Attendance Tracking System | PEP Software",
      description:
        "Explore employee attendance tracking, working-time records, leave workflows, location-aware attendance and workforce-management capabilities with PEP Software.",
      keywords: [
        "Employee attendance tracking system",
        "Attendance management software",
        "GPS attendance tracking software",
        "Workforce attendance records",
        "Leave management software",
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. BUSINESS CLUB APP
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "business-club-app",
    slug: "business-club-app",
    name: "Business Club App",
    categoryBadge: "Business Networking & Club Operations",
    targetAudience: [
      "Club Presidents & Executive Committees",
      "Chapter Directors & Coordinators",
      "Business Networking Members",
      "B2B Referral Alliances",
    ],
    hero: {
      h1: "Business Club Management and Networking App",
      supportingContent:
        "A dedicated mobile app for business networking chapters to manage member directories, track QR meeting attendance, pass referrals, and celebrate closed business with Thank You Notes.",
      primaryCtaLabel: "Send Enquiry",
      quickPillars: [
        { label: "Member Directory", desc: "Searchable roster with direct Call & WhatsApp connect." },
        { label: "QR Meeting Attendance", desc: "Instant QR check-in and attendance percentage tracking." },
        { label: "Referrals & Thank You Notes", desc: "Pass business leads and log closed business values." },
        { label: "Club Services & Polls", desc: "Visitor registration, member polls, and point systems." },
      ],
    },
    challenges: {
      heading: "Organize Your Club's Membership and Activities",
      intro:
        "Business clubs thrive on active member engagement, regular meetings, and accountable business exchange. Without a dedicated system, tracking participation becomes disorganized.",
      items: [
        {
          title: "Member & Business Information Records",
          description:
            "Maintaining accurate member rosters, company profiles, business categories, and contact details across growing membership chapters.",
          icon: "Users",
        },
        {
          title: "Regular & Power Team Meetings",
          description:
            "Scheduling recurring club meetings and specialized Power Team sessions with clear calendars, venue details, and agenda information.",
          icon: "Calendar",
        },
        {
          title: "Meeting Attendance & Permission Workflows",
          description:
            "Recording meeting attendance reliably, managing member leave requests, and tracking early-departure permissions under club bylaws.",
          icon: "CheckCircle",
        },
        {
          title: "Structured Referral Tracking",
          description:
            "Recording, passing, and monitoring business referrals and R-to-R interactions so members and leaders have visibility into networking exchange.",
          icon: "Share2",
        },
        {
          title: "Thank You Notes & Business Value",
          description:
            "Documenting closed business transactions and acknowledging members with structured Thank You Notes recording associated business value.",
          icon: "Award",
        },
        {
          title: "Visitors, Polls & Engagement Oversight",
          description:
            "Registering prospective visitor attendees, conducting member sentiment polls, maintaining point systems, and publishing club news.",
          icon: "Activity",
        },
      ],
    },
    showcase: {
      heading: "Explore the Business Club App",
      intro:
        "Discover the member and leadership interfaces designed specifically for structured business networking chapters.",
      screenGroups: [
        {
          id: "member-directory",
          title: "Member Directory & Business Profiles",
          type: "member",
          badge: "Member Networking View",
          description:
            "Browse fellow members, inspect business specializations, review contact cards, and initiate collaboration within the chapter.",
          highlights: [
            "Searchable member roster with business category tags",
            "Detailed profile card with company name and offerings",
            "Direct contact options and business links",
            "Member status and chapter membership badges",
          ],
          mockupData: {
            headerTitle: "Chapter Member Directory",
            items: [
              { label: "Suresh Ramanathan", status: "Active Member", detail: "Apex Architectural Solutions • Category: Architecture & Interior Design" },
              { label: "Deepa Narayanan", status: "Active Member", detail: "Zenith Corporate Law Partners • Category: Legal Services" },
              { label: "Karthik Subramanian", status: "Power Team Lead", detail: "Vanguard Tech Systems • Category: Enterprise Cloud Solutions" },
            ],
          },
        },
        {
          id: "meetings-attendance",
          title: "Meeting Schedules & QR Attendance",
          type: "member",
          badge: "Meeting Management",
          description:
            "View upcoming weekly meetings and Power Team sessions, scan QR codes for attendance verification, and submit absence permissions.",
          highlights: [
            "Regular chapter meeting calendar with venue details",
            "Dedicated Power Team breakout meeting schedules",
            "QR-based meeting attendance verification",
            "Leave application and early-departure permission requests",
          ],
          mockupData: {
            headerTitle: "Weekly Chapter Meeting #214",
            fields: [
              { label: "Meeting Date", value: "Thursday, Nov 02, 2026 • 07:30 AM" },
              { label: "Venue", value: "Grand Ballroom, Residency Towers" },
              { label: "Attendance Status", value: "Checked In via QR (07:22 AM)" },
              { label: "Meeting Type", value: "Regular Chapter Breakfast Meeting" },
            ],
          },
        },
        {
          id: "referrals-tyns",
          title: "Referrals & Thank You Note Tracking",
          type: "member",
          badge: "Business Exchange",
          description:
            "Record passed referrals, track R-to-R referral progress, and issue Thank You Notes with verified business transaction amounts.",
          highlights: [
            "Structured referral form with prospect details and connection type",
            "R-to-R (Referral-to-Referral) tracking workflow",
            "Thank You Note submission linked to referred member",
            "Closed business value record logging",
          ],
          mockupData: {
            headerTitle: "Business Exchange Dashboard",
            stats: [
              { label: "Referrals Given", value: "14" },
              { label: "Referrals Received", value: "11" },
              { label: "TYNs Given", value: "₹ 4,80,000" },
              { label: "Engagement Points", value: "320" },
            ],
            items: [
              { label: "Referral to Suresh R.", status: "Contacted", detail: "Commercial Office Refurbishment lead for Texcher Impex" },
              { label: "TYN to Deepa N.", status: "Recorded", detail: "₹ 1,50,000 • Corporate Trademark Filing" },
            ],
          },
        },
        {
          id: "club-admin",
          title: "Club Administration & Chapter Reports",
          type: "admin",
          badge: "Leadership Console",
          description:
            "Club presidents and committee coordinators manage rosters, configure attendance bylaws, review referrals, and coordinate visitor logs.",
          highlights: [
            "Full membership oversight and profile management",
            "Meeting creation, attendance review, and absence approvals",
            "Chapter-wide referral and business value tracking",
            "Visitor registration logs and follow-up coordination",
          ],
          mockupData: {
            headerTitle: "Chapter Leadership Dashboard",
            stats: [
              { label: "Active Members", value: "48" },
              { label: "Meeting Attendance", value: "95.8%" },
              { label: "Referrals Passed", value: "86" },
              { label: "Registered Visitors", value: "6" },
            ],
            items: [
              { label: "Leave Request: Vignesh K.", status: "Pending Review", detail: "Traveling for overseas trade expo (Nov 02)" },
              { label: "Visitor: Meenakshi Sundaram", status: "Registered", detail: "Invited by Karthik S. • Category: Commercial Printing" },
            ],
          },
        },
      ],
    },
    modules: [
      {
        id: "member-dashboard",
        name: "Member Dashboard & Thanks Score",
        code: "Module 01",
        badge: "Central Hub",
        tagline: "Power Team profile, quick services, and business score summary",
        description:
          "A personalized home screen showing your club role, Power Team details, and financial Thanks Score—tracking total business value given and received within the chapter.",
        capabilities: [
          "View your club membership status, role, and Power Team assignment",
          "Live Thanks Score summary showing Total Given and Total Taken values",
          "Quick shortcut access to Club Calendar and News & Events",
          "Bottom navigation bar connecting all core networking features",
        ],
        adminCapabilities: [
          "Broadcast chapter-wide announcements and update club events",
          "Track overall chapter business volume and meeting calendars",
        ],
        icon: "LayoutDashboard",
        image: "/images/business-club/dashboard-summary.webp",
      },
      {
        id: "member-directory",
        name: "Member Directory & Direct Connect",
        code: "Module 02",
        badge: "Networking",
        tagline: "Searchable member database with one-tap Call and WhatsApp",
        description:
          "Find and connect with fellow club members in seconds. Search by member name, company, or business category, and reach out immediately with one-tap Call or WhatsApp buttons.",
        capabilities: [
          "Instant search bar across names, business types, and phone numbers",
          "One-tap direct phone call button for every chapter member",
          "One-tap WhatsApp chat button to start conversations immediately",
          "Member avatar photos, company names, and business specializations",
        ],
        adminCapabilities: [
          "Maintain up-to-date chapter roster with business category exclusivity",
          "Manage active and suspended membership statuses",
        ],
        icon: "Users",
        image: "/images/business-club/member-directory.webp",
      },
      {
        id: "referrals-thanksnote",
        name: "Referrals & Thank You Notes (REF / Thanks)",
        code: "Module 03",
        badge: "Business Exchange",
        tagline: "Pass verified business leads and acknowledge closed deals",
        description:
          "Pass business referrals to fellow members, choose referral types, and submit Thank You Notes recording the exact financial value generated from closed business.",
        capabilities: [
          "Monthly financial counters tracking Month Given and Month Taken amounts",
          "Simple form to submit Self or Tier-3 referrals to selected members",
          "Dedicated Thank You Note submission to record closed business value",
          "Quick 'View Referral' and 'View Thanksnote' buttons to review history",
        ],
        adminCapabilities: [
          "Audit passed referrals and closed business totals for weekly meetings",
          "Generate official chapter performance reports for executive committee",
        ],
        icon: "Share2",
        image: "/images/business-club/referrals-thanksnote.webp",
      },
      {
        id: "meetings-qr-attendance",
        name: "Meetings & QR Code Check-In",
        code: "Module 04",
        badge: "Attendance",
        tagline: "Track meeting attendance rates and scan QR codes to check in",
        description:
          "Stay compliant with club attendance bylaws. Review upcoming Regular Meetings and Power Team sessions, monitor your attendance percentage ring, and scan QR codes on site for instant verification.",
        capabilities: [
          "Separate tracking for Regular Chapter Meetings and Power Team Meetings",
          "Visual circular progress ring showing personal attendance percentage",
          "Meeting counters: Total Meetings, Compulsory Quota, and Attended count",
          "One-tap 'Scan QR Code to Check-In' button for fast meeting check-ins",
        ],
        adminCapabilities: [
          "Display dynamic meeting QR codes on the chapter projection screen",
          "Track real-time check-in timestamps and enforce attendance bylaws",
        ],
        icon: "QrCode",
        image: "/images/business-club/meetings-qr-attendance.webp",
      },
      {
        id: "club-services-governance",
        name: "Club Services, Forms & Points Hub",
        code: "Module 05",
        badge: "Governance",
        tagline: "Polls, leave permissions, visitor invites, and member point tallies",
        description:
          "A comprehensive services menu where members can submit meeting leave requests, early-departure notices, register visitor guests, vote in chapter polls, and view their point score.",
        capabilities: [
          "Apply for meeting leave or early-going permissions under club bylaws",
          "Register prospective visitor guests and invitees before weekly meetings",
          "Participate in chapter polls and democratic club voting",
          "Member-to-Member (R-to-R) interaction logging and Point System tracker",
        ],
        adminCapabilities: [
          "Approve or decline leave applications and early-going notices",
          "Review visitor guest lists and manage post-meeting follow-ups",
        ],
        icon: "ShieldCheck",
        image: "/images/business-club/club-services-governance.webp",
      },
    ],
    workflow: {
      heading: "How the Business Club App Works",
      intro:
        "A clear, structured workflow supporting member networking and chapter administrative coordination.",
      userWorkflow: {
        roleTitle: "Club Member Workflow",
        roleBadge: "Club Member",
        steps: [
          {
            step: "01",
            title: "Access Chapter Application",
            description: "The member logs in to the club application and reviews the active chapter dashboard.",
          },
          {
            step: "02",
            title: "Maintain Business Profile",
            description: "The member maintains their business bio, category, contact information, and company offerings.",
          },
          {
            step: "03",
            title: "Participate in Meetings",
            description: "The member reviews weekly meeting schedules, verifies attendance via QR code, or submits leave requests if unable to attend.",
          },
          {
            step: "04",
            title: "Pass Referrals & Record TYNs",
            description: "The member passes business referrals to colleagues, updates referral statuses, and submits Thank You Notes with closed business amounts.",
          },
          {
            step: "05",
            title: "Engage in Chapter Activities",
            description: "The member invites visitors, participates in polls, monitors engagement points, and reads club news.",
          },
        ],
      },
      adminWorkflow: {
        roleTitle: "Leadership & Administration Workflow",
        roleBadge: "Chapter Leadership",
        steps: [
          {
            step: "01",
            title: "Manage Member Roster",
            description: "The administrator maintains member records, business category classifications, and leadership roles.",
          },
          {
            step: "02",
            title: "Schedule Chapter & Power Team Meetings",
            description: "The administrator configures recurring breakfast meetings, venue details, and Power Team breakout sessions.",
          },
          {
            step: "03",
            title: "Verify Attendance & Enforce Bylaws",
            description: "The administrator oversees QR attendance logs, approves leave requests, and tracks compliance with attendance rules.",
          },
          {
            step: "04",
            title: "Oversee Referrals & Business Value",
            description: "The administrator reviews recorded referrals and cumulative Thank You Note totals for chapter announcements.",
          },
          {
            step: "05",
            title: "Publish News & Coordinate Visitors",
            description: "The administrator publishes announcements, reviews visitor registrations, and prepares weekly meeting summary reports.",
          },
        ],
      },
    },
    useCases: {
      heading: "Designed for Structured Business Networking",
      intro:
        "The Business Club App provides the operational foundation for organizations focused on member referrals, professional development, and structured meetings.",
      cases: [
        {
          title: "Business Networking Clubs",
          description:
            "Formal networking chapters with regular meetings, referral-passing commitments, and accountability for attendance.",
          suitableFor: "Local and regional business networking chapters, B2B exchange groups.",
        },
        {
          title: "Organizations Coordinating Recurring Meetings",
          description:
            "Clubs holding weekly or bi-weekly structured meetings that require QR attendance check-ins and formal leave permission processes.",
          suitableFor: "Executive breakfast clubs, commercial roundtables.",
        },
        {
          title: "Clubs Tracking Business Referrals & Value",
          description:
            "Organizations where members generate business opportunities for one another and wish to record and celebrate closed business value through Thank You Notes.",
          suitableFor: "Referral-based business groups, entrepreneurial alliances.",
        },
        {
          title: "Membership Organizations Needing Visitor Oversight",
          description:
            "Clubs seeking to systematically invite prospective member guests, track visitor attendance, and coordinate membership growth.",
          suitableFor: "Growing business chapters, professional trade clubs.",
        },
      ],
    },
    administration: {
      heading: "Complete Chapter Administration & Governance",
      description:
        "Chapter presidents, vice presidents, and committee coordinators utilize specialized administrative tools to keep the club running smoothly.",
      capabilities: [
        {
          title: "Member Roster Governance",
          detail: "Add, edit, and classify members by specific non-competing business categories with status controls.",
          icon: "Users",
        },
        {
          title: "Meeting Setup & QR Generation",
          detail: "Configure recurring chapter and Power Team meetings with dynamic QR codes for instant check-in verification.",
          icon: "QrCode",
        },
        {
          title: "Attendance Rule Enforcement",
          detail: "Review member absence rates, process leave requests, and apply chapter attendance bylaws systematically.",
          icon: "ShieldAlert",
        },
        {
          title: "Referral & TYN Auditing",
          detail: "Access verified logs of all passed referrals and closed business values for weekly chapter presentations.",
          icon: "BarChart3",
        },
        {
          title: "Visitor Registration Oversight",
          detail: "Monitor registered visitors, manage guest introductions, and coordinate follow-up invitations.",
          icon: "UserCheck",
        },
        {
          title: "Polls & News Management",
          detail: "Conduct member voting polls and broadcast chapter circulars, news updates, and event invitations.",
          icon: "Megaphone",
        },
      ],
    },
    faqs: [
      {
        q: "How does the Member Dashboard track business value?",
        a: "The dashboard features a live Thanks Score Summary showing the total rupee value of business you have given to and received from fellow chapter members, fostering transparent accountability.",
      },
      {
        q: "Can members directly contact each other through the app?",
        a: "Yes. The Member Directory includes instant one-tap Call and WhatsApp buttons alongside member profiles, making it effortless to reach out and collaborate on business opportunities.",
      },
      {
        q: "How do members pass referrals and Thank You Notes?",
        a: "The dedicated REF / Thanks module allows members to pass referrals (Self or Tier-3) to specific colleagues and submit structured Thank You Notes recording the exact business value generated upon deal completion.",
      },
      {
        q: "How does QR-based meeting check-in work?",
        a: "Members tap 'Scan QR Code to Check-In' on their phone to scan the chapter meeting QR code. The app validates the check-in instantly and updates personal attendance percentage rings for Regular and Power Team meetings.",
      },
      {
        q: "What permissions and forms are accessible in the app?",
        a: "Members can apply for meeting leave, log early-departure permissions, register meeting visitor guests, participate in chapter sentiment polls, and review the club point system.",
      },
    ],
    finalCta: {
      heading: "Ready to Empower Your Business Networking Chapter?",
      copy: "Connect with our team to explore how the Business Club App can streamline meetings, referrals, and member engagement for your chapter.",
      ctaLabel: "Send Enquiry",
    },
    seo: {
      title: "Business Club Management App | PEP Software",
      description:
        "Explore a business club management app for member profiles, meetings, attendance, referrals, Thank You Notes and club administration.",
      keywords: [
        "Business club management app",
        "Business networking app",
        "Business referral management software",
        "Club attendance tracking app",
        "Networking chapter software",
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. NETWORK CLUB APP
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "network-club-app",
    slug: "network-club-app",
    name: "Network Club App",
    categoryBadge: "Association & Member Directory Management",
    targetAudience: [
      "Trade Association Leaders & Office Bearers",
      "Executive Committee (EC) Members",
      "Manufacturing & Commercial Suppliers",
      "Industry Network Members",
    ],
    hero: {
      h1: "Network Club and Association Management App",
      supportingContent:
        "A dedicated mobile app for trade associations and industry networks to manage member directories, publish upcoming events, verify logins, and promote trade governance.",
      primaryCtaLabel: "Send Enquiry",
      quickPillars: [
        { label: "Member Directory", desc: "Searchable directory of 250+ registered trade companies." },
        { label: "Secure Portal", desc: "Two-factor mobile and DOB verification for members." },
        { label: "Events & Leagues", desc: "Symposiums, meetings, and annual tournament schedules." },
        { label: "Trade Governance", desc: "Executive committee records and manufacturing standards." },
      ],
    },
    challenges: {
      heading: "Keep Member Information and Association Activities Organized",
      intro:
        "Trade and business associations need an organized digital platform to keep members connected, maintain leadership records, and publicize association events.",
      items: [
        {
          title: "Maintaining a Searchable Member Directory",
          description:
            "Providing members with instant access to an up-to-date association directory where companies, representatives, and brands can be searched seamlessly.",
          icon: "Search",
        },
        {
          title: "Detailed Business & Brand Information",
          description:
            "Recording comprehensive business classifications, addresses, brand dealings, and commercial specialties without messy printed booklets.",
          icon: "Briefcase",
        },
        {
          title: "Organizing Committee & Executive Leadership",
          description:
            "Maintaining formal records of chairpersons, office bearers, and executive committee members categorized by governing terms and years.",
          icon: "Shield",
        },
        {
          title: "Managing Upcoming & Past Association Events",
          description:
            "Publishing schedules for conferences, general body meetings, and industrial expos, along with archives of past-event photos and records.",
          icon: "Calendar",
        },
        {
          title: "Advertisements & Association Announcements",
          description:
            "Displaying member advertisements, sponsors, and official association circulars directly inside the members' application.",
          icon: "Megaphone",
        },
        {
          title: "Member Approvals & Administration",
          description:
            "Reviewing new membership applications in an administrative queue before granting access to association records.",
          icon: "UserCheck",
        },
      ],
    },
    showcase: {
      heading: "Explore the Network Club App",
      intro:
        "Inspect the structured association directory and leadership interfaces designed for trade bodies and professional networks.",
      screenGroups: [
        {
          id: "association-directory",
          title: "Searchable Directory & Business Profiles",
          type: "member",
          badge: "Member Directory View",
          description:
            "Search association members by company name, contact person, industry category, or brand dealings with one-tap contact options.",
          highlights: [
            "Real-time search across member names, companies, and categories",
            "Business profile card with address, dealing brands, and phone",
            "Direct phone, email, and social media connectivity",
            "Association member registration number display",
          ],
          mockupData: {
            headerTitle: "Association Member Directory",
            items: [
              { label: "Murugan Textiles & Weaving", status: "Member #TEA-1082", detail: "Cotton & Rayon Fabrics • Dealing Brands: PureSpin, TexVibe • Erode, TN" },
              { label: "Kaveri Engineering Works", status: "Member #TEA-0941", detail: "Industrial Boiler Parts & Fabrication • Contact: Thiru S. Palanisamy" },
              { label: "Kongu Chemical Corp", status: "Member #TEA-1205", detail: "Textile Dyes & Processing Auxiliaries • Dealing Brands: ColourTech" },
            ],
          },
        },
        {
          id: "committee-governance",
          title: "Executive Committee & Term Leadership",
          type: "member",
          badge: "Association Leadership",
          description:
            "Displays the governing body, office bearers, committee chairpersons, and committee members grouped by operational tenure.",
          highlights: [
            "Current Chairperson, President, Secretary, and Treasurer records",
            "Executive committee member cards with designations",
            "Historical term-by-term committee records",
            "Sub-committee rosters (e.g., Taxation, Trade, Expo)",
          ],
          mockupData: {
            headerTitle: "Governing Committee (Term: 2025 - 2027)",
            items: [
              { label: "Thiru P. Soundararajan", status: "Association President", detail: "Managing Director, Soundar Textiles • Term 2025-2027" },
              { label: "Thiru K. M. Chinnasamy", status: "General Secretary", detail: "Partner, Premier Weaving Mills" },
              { label: "Thiru M. Natarajan", status: "Treasurer", detail: "Chairman, Kongu Dyes & Chemicals" },
            ],
          },
        },
        {
          id: "events-gallery",
          title: "Upcoming Events, Past Archives & Ads",
          type: "member",
          badge: "Events & Announcements",
          description:
            "Browse upcoming association symposiums, review past event photo archives, read official announcements, and view member advertisements.",
          highlights: [
            "Upcoming event agenda with venue, date, and chief guest details",
            "Past event photo gallery and commemorative records",
            "In-app association circulars and official announcements",
            "Featured member advertisements and sponsor showcases",
          ],
          mockupData: {
            headerTitle: "Association Events & Circulars",
            items: [
              { label: "Annual General Body Meeting (AGM)", status: "Upcoming", detail: "Saturday, Nov 14, 2026 • 10:00 AM • Association Auditorium" },
              { label: "Textile Technology Expo 2026", status: "Past Event Archive", detail: "32 Event Photos & Resolution Summary Available" },
              { label: "Circular #42: GST Compliance Workshop", status: "Official Announcement", detail: "Special session with Commercial Tax Department" },
            ],
          },
        },
        {
          id: "association-admin",
          title: "Administrative Console & Member Approvals",
          type: "admin",
          badge: "Admin Console",
          description:
            "Association administrators review pending member applications, update committee rosters, create event notices, and manage in-app advertisements.",
          highlights: [
            "Pending member application queue with approval actions",
            "Member directory profile editing and category management",
            "Committee member assignment and term creation",
            "Event creation and advertisement banner scheduling",
          ],
          mockupData: {
            headerTitle: "Association Management Console",
            stats: [
              { label: "Total Members", value: "342" },
              { label: "Pending Approvals", value: "5" },
              { label: "Upcoming Events", value: "2" },
              { label: "Active Ads", value: "4" },
            ],
            items: [
              { label: "Application: Sri Balaji Weaving Mills", status: "Pending Approval", detail: "Submitted by N. Balaji • Trade License attached" },
              { label: "Event: National Handloom Summit", status: "Draft", detail: "Scheduled for Dec 05 • Awaiting venue confirmation" },
            ],
          },
        },
      ],
    },
    modules: [
      {
        id: "association-branding",
        name: "Association Digital Identity & Splash",
        code: "Module 01",
        tagline: "Official association branding, certified emblem, and fast app launch.",
        description:
          "Presents official association emblems, motto, and trade council affiliations when members launch the mobile app, establishing immediate credibility.",
        capabilities: [
          "Association splash screen highlighting official emblems and regional trade affiliation",
          "Promotes recognized manufacturing standards and collective industry identity",
          "Fast startup validation verifying device session and association credentials",
          "Clean entrance welcoming certified trade members into the digital ecosystem",
        ],
        adminCapabilities: [
          "Configure association branding, emblem artwork, and welcome splash assets",
          "Update association identity, registered trade number, and regional affiliations",
        ],
        icon: "Award",
        badge: "Branding",
        image: "/images/network-club/association-branding.webp",
      },
      {
        id: "members-portal-login",
        name: "Members Portal & Secure Access",
        code: "Module 02",
        tagline: "Two-step verification using registered mobile number and birth date.",
        description:
          "Protects member privacy and confidential business contacts by verifying registered mobile numbers and birth dates without cumbersome passwords.",
        capabilities: [
          "Secure member authentication requiring registered mobile phone number",
          "Date of birth (DOB) verification protecting association member privacy",
          "Instant access verification without forgotten password friction",
          "Built-in helpline connection to the association administrative secretariat",
        ],
        adminCapabilities: [
          "Authorize and update registered member phone numbers and verified rosters",
          "Enforce two-step access control and directory data privacy governance",
        ],
        icon: "ShieldCheck",
        badge: "Access Control",
        image: "/images/network-club/members-portal-login.webp",
      },
      {
        id: "events-activities-hub",
        name: "Events & Tournament Activities Hub",
        code: "Module 03",
        tagline: "Live schedule for conferences, meetings, and premier sports leagues.",
        description:
          "Keeps members updated on general body meetings, technical symposiums, and marquee association tournaments such as CPL (CAUSS Premier League).",
        capabilities: [
          "Live event schedule for association meetings, symposiums, and expos",
          "Dedicated tournament hubs like CPL (CAUSS Premier League Season 14)",
          "Event venue addresses, schedules, agendas, and executive host contacts",
          "Real-time notifications and announcements for association members",
        ],
        adminCapabilities: [
          "Publish upcoming meeting notices, dates, agendas, and venue locations",
          "Broadcast tournament schedules, circular notices, and urgent alerts",
        ],
        icon: "Calendar",
        badge: "Events",
        image: "/images/network-club/events-activities-hub.webp",
      },
      {
        id: "members-directory",
        name: "Member Directory & Trade Registry",
        code: "Module 04",
        tagline: "Searchable registry across 250+ registered trade enterprises.",
        description:
          "Enables members to rapidly search, browse, and connect with fellow registered manufacturers, component dealers, and power equipment firms.",
        capabilities: [
          "Searchable member directory listing over 251+ registered businesses",
          "Alphabetical sorting and company profile card previews",
          "Direct one-tap phone call, WhatsApp, and navigation actions",
          "Displays authorized membership ID numbers and trade classifications",
        ],
        adminCapabilities: [
          "Maintain verified company profiles, contact numbers, and trade designations",
          "Categorize firms by industrial lines, certifications, and product categories",
        ],
        icon: "Users",
        badge: "Directory",
        image: "/images/network-club/members-directory.webp",
      },
      {
        id: "association-governance-mission",
        name: "Association Mission & Quality Governance",
        code: "Module 05",
        tagline: "Industrial growth roadmap, quality standards, and code of ethics.",
        description:
          "Documents association history, industrial objectives, product quality standards, and ethical codes of conduct for all affiliated members.",
        capabilities: [
          "Association history, founding milestones, and executive objectives",
          "Industrial development guidelines and product quality benchmarks",
          "Code of ethics promoting reliable manufacturing and fair trade",
          "Structured guidelines empowering local trade members and suppliers",
        ],
        adminCapabilities: [
          "Update association bylaws, quality standards, and mission statements",
          "Publish official guidelines and resolutions for member adherence",
        ],
        icon: "Building2",
        badge: "Governance",
        image: "/images/network-club/association-governance-mission.webp",
      },
    ],
    workflow: {
      heading: "How the Network Club App Works",
      intro:
        "Understand how members access association directories and how administrators maintain leadership, events, and approvals.",
      userWorkflow: {
        roleTitle: "Association Member Workflow",
        roleBadge: "Association Member",
        steps: [
          {
            step: "01",
            title: "Access Association App",
            description: "The member logs in and accesses the verified association directory and news feed.",
          },
          {
            step: "02",
            title: "Search & Discover Businesses",
            description: "The member searches fellow members by trade, company name, dealing brands, or industry category.",
          },
          {
            step: "03",
            title: "Connect with Colleagues",
            description: "The member views business cards, contact numbers, addresses, and social links to initiate commercial inquiries.",
          },
          {
            step: "04",
            title: "Review Leadership & Events",
            description: "The member checks the active executive committee roster, upcoming association gatherings, and past-event photo galleries.",
          },
          {
            step: "05",
            title: "Receive Community Updates",
            description: "The member views association circulars, member advertisements, and birthday/anniversary greeting notifications.",
          },
        ],
      },
      adminWorkflow: {
        roleTitle: "Administrator & Committee Workflow",
        roleBadge: "Association Office Bearers",
        steps: [
          {
            step: "01",
            title: "Review Member Applications",
            description: "The administrator reviews pending member submissions, validates trade details, and approves or declines entry.",
          },
          {
            step: "02",
            title: "Maintain Directory & Business Profiles",
            description: "The administrator manages member company classifications, dealing brands, and contact records.",
          },
          {
            step: "03",
            title: "Update Committee & Term Rosters",
            description: "The administrator designates chairpersons, office bearers, and committee members under active operational terms.",
          },
          {
            step: "04",
            title: "Publish Events & Archives",
            description: "The administrator schedules upcoming general body meetings and uploads photos to past event archives.",
          },
          {
            step: "05",
            title: "Coordinate Ads & Announcements",
            description: "The administrator uploads member sponsor banners, publishes official circulars, and monitors member engagement.",
          },
        ],
      },
    },
    useCases: {
      heading: "Ideal for Trade & Professional Associations",
      intro:
        "The Network Club App is specifically suited for member-based bodies prioritizing structured directories, leadership governance, and event communication.",
      cases: [
        {
          title: "Trade & Industrial Associations",
          description:
            "Industrial bodies (e.g., textile associations, manufacturing federations, merchant chambers) needing a searchable directory of member factories, dealers, and brands.",
          suitableFor: "Textile associations, manufacturing guilds, merchant chambers.",
        },
        {
          title: "Local Business Associations",
          description:
            "Regional commercial groups and commerce chapters maintaining member directories, promoting local events, and coordinating executive committees.",
          suitableFor: "Regional chambers of commerce, town trade councils.",
        },
        {
          title: "Professional Networks & Guilds",
          description:
            "Professional bodies (e.g., engineers, architects, medical fraternities) organizing member rosters, annual conventions, and committee governance.",
          suitableFor: "Professional associations, chartered institutes, alumni chapters.",
        },
        {
          title: "Member Organizations with Committee Terms",
          description:
            "Associations with elected term-based governance that need to formally document past and present chairpersons, committees, and circulars.",
          suitableFor: "Elected association councils, trade federations.",
        },
      ],
    },
    administration: {
      heading: "Structured Governance & Association Controls",
      description:
        "Office bearers and association secretariats manage membership rosters, committee leadership, and official circulars from a unified portal.",
      capabilities: [
        {
          title: "Member Application Screening",
          detail: "Screen and approve new member registrations with verification of company credentials.",
          icon: "UserCheck",
        },
        {
          title: "Multi-Field Directory Management",
          detail: "Configure business categories, verify dealing brands, and keep contact databases current.",
          icon: "BookOpen",
        },
        {
          title: "Term-Based Committee Organization",
          detail: "Define leadership terms, assign office bearers, and maintain complete historical leadership archives.",
          icon: "Shield",
        },
        {
          title: "Event Publishing & Photo Archiving",
          detail: "Publish upcoming meeting agendas, venue directions, and upload event photography to galleries.",
          icon: "Image",
        },
        {
          title: "Advertisement Scheduling",
          detail: "Manage promotional banner placements for member sponsors with duration and link configurations.",
          icon: "Megaphone",
        },
        {
          title: "Official Circular Broadcasting",
          detail: "Transmit urgent regulatory circulars, meeting notices, and association bulletins to member devices.",
          icon: "Send",
        },
      ],
    },
    faqs: [
      {
        q: "What are the core modules included in the Network Club App?",
        a: "The Network Club App features an Association Digital Identity splash, a secure Members Portal with mobile and DOB login verification, an Events and Sports Tournament Hub (like CPL), a searchable Member Directory of 250+ trade businesses, and an Association Governance and Mission section outlining quality standards.",
      },
      {
        q: "How do members authenticate and access the association portal?",
        a: "Access is restricted to authorized association members. Members verify their registered mobile number along with their Date of Birth (DOB) for fast two-step validation, avoiding password resets while keeping directory contact details strictly confidential.",
      },
      {
        q: "Can members search and connect with companies across the directory?",
        a: "Yes. The searchable trade directory lists over 251 registered companies, power control manufacturers, and suppliers. Members can search by company name, category, or representative, and initiate calls, WhatsApp chats, or navigation with a single tap.",
      },
      {
        q: "How does the app manage events, sports leagues, and tournaments?",
        a: "The Events Hub publishes upcoming general body meetings, conferences, and association sports tournaments like the CAUSS Premier League (CPL). Members can view match dates, venue locations, and executive host contacts in real time.",
      },
      {
        q: "Where can members find association quality benchmarks and bylaws?",
        a: "The Association Mission and Governance module displays founding milestones, industrial development roadmaps, manufacturing quality benchmarks, and ethical guidelines governing all affiliated trade members.",
      },
    ],
    finalCta: {
      heading: "Ready to Modernize Your Trade Association?",
      copy: "Connect with our specialist team to explore how the Network Club App can organize your member directory, upcoming events, and trade communications.",
      ctaLabel: "Send Enquiry",
    },
    seo: {
      title: "Association and Network Club App | PEP Software",
      description:
        "Explore association management features for member directories, business profiles, committee information, events and membership administration.",
      keywords: [
        "Association management app",
        "Club membership management software",
        "Member directory app",
        "Trade association software",
        "Committee management system",
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 4. MATRIMONY APPLICATION
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "matrimony-application",
    slug: "matrimony-application",
    name: "Matrimony Application",
    categoryBadge: "B2B Software for Businesses & Associations",
    targetAudience: [
      "Matrimonial Bureaus & Matchmaking Agencies",
      "Community Associations & Cultural Trusts",
      "Family Network Coordinators",
      "Matrimonial Service Operators",
    ],
    hero: {
      h1: "Community Matrimony and Matchmaking Application",
      supportingContent:
        "A modern mobile app for matrimonial bureaus and community trusts to manage member profiles, filter partner discoveries, handle interest workflows, and download verified biodata PDFs.",
      primaryCtaLabel: "Send Enquiry",
      quickPillars: [
        { label: "Partner Discovery", desc: "Filter by age, profession, star, and community ID." },
        { label: "Verified Biodata & PDF", desc: "Multi-page matrimonial biodata downloads." },
        { label: "Interests & Favourites", desc: "Accept or decline incoming requests and shortlist matches." },
        { label: "Membership Tiers", desc: "Silver and premium plans with contact unlock quotas." },
      ],
    },
    challenges: {
      heading: "Organize Matrimony Service Operations and Member Records",
      intro:
        "Operating a matrimony service requires careful management of confidential profiles, verification procedures, subscription plans, and customer support.",
      items: [
        {
          title: "Organizing Detailed Member Profiles",
          description:
            "Managing multi-step registrations covering personal background, education, career, family details, astrology, and partner expectations systematically.",
          icon: "User",
        },
        {
          title: "Controlled Profile Registration & Updates",
          description:
            "Allowing members to update their details while routing major profile modifications through an administrative approval workflow.",
          icon: "Edit3",
        },
        {
          title: "Structured Profile Discovery & Search",
          description:
            "Providing members with fast, filter-based search across age, location, education, occupation, marital status, and astrology parameters.",
          icon: "Search",
        },
        {
          title: "Managing Member Interests & Interactions",
          description:
            "Supporting sent and received interests, accept or decline actions, and bookmarking favourite profiles in an organized interaction center.",
          icon: "Heart",
        },
        {
          title: "Horoscope Documents & Biodata Handling",
          description:
            "Managing horoscope chart documents, horoscope viewing, and on-demand biodata PDF generation for family sharing.",
          icon: "FileText",
        },
        {
          title: "Membership Plans & Payment Verification",
          description:
            "Handling subscription plan assignments, member receipt uploads with transaction references, and operator-side payment verification.",
          icon: "CreditCard",
        },
      ],
    },
    showcase: {
      heading: "Explore the Matrimony Application Experience",
      intro:
        "Review the dual-sided experience: intuitive partner discovery for registered members and robust operational oversight for service administrators.",
      screenGroups: [
        {
          id: "member-discovery",
          title: "Partner Discovery, Search & Filters",
          type: "member",
          badge: "Member Discovery Interface",
          description:
            "Members filter profiles by age, education, occupation, location, and astrology, viewing curated profile cards with verified badges.",
          highlights: [
            "Search filters for age range, education level, and occupation",
            "Location and country-based filtering options",
            "Astrology-related search criteria where implemented",
            "Profile detail view with family, lifestyle, and preference cards",
          ],
          mockupData: {
            headerTitle: "Partner Search Results (Filtered)",
            items: [
              { label: "Profile #MAT-2940 (Age: 27)", status: "Active Member", detail: "B.Tech, MBA • Senior Product Designer, Bengaluru • Star: Rohini" },
              { label: "Profile #MAT-3118 (Age: 29)", status: "Active Member", detail: "M.S. Software Engineering • Technical Architect, Chennai • Star: Hastham" },
              { label: "Profile #MAT-2804 (Age: 26)", status: "Active Member", detail: "Chartered Accountant (CA) • Senior Auditor, Coimbatore • Star: Uthiram" },
            ],
          },
        },
        {
          id: "interests-horoscope",
          title: "Interests, Favourites & Horoscope Biodata",
          type: "member",
          badge: "Member Interaction Hub",
          description:
            "Manage sent and received interests, view bookmarked favourite profiles, inspect horoscope charts, and generate downloadable biodata PDFs.",
          highlights: [
            "Express Interest workflow with Accept / Decline responses",
            "Saved favourite profiles for quick reference",
            "Horoscope document viewing and downloading where uploaded",
            "One-tap Biodata PDF generation for family discussions",
          ],
          mockupData: {
            headerTitle: "My Profile Activity & Interactions",
            stats: [
              { label: "Received Interests", value: "8" },
              { label: "Sent Interests", value: "12" },
              { label: "Saved Favourites", value: "5" },
              { label: "Contact Unlocks", value: "6 Remaining" },
            ],
            items: [
              { label: "Interest from Profile #MAT-3015", status: "Pending Acceptance", detail: "Received Yesterday • B.Arch, Interior Architect, Erode" },
              { label: "Interest to Profile #MAT-2940", status: "Accepted by Member", detail: "Accepted 2 days ago • Contact Reveal available" },
            ],
          },
        },
        {
          id: "operator-approvals",
          title: "Operator Profile Approvals & Moderation",
          type: "operator",
          badge: "Operator Moderation Console",
          description:
            "Operators review new profile submissions, inspect profile-change requests, moderate photos, and manage account blocking.",
          highlights: [
            "Approval queue for newly submitted member registrations",
            "Review of modified profile details before public updates",
            "Inspection of uploaded photos and community certificates",
            "Account moderation, suspension, and blocking controls",
          ],
          mockupData: {
            headerTitle: "Operator Moderation Queue",
            stats: [
              { label: "Pending Approvals", value: "7" },
              { label: "Profile Changes", value: "4" },
              { label: "Active Profiles", value: "1,240" },
              { label: "Reports / Flagged", value: "0" },
            ],
            items: [
              { label: "New Profile: Ananya S.", status: "Pending Approval", detail: "Registration complete • Horoscope & 2 Photos attached for review" },
              { label: "Profile Change: Karthik R.", status: "Modification Request", detail: "Updated occupation details: Promoted to Engineering Lead" },
            ],
          },
        },
        {
          id: "operator-subscriptions",
          title: "Membership Plans & Payment Verification",
          type: "operator",
          badge: "Subscription Management",
          description:
            "Administrators review membership tier assignments, inspect uploaded payment receipts, verify transaction references, and activate entitlements.",
          highlights: [
            "Membership plan setup and entitlement configuration",
            "Review of member payment receipt uploads and UTR numbers",
            "Administrative payment verification and plan activation",
            "Subscription renewal status tracking and expiry monitoring",
          ],
          mockupData: {
            headerTitle: "Payment Verification Queue",
            items: [
              { label: "Payment #PAY-849: Profile #MAT-3042", status: "Pending Verification", detail: "Gold Plan Upgrade • UTR: 4291840291 • Receipt Uploaded" },
              { label: "Payment #PAY-848: Profile #MAT-2910", status: "Verified & Active", detail: "Platinum Plan • Verified by Operator • 25 Contact Unlocks Granted" },
            ],
          },
        },
      ],
    },
    modules: [
      {
        id: "community-home-hub",
        name: "Community Welcome & Values Hub",
        code: "Module 01",
        tagline: "Culturally tailored welcome screen with bilingual font and language tools.",
        description:
          "Welcomes community members with inspirational marriage values, bilingual language switching, and easy access to core matchmaking navigation.",
        capabilities: [
          "Culturally rooted marriage values and community welcome messages",
          "Bilingual language toggle and adjustable text typography",
          "Intuitive bottom navigation for discovery, interests, and profile",
          "Fast member onboarding with trusted community branding",
        ],
        adminCapabilities: [
          "Customize community greetings, banner artwork, and regional language content",
          "Manage community trust credentials and welcome announcements",
        ],
        icon: "Building2",
        badge: "Home Hub",
        image: "/images/matrimony/community-home-hub.webp",
      },
      {
        id: "profile-search-discovery",
        name: "Profile Search & Parameter Discovery",
        code: "Module 02",
        tagline: "Quick discovery across member IDs, names, stars, and professions.",
        description:
          "Enables prospective brides, grooms, and parents to search and filter profiles by unique ID, astrology star, Rasi, and occupational sector.",
        capabilities: [
          "Instant lookup by Profile ID, candidate name, Rasi, or birth star",
          "Quick filters for private sector, IT corporate, and business owners",
          "Visual candidate card grid showing age, profession, and photos",
          "One-tap navigation to view full verified candidate credentials",
        ],
        adminCapabilities: [
          "Configure searchable parameters and verified profession tags",
          "Monitor profile discovery queries and member search engagement",
        ],
        icon: "Search",
        badge: "Discovery",
        image: "/images/matrimony/profile-search-discovery.webp",
      },
      {
        id: "interest-requests-management",
        name: "Interest Requests & Connection Workflow",
        code: "Module 03",
        tagline: "Manage new, received, and sent interests with Accept or Decline controls.",
        description:
          "Keeps matchmaking communications polite and organized with dedicated tabs for incoming requests, sent proposals, and one-tap responses.",
        capabilities: [
          "Separated tabs for New requests, Received proposals, and Sent interests",
          "One-tap Accept or Decline response actions for mutual consent",
          "Live status indicators showing pending and accepted proposals",
          "Safe, confidential communication workflow prior to contact exchange",
        ],
        adminCapabilities: [
          "Audit interest exchange volumes and engagement ratios",
          "Prevent duplicate or spam interest submissions across members",
        ],
        icon: "Heart",
        badge: "Interests",
        image: "/images/matrimony/interest-requests-management.webp",
      },
      {
        id: "membership-profile-settings",
        name: "Member Profile & Tier Management",
        code: "Module 04",
        tagline: "Account settings, tier quotas, and instant 3-page PDF biodata downloads.",
        description:
          "Allows members to view and edit profile details, check silver or premium membership validity, monitor contact reveal quotas, and download official 3-page biodata PDFs.",
        capabilities: [
          "Membership tier status display (e.g., Silver Premium Member) with expiry time",
          "Plan usage tracking showing used and remaining contact unlock quotas",
          "Direct access to View Profile, Edit Profile, and saved Bookmarks",
          "One-tap official 3-page matrimonial biodata PDF download",
        ],
        adminCapabilities: [
          "Configure membership tiers, quota validity, and contact reveal limits",
          "Generate and regenerate official member biodata documents",
        ],
        icon: "Crown",
        badge: "Membership",
        image: "/images/matrimony/membership-profile-settings.webp",
      },
      {
        id: "shortlisted-favourites",
        name: "Favourites & Shortlisted Matches",
        code: "Module 05",
        tagline: "Dedicated shortlist hub for family discussions and quick review.",
        description:
          "Provides a private bookmarks tray where members and parents can save promising candidate profiles for family deliberations.",
        capabilities: [
          "Dedicated private favorites tray for bookmarked match profiles",
          "Instant profile summaries with photo preview and basic credentials",
          "Seamless removal or promotion from favourites to formal interest",
          "Convenient hub for joint family decision-making",
        ],
        adminCapabilities: [
          "Aggregate analytics on most bookmarked demographic brackets",
          "Ensure bookmark privacy is maintained across all accounts",
        ],
        icon: "Award",
        badge: "Shortlist",
        image: "/images/matrimony/shortlisted-favourites.webp",
      },
      {
        id: "detailed-match-biodata",
        name: "Detailed Match Biodata & Horoscopes",
        code: "Module 06",
        tagline: "Personal, physical, and astrological details with direct connection actions.",
        description:
          "Displays structured candidate profiles segmented into Personal Details, Physical Attributes, and Astrological Parameters with PDF export and connection actions.",
        capabilities: [
          "Structured personal details: Profile ID, DOB, marital status, and profile creator",
          "Physical attributes section including height and physical status",
          "Astrological parameters section covering Rasi, Nakshatram, and Dosham",
          "Integrated actions: Add to Favourites, Connected status, and PDF download",
        ],
        adminCapabilities: [
          "Verify candidate identity documents and uploaded astrological charts",
          "Review and approve profile modifications before public updating",
        ],
        icon: "FileText",
        badge: "Biodata",
        image: "/images/matrimony/detailed-match-biodata.webp",
      },
    ],
    workflow: {
      heading: "How the Matrimony Application Works",
      intro:
        "A clear, dual-perspective workflow illustrating how registered members interact with the service and how operators govern platform operations.",
      userWorkflow: {
        roleTitle: "Member Discovery & Matching Workflow",
        roleBadge: "Registered Member",
        steps: [
          {
            step: "01",
            title: "Register & Build Profile",
            description: "The member completes the multi-step registration wizard entering personal, education, family, lifestyle, and partner preference details.",
          },
          {
            step: "02",
            title: "Upload Photos & Horoscope",
            description: "The member uploads profile photos, astrological chart details, or horoscope documents as supported by the service.",
          },
          {
            step: "03",
            title: "Await Profile Approval",
            description: "The profile enters the operator review queue. Once approved by the administrator, it becomes searchable on the platform.",
          },
          {
            step: "04",
            title: "Search & Express Interest",
            description: "The member searches profiles using filters, saves favourites, and sends interests to prospective matches.",
          },
          {
            step: "05",
            title: "Unlock Contacts & Download Biodata",
            description: "Upon mutual interest acceptance or plan entitlement, the member unlocks verified contact details and downloads biodata PDFs.",
          },
        ],
      },
      adminWorkflow: {
        roleTitle: "Service Operator & Administrative Workflow",
        roleBadge: "Matrimony Service Operator",
        steps: [
          {
            step: "01",
            title: "Screen New Profiles",
            description: "The operator reviews new profile applications, verifies submitted photos and documentation, and approves verified profiles for publication.",
          },
          {
            step: "02",
            title: "Moderate Profile Changes",
            description: "The operator reviews member-requested updates to critical profile information to maintain database accuracy.",
          },
          {
            step: "03",
            title: "Verify Payments & Activate Plans",
            description: "The operator reviews uploaded bank receipts and UTR reference codes, verifies transaction receipt, and activates membership entitlements.",
          },
          {
            step: "04",
            title: "Govern User Moderation",
            description: "The operator handles member inquiries, investigates reported accounts, and applies temporary suspensions or user blocks when necessary.",
          },
          {
            step: "05",
            title: "Monitor Service Operations",
            description: "The operator reviews registration statistics, active subscription counts, and verified payment records on the administrative dashboard.",
          },
        ],
      },
    },
    useCases: {
      heading: "Tailored for Matrimony Service Operators & Associations",
      intro:
        "The Matrimony Application provides the core software infrastructure for organizations establishing or upgrading their matrimony services.",
      cases: [
        {
          title: "Entrepreneurs Launching a Matrimony Service",
          description:
            "Business owners seeking a robust, ready-to-deploy application experience covering profile registration, partner discovery, and operator subscription management.",
          suitableFor: "Digital matchmaking ventures, regional matrimony services.",
        },
        {
          title: "Community & Trade Associations",
          description:
            "Associations wishing to provide a dedicated, verified matrimony platform for their member families with strict administrative oversight.",
          suitableFor: "Community welfare associations, cultural trusts, trade fraternities.",
        },
        {
          title: "Matrimony Bureaus Digitizing Operations",
          description:
            "Established physical bureaus looking to replace manual paper records with a modern member portal, automated biodata generation, and administrative receipt logging.",
          suitableFor: "Traditional marriage bureaus, family matchmakers.",
        },
        {
          title: "Service Operators Requiring Manual Payment Verification",
          description:
            "Operators who prefer direct bank transfers, UPI transactions, or offline payments where receipts and transaction references are manually verified before plan activation.",
          suitableFor: "Boutique agencies, community non-profits, specialized bureaus.",
        },
      ],
    },
    administration: {
      heading: "Comprehensive Operator Management & Privacy Controls",
      description:
        "Service operators hold full control over member verification, subscription administration, and community moderation.",
      capabilities: [
        {
          title: "Profile Approval Queue",
          detail: "Screen every new profile, photograph, and community certificate prior to public directory visibility.",
          icon: "UserCheck",
        },
        {
          title: "Profile Change Request Review",
          detail: "Review and approve major profile updates to prevent misleading or inappropriate modifications.",
          icon: "Edit3",
        },
        {
          title: "Membership Tier & Quota Setup",
          detail: "Configure subscription tiers, contact reveal quotas, and validity periods for membership plans.",
          icon: "Crown",
        },
        {
          title: "Payment Receipt Verification",
          detail: "Inspect uploaded payment receipts, verify UTR codes, and activate member subscription entitlements.",
          icon: "Receipt",
        },
        {
          title: "Account Moderation & Blocking",
          detail: "Suspend or block accounts violating service rules, with complete user record management.",
          icon: "ShieldAlert",
        },
        {
          title: "Service Operations Dashboard",
          detail: "Review registration trends, active profiles, pending approval queues, and subscription summaries.",
          icon: "BarChart3",
        },
      ],
    },
    faqs: [
      {
        q: "What are the core modules included in the Matrimony Application?",
        a: "The Matrimony Application includes a Community Welcome & Values Hub, Advanced Profile Search by ID and birth star, an Interest Requests manager with Accept/Decline actions, Member Profile and Tier settings with 3-page PDF biodata downloads, a Shortlisted Favourites tray, and Detailed Match Biodata with astrology records.",
      },
      {
        q: "Can members search profiles by astrology and profession parameters?",
        a: "Yes. Members and parents can search profiles using candidate ID, name, Rasi, Nakshatram (birth star), and occupational filters like Private Sector, IT Corporate, or Business Owner.",
      },
      {
        q: "How does the interest and proposal workflow operate?",
        a: "Members can express interest in suitable profiles. Recipients receive notifications in their Interests inbox with dedicated tabs for New, Received, and Sent requests, allowing them to Accept or Decline with a single tap before contact details are exchanged.",
      },
      {
        q: "Can members download printable matrimonial biodata PDFs?",
        a: "Yes. The application includes a standardized 3-page matrimonial biodata PDF generator that compiles verified personal, physical, family, and astrological details for easy offline sharing with family elders.",
      },
      {
        q: "How are membership tiers and contact unlock quotas managed?",
        a: "Members can view their tier status (e.g., Silver Premium Member) with remaining validity and quota counters (e.g., 2 used, 3 remaining). Operators can configure tier allowances and quotas from the administrative console.",
      },
    ],
    finalCta: {
      heading: "Ready to Launch Your Community Matrimony Platform?",
      copy: "Connect with our team to discover how our Matrimony Application can streamline member registration, partner discovery, biodata PDF generation, and membership tiers.",
      ctaLabel: "Send Enquiry",
    },
    seo: {
      title: "Matrimony Application Software for Businesses | PEP Software",
      description:
        "Explore matrimony application software with profile registration, partner search, member interactions, membership administration and management tools.",
      keywords: [
        "Matrimony software for businesses",
        "Matrimony application for associations",
        "Community matrimony software",
        "Matrimonial profile management software",
        "Matchmaking bureau management system",
      ],
    },
  },
];
