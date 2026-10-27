export interface ProductModule {
  id: string;
  name: string;
  code: string;
  tagline: string;
  description: string;
  capabilities: string[];
  adminCapabilities?: string[];
  icon: string;
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
      "Business owners",
      "HR and workforce managers",
      "Employee supervisors",
      "Organizations coordinating employees and attendance",
      "Organizations with site-based or location-aware attendance requirements",
    ],
    hero: {
      h1: "Employee Attendance Tracking and Workforce Management",
      supportingContent:
        "Manage employee attendance and related workforce activities through an application experience that brings together attendance records, employee workflows and administrative oversight. Explore attendance, location-aware checks, leave management and additional workforce-operation modules.",
      primaryCtaLabel: "Request a Demo",
      quickPillars: [
        { label: "Attendance & Working Time", desc: "Structured check-in, check-out, sessions, and daily records." },
        { label: "Location-Aware Checks", desc: "GPS permitted-location checks, geofencing, and exception alerts." },
        { label: "Leave & Workforce Workflows", desc: "Leave approvals, task assignments, tools, and material indents." },
        { label: "Administrative Oversight", desc: "Centralized attendance history, summaries, and operational reports." },
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
        name: "Attendance Recording & Working Time",
        code: "Module A",
        tagline: "Precision check-in, check-out, and daily session records.",
        description:
          "Enables employees to record attendance through supported check-in and check-out workflows, supporting multiple daily attendance sessions, break recording, and detailed working-time records.",
        capabilities: [
          "Employee Check-In and Check-Out workflows with exact timestamp recording",
          "Multiple attendance sessions in a single day for split shifts or multi-site duties",
          "Break-related recording for meal breaks, tea breaks, and operational pauses",
          "Working-time calculation based on recorded check-in and check-out intervals",
          "Daily records and daybooks displaying full day-by-day attendance breakdowns",
          "Attendance history access for employees to review their own monthly working days",
          "Periodic attendance summaries for authorized managers to review team hours",
        ],
        adminCapabilities: [
          "Review daily attendance daybooks across branches, shifts, and departments",
          "Filter records by date range, department, employee ID, and attendance status",
          "Inspect individual session timestamps, total working hours, and recorded breaks",
        ],
        icon: "Clock",
      },
      {
        id: "location-monitoring",
        name: "Location-Aware Attendance & Monitoring",
        code: "Module B",
        tagline: "GPS validation, geofenced sites, and exception-handling workflows.",
        description:
          "Provides GPS-based location checks against defined permitted work sites, geofenced boundaries, periodic checks, and administrative alerts for out-of-bounds or missing location updates.",
        capabilities: [
          "GPS-based attendance check verification against configured work-site coordinates",
          "Site-based permitted-location checks ensuring check-in occurs within defined zones",
          "Geofencing within a defined permitted radius around authorized client or facility sites",
          "Background location checks during active duty where supported by device workflow",
          "Periodic location checks at configured intervals during active attendance sessions",
          "Missing location-update alerts when a device fails to report timely coordinates",
          "Out-of-bounds alerts when attendance activity is recorded outside permitted zones",
          "Attendance and location notifications for supervisors when exceptions are detected",
        ],
        adminCapabilities: [
          "Configure work sites with latitude, longitude, and permitted radius boundaries",
          "Review out-of-bounds attendance exceptions with recorded location coordinates",
          "Execute administrative actions such as force checkout or allowing session continuation",
        ],
        icon: "Navigation",
      },
      {
        id: "employee-management",
        name: "Employee & Organizational Management",
        code: "Module C",
        tagline: "Structured records for employees, departments, and work sites.",
        description:
          "Organizes employee profiles, departmental hierarchies, work sites, and administrative records into a structured repository with comprehensive historical tracking.",
        capabilities: [
          "Employee record management including employee codes, designations, and contact data",
          "Department management and organizational division grouping",
          "Work-site and physical location profile management",
          "Historical employee attendance logs and tenure tracking",
          "Employee-related administrative notes and supervisor assignment",
        ],
        adminCapabilities: [
          "Add, edit, or deactivate employee profiles and update organizational assignments",
          "Assign employees to designated departments, supervisors, and primary work sites",
          "Access complete employee profile cards with associated attendance and leave histories",
        ],
        icon: "Users",
      },
      {
        id: "leave-management",
        name: "Leave Management & Approval Workflows",
        code: "Module D",
        tagline: "Formal leave requests, supervisor reviews, and balance tracking.",
        description:
          "Provides a formal request-and-approval workflow where employees submit leave applications and authorized supervisors review, approve, or reject requests with full record preservation.",
        capabilities: [
          "Employee leave request submission with date selections, leave types, and reason notes",
          "Leave status tracking showing pending, approved, or rejected applications",
          "Historical leave logs accessible to both employees and administrative supervisors",
        ],
        adminCapabilities: [
          "Centralized leave approval queue displaying pending applications across teams",
          "Approval or rejection decision workflows with administrative remarks",
          "Visibility into team leave schedules to maintain appropriate workforce coverage",
        ],
        icon: "Calendar",
      },
      {
        id: "payroll-records",
        name: "Payroll-Related Information & Payslips",
        code: "Module E",
        tagline: "Transparent payslip access and payroll-related records.",
        description:
          "Enables employees to access published payslip information and provides supervisors with organized payroll-related attendance summaries for downstream processing.",
        capabilities: [
          "Employee access to monthly payslip documents and summary information",
          "Review of recorded working days, approved leaves, and payable attendance units",
          "Historical payslip records accessible directly through employee portal",
        ],
        adminCapabilities: [
          "Maintain payroll-related records linked to verified attendance daybooks",
          "Review attendance-based summaries required for organizational payroll administration",
        ],
        icon: "Receipt",
      },
      {
        id: "task-management",
        name: "Task & Work Assignment Management",
        code: "Module F",
        tagline: "Assign operational tasks, instructions, and review progress.",
        description:
          "Supports task assignments to field or facility staff, complete with operational instructions, attachments, status updates, and administrative review.",
        capabilities: [
          "View assigned daily tasks with priority markers and operational instructions",
          "Access task-related attachments, checklists, and reference files",
          "Update task progress statuses (Pending, In Progress, Completed)",
        ],
        adminCapabilities: [
          "Create work assignments with detailed instructions and target completion dates",
          "Assign tasks to specific individual employees or designated teams",
          "Review ongoing task progress and monitor completion updates",
        ],
        icon: "CheckSquare",
      },
      {
        id: "customer-operations",
        name: "Customer-Related Operations",
        code: "Module G",
        tagline: "Customer site directories and operational service records.",
        description:
          "Maintains customer records and site directories to facilitate field visits, service dispatching, and customer-related attendance tracking.",
        capabilities: [
          "Access customer site names, addresses, and authorized contact persons",
          "Link attendance and field sessions to specific customer site accounts",
        ],
        adminCapabilities: [
          "Maintain customer lists and active project locations",
          "Review field attendance and task sessions associated with each customer",
        ],
        icon: "Building2",
      },
      {
        id: "material-indents",
        name: "Material Indent & Movement Workflows",
        code: "Module H",
        tagline: "Structured material requests, dispatch records, and receipt logs.",
        description:
          "Allows field personnel to submit material indents for site work, enabling administrators to review requests, record dispatch details, and confirm site receipt.",
        capabilities: [
          "Create material indents specifying required items, quantities, and site needs",
          "Track indent status from submission through approval and dispatch",
          "Record receipt confirmation when materials arrive at the work site",
        ],
        adminCapabilities: [
          "Review pending material indents from field supervisors",
          "Approve or reject material requests based on project requirements",
          "Maintain dispatch-related records and delivery tracking notes",
        ],
        icon: "Truck",
      },
      {
        id: "tools-inventory",
        name: "Tools Inventory & Request Management",
        code: "Module I",
        tagline: "Tool assignment logs, requests, and repair workflow tracking.",
        description:
          "Provides tools inventory tracking, employee tool requests, return logging, and repair status workflows to maintain operational equipment control.",
        capabilities: [
          "Browse available tools inventory and submit tool issuance requests",
          "Review currently issued tools and acknowledge tool returns",
          "Report malfunctioning equipment for maintenance or repair",
        ],
        adminCapabilities: [
          "Maintain tool inventory lists with serial numbers and condition statuses",
          "Approve tool issuance requests and log tool returns",
          "Manage repair workflows and track maintenance history for equipment",
        ],
        icon: "Wrench",
      },
      {
        id: "admin-dashboard",
        name: "Administrative Dashboard, Alerts & Reports",
        code: "Module J",
        tagline: "Consolidated attendance overview, location alerts, and reports.",
        description:
          "A unified administrative cockpit delivering real-time attendance overviews, location exception alerts, employee summaries, and historical reports.",
        capabilities: [
          "Real-time attendance overview showing active workforce counts and presence",
          "Consolidated attendance history and date-range summary reports",
          "Real-time location alerts for out-of-bounds activity or missing updates",
          "Direct administrative broadcast messages and operational notifications",
        ],
        adminCapabilities: [
          "Filter attendance data across departments, dates, and locations",
          "Investigate attendance alerts and document operational exception decisions",
          "Generate structured attendance summaries for management and HR review",
        ],
        icon: "BarChart3",
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
        q: "What can the Attendance Tracking System manage?",
        a: "The Attendance Tracking System manages employee attendance check-ins and check-outs, multiple daily sessions, break recording, working-time calculations, employee profiles, department hierarchies, leave requests and approvals, payslip information viewing, assigned work tasks, customer site records, material indents, and tool inventory requests.",
      },
      {
        q: "Does it support location-aware attendance?",
        a: "Yes. It supports GPS-based attendance checks against configured permitted work sites and geofenced zones. The system can perform periodic location checks during active sessions, flag missing updates, and alert administrators when attendance is attempted outside designated boundaries.",
      },
      {
        q: "Can employees have multiple attendance sessions in one day?",
        a: "Yes. The system supports multiple daily attendance sessions, allowing employees working split shifts or moving between multiple authorized work sites to complete distinct check-in and check-out cycles throughout the day.",
      },
      {
        q: "Can administrators manage employee leave?",
        a: "Yes. Employees can submit leave requests with dates, leave types, and reasons through the application. Authorized administrators review applications in a centralized queue and can approve or reject requests with administrative remarks.",
      },
      {
        q: "Does the system include payroll features?",
        a: "The system provides employee access to published payslip information and maintains verified attendance records, working days, and approved leave summaries that can be referenced for payroll administration. It does not perform statutory tax computations or claim automated banking disbursements.",
      },
      {
        q: "Can the system manage tasks, materials and tools?",
        a: "Yes. The application includes operational modules for assigned tasks with instructions and status updates, material indents with approval and dispatch tracking, and tool inventory requests with return and repair workflow logging.",
      },
      {
        q: "Can administrators review attendance records?",
        a: "Yes. Administrators have access to attendance overviews, historical daybooks, department-level filters, session-by-session timestamps, location exception alerts, and consolidated attendance summaries.",
      },
    ],
    finalCta: {
      heading: "See How Attendance Management Could Work for Your Organization",
      copy: "Request a demo to explore the attendance and workforce-operation features and discuss the workflows your team needs.",
      ctaLabel: "Request a Demo",
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
      "Business club owners and leaders",
      "Club administrators",
      "Membership coordinators",
      "Organizations that organize structured meetings and business networking activities",
    ],
    hero: {
      h1: "Business Club Management and Networking App",
      supportingContent:
        "Organize business club membership, meetings, attendance and networking activities through a dedicated application experience. Explore member profiles, referral workflows, Thank You Notes, engagement features and administrative tools.",
      primaryCtaLabel: "Request a Demo",
      quickPillars: [
        { label: "Member & Business Profiles", desc: "Detailed directories, company info, and member contact cards." },
        { label: "Meeting & Attendance Engine", desc: "Regular & Power Team meetings, QR attendance, and leave workflows." },
        { label: "Referrals & Thank You Notes", desc: "Record business referrals, R-to-R interactions, and closed business value." },
        { label: "Engagement & Administration", desc: "Points, visitor registration, polls, club news, and leadership controls." },
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
        id: "member-directory",
        name: "Member Directory & Business Profiles",
        code: "Module A",
        tagline: "Comprehensive member directory and detailed business cards.",
        description:
          "Maintains a complete, searchable roster of club members, featuring professional bios, business categories, contact information, and company credentials.",
        capabilities: [
          "Complete club member directory listing with search and category filtering",
          "Individual member profile view highlighting personal and company information",
          "Business-related profile fields such as company name, business category, and offerings",
          "Member contact cards facilitating direct networking between members",
        ],
        adminCapabilities: [
          "Add new members, edit member details, and update business category assignments",
          "Manage member status (active, honorary, on-leave, or inactive)",
          "Maintain organizational chapter records and leadership designations",
        ],
        icon: "Users",
      },
      {
        id: "meeting-management",
        name: "Meeting Management & Scheduling",
        code: "Module B",
        tagline: "Coordinate regular meetings, Power Team sessions, and agendas.",
        description:
          "Schedules and manages regular club meetings and specialized Power Team group sessions with full venue, agenda, and calendar information.",
        capabilities: [
          "Regular club meeting schedule and calendar view",
          "Power Team meeting scheduling and group coordination",
          "Meeting venue, timing, and agenda information display",
          "Meeting reminder and notification support for upcoming sessions",
        ],
        adminCapabilities: [
          "Create and update regular chapter meetings and Power Team sessions",
          "Configure attendance rules and club bylaws applicable to meetings",
          "Publish meeting agendas, keynote speaker notes, and venue instructions",
        ],
        icon: "Calendar",
      },
      {
        id: "attendance-permissions",
        name: "Meeting Attendance & Permissions",
        code: "Module C",
        tagline: "QR attendance check-ins, leave requests, and early departure logs.",
        description:
          "Provides QR-based meeting attendance verification, leave application workflows, and early-departure permissions aligned with club attendance rules.",
        capabilities: [
          "QR-based meeting attendance scanning where supported by club workflow",
          "Historical meeting attendance records accessible on member profiles",
          "Leave-related permission requests when unable to attend a scheduled meeting",
          "Early-departure (early-going) permission logging with reason notes",
        ],
        adminCapabilities: [
          "Review meeting attendance rosters and generate attendance percentage reports",
          "Approve or reject member leave requests and early-departure submissions",
          "Enforce club attendance bylaws and monitor consecutive absence warnings",
        ],
        icon: "QrCode",
      },
      {
        id: "referral-management",
        name: "Referral Management & R-to-R Workflows",
        code: "Module D",
        tagline: "Structured referral passing, status tracking, and reporting.",
        description:
          "Enables members to record, pass, and track business referrals within the club, supporting R-to-R referral categorization and status updates.",
        capabilities: [
          "Referral submission form capturing prospect contact, urgency, and background",
          "Referral categorization (Inside, Outside, or R-to-R referrals)",
          "Status tracking for referrals received (Contacted, In Progress, Closed)",
          "Personal referral activity dashboard showing referrals given and received",
        ],
        adminCapabilities: [
          "Chapter-wide referral logs for weekly meeting business reporting",
          "Audit referral exchanges between members and track overall networking volume",
        ],
        icon: "Share2",
      },
      {
        id: "thank-you-notes",
        name: "Thank You Notes & Business Value",
        code: "Module E",
        tagline: "Acknowledge closed business with recorded financial values.",
        description:
          "Allows members to acknowledge fellow members for closed business by submitting structured Thank You Notes recording the associated business transaction amount.",
        capabilities: [
          "Thank You Note submission linked to specific referrals or member connections",
          "Recording of closed business value and transaction remarks",
          "Member ledger showing cumulative Thank You Notes given and received",
        ],
        adminCapabilities: [
          "Review chapter Thank You Note totals for official weekly meeting announcements",
          "Maintain verified records of closed business value across the chapter",
        ],
        icon: "Award",
      },
      {
        id: "points-engagement",
        name: "Points System, Polls & Visitors",
        code: "Module F",
        tagline: "Foster participation through engagement points, polls, and visitor logs.",
        description:
          "Fosters active chapter engagement through a structured participation points system, interactive club polls, and visitor registration logs.",
        capabilities: [
          "Participation points tracking for attendance, referrals, and meeting participation",
          "Participation in club polls for member sentiment and chapter decisions",
          "Visitor registration submission to register prospective guests for meetings",
          "Personal visitor attendance history tracking",
        ],
        adminCapabilities: [
          "Configure participation points criteria and inspect member point tallies",
          "Create and publish club polls with real-time response aggregation",
          "Manage chapter visitor logs and coordinate post-meeting visitor engagement",
        ],
        icon: "Activity",
      },
      {
        id: "news-events",
        name: "News, Events & Chapter Communications",
        code: "Module G",
        tagline: "Broadcast announcements, special events, and chapter updates.",
        description:
          "Keeps members informed through published club news, special networking events, anniversary announcements, and administrative broadcast notifications.",
        capabilities: [
          "Club news bulletin board with text, announcements, and key updates",
          "Special event listings with date, venue, and participation details",
          "In-app notifications for club announcements and reminders",
        ],
        adminCapabilities: [
          "Draft and publish club news articles, announcements, and circulars",
          "Schedule special chapter events, annual galas, and networking mixers",
        ],
        icon: "Bell",
      },
      {
        id: "club-administration",
        name: "Comprehensive Club Administration",
        code: "Module H",
        tagline: "Centralized leadership console for chapters and coordinators.",
        description:
          "A comprehensive administration console enabling club leadership to oversee members, meetings, referrals, Thank You Notes, visitors, and attendance rules.",
        capabilities: [
          "Unified administrative navigation covering all club operational facets",
          "Chapter performance summaries and weekly meeting presentation data",
          "Audit logs for member activity, attendance records, and referral flows",
        ],
        adminCapabilities: [
          "Full administrative control over members, meetings, and Power Teams",
          "Configure club bylaws, meeting schedules, and attendance rules",
          "Generate comprehensive reports for executive committee reviews",
        ],
        icon: "ShieldCheck",
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
        q: "What can the Business Club App manage?",
        a: "The Business Club App manages member profiles, business category listings, regular meetings, Power Team meetings, QR-based attendance, member leave and early-departure permissions, referral passing (including R-to-R workflows), Thank You Notes with recorded business value, a participation points system, visitor registrations, polls, club news, and executive committee administration.",
      },
      {
        q: "Can the app record meeting attendance?",
        a: "Yes. It supports QR-based meeting attendance scanning where enabled by the chapter, recording exact check-in timestamps and allowing administrators to review attendance rosters and process leave requests.",
      },
      {
        q: "Can the club organize referrals and Thank You Notes?",
        a: "Yes. Members can record and pass business referrals with prospect details, categorize them into standard or R-to-R categories, update referral outcomes, and issue Thank You Notes acknowledging closed business with specific transaction amounts.",
      },
      {
        q: "Does it support Power Team meetings?",
        a: "Yes. In addition to regular chapter-wide meetings, the app supports scheduling, agendas, and attendance records for focused Power Team groups (such as real estate, finance, or technology circles).",
      },
      {
        q: "Can administrators manage visitors and club events?",
        a: "Yes. Members can register prospective visitor guests for upcoming meetings, and administrators can oversee visitor rosters, manage club events, and publish chapter news updates.",
      },
      {
        q: "Does the app support a points system or polls?",
        a: "Yes. The application includes a participation points tracking system based on attendance and referral activity, as well as an interactive polling tool for chapter decisions and feedback.",
      },
    ],
    finalCta: {
      heading: "See the Business Club App in Action",
      copy: "Request a demo to review the membership, meetings and networking workflows and discuss the needs of your club.",
      ctaLabel: "Request a Demo",
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
      "Trade associations",
      "Local business associations",
      "Professional networks",
      "Member-based organizations",
      "Association administrators and committee coordinators",
    ],
    hero: {
      h1: "Network Club and Association Management App",
      supportingContent:
        "Organize member information, business profiles, committee details and events through a dedicated application experience. Explore the directory, association-information and administrative capabilities available for member-based organizations.",
      primaryCtaLabel: "Request a Demo",
      quickPillars: [
        { label: "Searchable Member Directory", desc: "Comprehensive business profiles, brands, and contact details." },
        { label: "Committee & Leadership Records", desc: "Chairpersons, executive committees, and term-based records." },
        { label: "Events & Announcements", desc: "Upcoming and past events, gallery photos, and association updates." },
        { label: "Member Engagement & Approvals", desc: "Birthday & anniversary reminders, advertisements, and member approvals." },
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
        id: "member-directory-search",
        name: "Member Directory & Search",
        code: "Module A",
        tagline: "Searchable association directory with multi-field filtering.",
        description:
          "Provides a searchable member directory enabling members and administrators to locate member companies, representatives, and association records rapidly.",
        capabilities: [
          "Searchable member directory with instant search across names and company profiles",
          "Filtering by industry classification, business category, and membership tier",
          "Comprehensive profile detail view with contact and registration records",
          "Access to fellow association member listings for direct B2B communication",
        ],
        adminCapabilities: [
          "Maintain the complete member roster with search and filter capabilities",
          "Update member directory settings and manage member active status",
        ],
        icon: "Search",
      },
      {
        id: "member-business-profiles",
        name: "Member & Business Profiles",
        code: "Module B",
        tagline: "Structured commercial profiles with company and brand details.",
        description:
          "Stores detailed business profile information including company names, addresses, dealing brands, contact phone numbers, and social links.",
        capabilities: [
          "Member contact details including primary phone, email, and office address",
          "Company and business name with legal entity information",
          "Business type, industrial category, and key commercial specialties",
          "Dealing brands and product line representations where supported",
          "Social media and website links for member business discovery",
        ],
        adminCapabilities: [
          "Add and edit member business profiles and assign verified categories",
          "Review submitted profile updates and verify trade designations",
        ],
        icon: "Briefcase",
      },
      {
        id: "committee-management",
        name: "Committee & Leadership Management",
        code: "Module C",
        tagline: "Organize chairpersons, executive committees, and governing terms.",
        description:
          "Maintains formal organizational leadership records including chairpersons, executive committee members, and sub-committees categorized by terms.",
        capabilities: [
          "Chairperson, President, and office bearer information display",
          "Executive committee member records with designations and company names",
          "Committee membership organized by historical and active terms (e.g., 2025-2027)",
          "Direct access to leadership contact cards for member representations",
        ],
        adminCapabilities: [
          "Create and configure governing terms and assign committee members",
          "Manage leadership designations (President, Vice President, Secretary, Committee Member)",
          "Archive past leadership rosters for association historical records",
        ],
        icon: "Shield",
      },
      {
        id: "events-management",
        name: "Upcoming & Past Events Management",
        code: "Module D",
        tagline: "Publish upcoming schedules, past archives, and photo galleries.",
        description:
          "Keeps members engaged with upcoming association events, general body meetings, expos, and an archive of past-event photo galleries.",
        capabilities: [
          "Upcoming event calendar with title, date, time, venue, and description",
          "Past event archives documenting past conventions, symposiums, and meetings",
          "Past-event photo gallery viewing where photos are uploaded for the event",
          "Event reminder notifications for confirmed upcoming association gatherings",
        ],
        adminCapabilities: [
          "Create and edit upcoming event listings with venue instructions and agendas",
          "Upload event photos to past event archives for member viewing",
          "Manage event visibility and post-event summary circulars",
        ],
        icon: "Calendar",
      },
      {
        id: "advertisements-announcements",
        name: "Advertisements & Announcements",
        code: "Module E",
        tagline: "Display member advertisements and official association circulars.",
        description:
          "Features promotional advertisements from members and official association announcements directly within the mobile application.",
        capabilities: [
          "In-app advertisement banners highlighting member businesses and sponsors",
          "Association announcements, press releases, and circular notices",
          "Direct contact links from member advertisements to advertiser profiles",
        ],
        adminCapabilities: [
          "Upload and schedule promotional advertisement banners for member businesses",
          "Draft and publish official association circulars and notifications",
        ],
        icon: "Megaphone",
      },
      {
        id: "member-engagement",
        name: "Member Engagement & Notifications",
        code: "Module F",
        tagline: "Automated birthday & anniversary greetings and circular alerts.",
        description:
          "Enhances association community feeling with automated birthday and wedding anniversary reminders and relevant informational alerts.",
        capabilities: [
          "Daily birthday information and greeting alerts for association members",
          "Wedding anniversary information and greeting notifications",
          "Informational notices for association milestones and member felicitations",
        ],
        adminCapabilities: [
          "Maintain member birth dates and anniversary dates in member profiles",
          "Transmit broadcast informational notifications to all association members",
        ],
        icon: "Heart",
      },
      {
        id: "member-approvals",
        name: "Member Approvals & Verification",
        code: "Module G",
        tagline: "Screen new membership applications with formal approval queues.",
        description:
          "Supports pending-member screening where prospective members register and authorized administrators review credentials before approving access.",
        capabilities: [
          "New member application submission through the application interface",
          "Application status tracking (Pending, Approved, or Revision Required)",
        ],
        adminCapabilities: [
          "Centralized pending-member approval queue with submitted business records",
          "Approve, decline, or request information on pending membership applications",
          "Activate approved members with immediate directory access",
        ],
        icon: "UserCheck",
      },
      {
        id: "admin-console",
        name: "Administrative Dashboard & Console",
        code: "Module H",
        tagline: "Unified control over members, committees, events, and circulars.",
        description:
          "An administrative command center for association coordinators to manage members, committees, events, advertisements, and approvals.",
        capabilities: [
          "Consolidated dashboard displaying total membership counts and activity",
          "Quick links to pending approvals, event creation, and member records",
        ],
        adminCapabilities: [
          "Full administrative control across all association modules",
          "Manage advertisement placements, committee terms, and event schedules",
          "Generate member rosters and directory summaries for association governance",
        ],
        icon: "Settings",
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
        q: "What can the Network Club App manage?",
        a: "The Network Club App manages a searchable member directory, detailed company and business profiles, dealing brands, committee and leadership structures organized by terms, upcoming and past events with photo archives, in-app advertisements, member circulars, birthday and anniversary notifications, member approval queues, and administrative dashboard controls.",
      },
      {
        q: "Can members search for business information?",
        a: "Yes. Members have access to a searchable directory where they can search by member name, company name, industry category, or dealing brands, and view complete business profiles with phone, email, and address details.",
      },
      {
        q: "Can administrators manage committee details?",
        a: "Yes. Administrators can create operational terms (e.g., 2025-2027) and assign chairpersons, office bearers, and executive committee members, maintaining both current leadership and historical term archives.",
      },
      {
        q: "Does the app support upcoming and past events?",
        a: "Yes. The app provides listings for upcoming association events with venue and agenda information, as well as archives of past events complete with uploaded event photos.",
      },
      {
        q: "Can new members require administrative approval?",
        a: "Yes. The application includes a pending-member approval workflow where prospective members submit their details and authorized administrators review and approve them before granting directory access.",
      },
      {
        q: "How is the Network Club App different from the Business Club App?",
        a: "The Network Club App is designed for trade associations and professional networks, prioritizing member directories, business profiles, committee governance, event archives, and circulars. In contrast, the Business Club App is focused on structured networking chapters with weekly meetings, QR attendance tracking, referral passing, Thank You Notes, and participation points.",
      },
    ],
    finalCta: {
      heading: "Explore a More Organized Association Experience",
      copy: "Request a demo to review the member directory, committee and event-management capabilities and discuss your organization's needs.",
      ctaLabel: "Request a Demo",
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
      "Business owners exploring a matrimony service",
      "Associations considering a member-focused matrimony application",
      "Organizations that need to manage profiles, interactions, membership plans and administrative operations",
    ],
    hero: {
      h1: "Matrimony Application Software for Businesses and Associations",
      supportingContent:
        "Explore a matrimony application that brings together member profiles, partner discovery, interest workflows, horoscope and biodata features, membership-related administration and an operator-facing management experience.",
      secondaryPositioning:
        "This solution is intended for businesses and associations evaluating an application to support matrimony-service operations.",
      primaryCtaLabel: "Request a Demo",
      quickPillars: [
        { label: "Multi-Step Profile Management", desc: "Personal, astrology, family, education, and partner preferences." },
        { label: "Partner Discovery & Interests", desc: "Filter-based search, saved favourites, and express interest workflows." },
        { label: "Horoscope & Biodata PDF", desc: "Horoscope chart handling, document viewing, and biodata downloads." },
        { label: "Membership & Payment Review", desc: "Plan administration, receipt upload, and manual administrative verification." },
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
        id: "profile-creation",
        name: "Member Registration & Profile Creation",
        code: "Module A",
        tagline: "Structured multi-step registration covering all relevant background details.",
        description:
          "Enables prospective members to create and edit detailed profiles across structured categories, ensuring comprehensive representation without disorganization.",
        capabilities: [
          "Multi-step profile registration wizard guiding members through each section",
          "Personal and physical details (height, complexion, mother tongue, marital status)",
          "Astrology information including Rasi, Nakshatram, Lagnam, and Dosham details",
          "Education qualifications and current occupation/career details",
          "Family information including parents' occupation, siblings, and family values",
          "Residential address, location, district, and country of residence",
          "Lifestyle information and partner expectations/preferences",
        ],
        adminCapabilities: [
          "Review submitted profile drafts and complete profile records",
          "Edit member profile fields upon verified administrative request",
        ],
        icon: "UserPlus",
      },
      {
        id: "profile-discovery",
        name: "Profile Discovery & Parameter Filtering",
        code: "Module B",
        tagline: "Multi-parameter search and filtered discovery across member profiles.",
        description:
          "Provides registered members with flexible discovery tools and filters to browse suitable partner profiles based on specific demographic and astrological criteria.",
        capabilities: [
          "Search filters covering age range, marital status, and physical attributes",
          "Education level and occupation industry filters",
          "Location-based filtering by city, district, state, and country of residence",
          "Astrology-related search fields (Nakshatram, Rasi) where implemented",
          "Comprehensive profile detail view displaying family, education, and preferences",
        ],
        adminCapabilities: [
          "Configure searchable fields and default search sorting parameters",
          "Inspect member discovery engagement within the operational dashboard",
        ],
        icon: "Search",
      },
      {
        id: "interests-interactions",
        name: "Favourites & Member Interactions",
        code: "Module C",
        tagline: "Express interest, accept/decline responses, and saved favourites.",
        description:
          "Empowers members to save favourite profiles, send formal interests, and manage incoming interest requests with clear accept or decline actions.",
        capabilities: [
          "Bookmark and organize favourite profiles for future review",
          "Send formal interests to suitable member profiles",
          "Received interests inbox showing profile summaries of interested members",
          "Accept or decline actions for received interests with status updates",
          "Interaction history tracking showing all active and past connections",
        ],
        adminCapabilities: [
          "Audit interaction volumes and monitor member connection activity",
        ],
        icon: "Heart",
      },
      {
        id: "contact-reveal",
        name: "Contact Access & Reveal Workflows",
        code: "Module D",
        tagline: "Controlled contact unlocking with quota-based access governance.",
        description:
          "Controls access to confidential phone and contact information through a verified reveal workflow governed by membership plan quotas.",
        capabilities: [
          "Contact unlock/reveal action on mutually interested or eligible profiles",
          "Quota-related restriction enforcement based on active membership tier",
          "Unlocked contact list keeping track of all revealed phone numbers and emails",
        ],
        adminCapabilities: [
          "Configure contact unlock quota allocations per membership plan tier",
          "Audit contact reveal logs for privacy protection and compliance",
        ],
        icon: "PhoneCall",
      },
      {
        id: "horoscope-biodata",
        name: "Horoscope & Biodata Generation",
        code: "Module E",
        tagline: "Horoscope chart handling, viewing, and biodata PDF generation.",
        description:
          "Manages astrological chart data, uploaded horoscope documents, chart viewing, and automated generation of downloadable biodata PDF documents.",
        capabilities: [
          "Astrological chart data storage and horoscope document upload",
          "Horoscope document viewing and secure downloading where enabled",
          "On-demand Biodata PDF generation in standardized printable format",
          "Secure document access restricted to authorized registered members",
        ],
        adminCapabilities: [
          "Review uploaded horoscope documents during profile verification",
          "Regenerate member biodata PDFs from administrative console",
        ],
        icon: "FileText",
      },
      {
        id: "photos-documents",
        name: "Profile Photos & Supporting Documents",
        code: "Module F",
        tagline: "Photo uploads, privacy controls, and community certificate handling.",
        description:
          "Handles member photo uploads with primary photo selection, community certificates where required, and supporting identity documentation.",
        capabilities: [
          "Upload multiple profile photographs with primary display selection",
          "Upload community certificates or supporting documents where implemented",
          "Photo gallery viewer for verified members browsing profiles",
        ],
        adminCapabilities: [
          "Moderation queue to review and approve uploaded photographs",
          "Inspect community certificates and documentation prior to profile approval",
        ],
        icon: "Image",
      },
      {
        id: "membership-plans",
        name: "Membership Plans & Entitlements",
        code: "Module G",
        tagline: "Manage membership tiers, subscription status, and renewals.",
        description:
          "Enables operators to define membership tiers, configure plan entitlements such as contact unlock limits, and track member subscription status.",
        capabilities: [
          "Browse available membership plans and view associated entitlements",
          "View current subscription tier, activation date, and validity status",
          "Submit renewal or upgrade requests upon plan completion",
        ],
        adminCapabilities: [
          "Create and configure membership plan tiers and entitlement quotas",
          "Assign membership plans to members and process manual renewals",
          "Monitor active, expiring, and lapsed subscription statuses",
        ],
        icon: "Crown",
      },
      {
        id: "payment-verification",
        name: "Payment-Related Workflows & Verification",
        code: "Module H",
        tagline: "Receipt upload, transaction reference logging, and manual verification.",
        description:
          "Provides a transparent administrative payment workflow where members upload payment receipts and UTR numbers, and operators manually verify payments before activating subscriptions.",
        capabilities: [
          "Upload payment receipt image or document for plan subscription",
          "Submit transaction reference number (UTR / Bank Reference) with submission",
          "Track payment verification status (Submitted, Under Review, Verified)",
        ],
        adminCapabilities: [
          "Review submitted payment receipts alongside entered transaction references",
          "Execute administrative payment verification to activate membership plans",
          "Maintain verified payment records and transaction logs for accounting",
        ],
        icon: "Receipt",
      },
      {
        id: "profile-approvals",
        name: "Profile Approvals & Moderation",
        code: "Module I",
        tagline: "New profile screening, change requests, and account moderation.",
        description:
          "Guarantees data quality and community trust through operator screening of new profiles, review of profile change requests, and moderation controls.",
        capabilities: [
          "Draft profile saving allowing members to complete registration progressively",
          "Submit profile updates for administrative review",
          "Report problematic profiles to operators for review",
        ],
        adminCapabilities: [
          "Centralized new-profile approval queue before publication",
          "Review and approve or reject profile change requests",
          "Account moderation tools including warning, suspending, or blocking users",
        ],
        icon: "ShieldCheck",
      },
      {
        id: "operator-dashboard",
        name: "Operator Dashboard & Administration",
        code: "Module J",
        tagline: "Unified operator console for users, subscriptions, and revenue.",
        description:
          "An all-in-one management dashboard for matrimony service operators to monitor registrations, manage approval queues, verify payments, and oversee accounts.",
        capabilities: [
          "Operator dashboard overview displaying active profiles and pending queues",
          "Subscription status summaries and verified payment activity logs",
        ],
        adminCapabilities: [
          "User account management with full profile lookup and history",
          "Queue management across new profiles, modifications, and payments",
          "Membership plan administration and subscription renewal controls",
        ],
        icon: "LayoutDashboard",
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
        q: "What is the Matrimony Application intended for?",
        a: "This application is a B2B software solution intended for business owners, matrimonial bureaus, and community associations that are evaluating or operating a matrimony service. It is not an end-user matrimonial portal run by PEP Software for individual partner seekers.",
      },
      {
        q: "What profile-management features are available?",
        a: "The application features a structured multi-step profile registration wizard covering personal details, physical attributes, astrological data (Rasi, Nakshatram, Dosham), educational background, career and occupation, family details, address, lifestyle habits, and partner preferences.",
      },
      {
        q: "Can members search and save profiles?",
        a: "Yes. Members can search profiles using multiple filters including age, marital status, education, occupation, location, and astrology criteria. Members can also save favourite profiles to a dedicated bookmarks list for quick access.",
      },
      {
        q: "Does the application support interest workflows?",
        a: "Yes. Members can send formal interests to profiles of interest, and recipients can review incoming interests and choose to accept or decline. Both parties can monitor their interaction history within the application.",
      },
      {
        q: "Does it support horoscope and biodata features?",
        a: "Yes. Members can upload horoscope documents and astrological chart details, view uploaded charts, and generate standardized, downloadable biodata PDFs for offline family sharing.",
      },
      {
        q: "Does it support membership plans and payment administration?",
        a: "Yes. Operators can define membership tiers with specific entitlements such as contact unlock quotas. Members can upload payment receipts with transaction reference (UTR) numbers, which operators manually review and verify before activating the subscription. The system does not claim automatic payment gateway integration.",
      },
      {
        q: "Can administrators review and approve profiles?",
        a: "Yes. All new profile registrations and major profile change requests go through an administrative approval queue. Operators can inspect submitted data, photographs, and community certificates before approving profiles for public display.",
      },
      {
        q: "Can this be customized or rebranded for our organization?",
        a: "Your organization's specific requirements should be reviewed during a demo. The available functionality and any additional implementation requirements must be confirmed with our engineering team before a project scope is agreed.",
      },
    ],
    finalCta: {
      heading: "Discuss Your Matrimony Application Requirements",
      copy: "Request a demo to review the profile, discovery, membership and administration workflows and discuss the requirements for your proposed matrimony service.",
      ctaLabel: "Request a Demo",
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
