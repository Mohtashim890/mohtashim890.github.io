// Source material: IronForge portfolio brief. Keep claims within it:
// production-grade, no paying gyms yet.

export const ironforge = {
  name: "IronForge",
  tagline: "Agentic, multi-tenant gym management SaaS",
  href: "/projects/ironforge/",
  liveUrl: "https://app.mohtashim.dev",
  platformUrl: "https://platform.mohtashim.dev",
  sourceUrl: "https://github.com/Mohtashim890/IronForge",
  summary:
    "A production-grade SaaS that runs gyms end to end: members, automated billing, Stripe payments, four ways to check in, fingerprint-terminal integration and training. Staff get a web dashboard, members a cross-platform app, and AI agents help both, with permission checks and human approval.",
};

export const tags = [
  ".NET 10",
  "Blazor",
  ".NET MAUI",
  "PostgreSQL",
  "OpenAI",
  "MCP",
  "Stripe Connect",
  "Docker",
];

export const metrics = [
  { value: "15", label: "projects in the solution" },
  { value: "~70k", label: "lines of C# and Razor" },
  { value: "~300", label: "automated tests" },
  { value: "5", label: "client platforms" },
  { value: "3 · 24", label: "AI agents · governed tools" },
];

export const facts = [
  {
    label: "Role",
    value: "Solo developer: product, architecture, backend, frontend, mobile, AI, DevOps",
  },
  { label: "Status", value: "Feature-complete v1, being hardened for its first gyms" },
  { label: "Markets", value: "Pakistan and Malaysia first, multi-currency per gym" },
  { label: "Core stack", value: ".NET 10 · Blazor · .NET MAUI · EF Core · PostgreSQL" },
];

export const problems = [
  "Memberships lapse unnoticed; overdue members keep walking in.",
  "Front-desk check-in is slow, and members share passes.",
  "Fingerprint terminals know nothing about who has paid.",
  "Trainers can't easily hand out routines or follow progress.",
  "Owners can't answer “how much did we make this month?”",
];

export const apps = [
  {
    audience: "Owners · Admins · Trainers",
    title: "Gym dashboard",
    description:
      "Members, plans, billing, check-ins, fingerprint terminals, training content, staff and approvals.",
  },
  {
    audience: "Members",
    title: "Member app",
    description:
      "Offline QR pass, invoices with Pay now, routines, workout logging and progress charts on Android, iOS, Windows and macOS.",
  },
  {
    audience: "SaaS operator",
    title: "Platform console",
    description:
      "Onboard gyms, manage plans and add-on modules, AI token budgets, agent rollout and a cross-tenant audit log.",
  },
  {
    audience: "Staff · Members · External agents",
    title: "AI agents and MCP",
    description:
      "Governed assistants, plus the same tool catalogue exposed to external agents over the Model Context Protocol.",
  },
];

export const checkInMethods = [
  { title: "Front desk", detail: "Check in by name" },
  { title: "Staff scan", detail: "Scan the member's pass" },
  { title: "Kiosk", detail: "Camera or USB scanner" },
  { title: "Entrance QR", detail: "Signed code at the door" },
];

export const governanceFlow = [
  { title: "User request", detail: "Admin, trainer or member asks in chat" },
  { title: "Agent", detail: "Admin, Coach or Insights template" },
  { title: "Tool filter", detail: "user ∩ agent ∩ module permissions", key: true },
  { title: "Risk check", detail: "Low · Medium · High · Critical" },
  { title: "Approval", detail: "Confirm, or four-eyes review", key: true },
  { title: "Domain service", detail: "Same service the UI uses" },
  { title: "Audit log", detail: "Every action recorded" },
];

export const governanceRules = [
  { label: "Medium risk", detail: "requester confirms" },
  { label: "High / Critical", detail: "second admin approves (four-eyes)" },
  { label: "Payments", detail: "amount caps" },
  { label: "Per gym", detail: "monthly token quota" },
  { label: "MCP", detail: "same tools for external agents; approval-gated tools blocked" },
];

export const agents = [
  {
    audience: "Admins · Trainers",
    title: "Gym Admin Agent",
    description:
      "Searches members, attendance, revenue and overdue invoices. With approval, it can freeze memberships, send reminders and record cash payments up to a cap.",
  },
  {
    audience: "Members",
    title: "Fitness Coach",
    description:
      "Logs workouts, records measurements, sets goals and builds routines. It can only ever see the signed-in member.",
  },
  {
    audience: "Admins",
    title: "Insights Agent",
    description: "A read-only analyst over the activity log and key business numbers.",
  },
];

export const multiTenancy = [
  "One PostgreSQL database with row-level isolation by TenantId",
  "EF Core global query filter driven by the JWT's tenant claim",
  "No tenant in context means no data returned (secure by default)",
  "Integration tests prove isolation on real PostgreSQL",
];

export const challenges = [
  {
    title: "Isolating many gyms in one database",
    solution:
      "Global EF Core query filters keyed on the token's tenant, empty-by-default results and a handful of explicit cross-tenant stores, backed by integration tests.",
  },
  {
    title: "Letting AI take real actions safely",
    solution:
      "Agents only get tools both they and the user may use, and risky actions go through approval or four-eyes review, with amount caps, token quotas and an audit trail.",
  },
  {
    title: "Offline passes that can't be shared",
    solution:
      "TOTP-style HMAC passes from a per-member derived key, server-side replay protection, key versioning, one phone per pass and biometric unlock before display.",
  },
  {
    title: "Making fingerprint terminals billing-aware",
    solution:
      "Implemented the ZKTeco push protocol to sync access end dates, so terminals refuse unpaid members by themselves, even offline. Plus a browser simulator.",
  },
  {
    title: "Billing that never double-charges",
    solution:
      "An idempotent rules engine, a single-instance job via Postgres advisory locks, atomic invoice numbers, idempotent webhooks and the outbox pattern.",
  },
  {
    title: "One UI for web and native mobile",
    solution:
      "Pages in Razor class libraries hosted by Blazor Server and MAUI BlazorWebView, with native camera, biometrics and secure storage bridged in.",
  },
];

export const security = [
  "Custom JWT: 15-minute access tokens, rotating refresh-token families",
  "TOTP two-factor built from scratch, required for admins and operators",
  "Every request re-validated; removed staff lose access immediately",
  "Account lockout with back-off and per-IP rate limiting",
  "Device authentication for kiosks and terminals with minimal rights",
  "No biometric data stored; GDPR-style member anonymisation",
];

export const reliability = [
  "Transactional outbox for email with exponential backoff",
  "Hourly billing job, single-instance via PostgreSQL advisory locks",
  "Signed, idempotent Stripe webhooks with amount and currency checks",
  "Optimistic concurrency with PostgreSQL xmin",
  "CD with pre-migration backup, health checks and automatic rollback",
  "Daily backups, missed-backup alert and a scripted restore test",
];

export const stack = [
  {
    group: "Backend",
    items: [".NET 10", "ASP.NET Core", "EF Core 10", "PostgreSQL 17", "Stripe.net", "MailKit", "QRCoder"],
  },
  {
    group: "Frontend & mobile",
    items: ["Blazor", ".NET MAUI Blazor Hybrid", "Razor class libraries", "SVG charts"],
  },
  { group: "AI", items: ["Microsoft.Extensions.AI", "OpenAI", "Model Context Protocol"] },
  { group: "Testing", items: ["xUnit", "Moq", "Testcontainers", "coverlet"] },
  {
    group: "DevOps",
    items: ["Docker", "Caddy", "GitHub Actions", "GHCR", "OpenTelemetry", "Grafana Cloud"],
  },
];

// Add `src` (e.g. "/images/ironforge/dashboard.png") as screenshots become
// available; the gallery only renders entries that have one.
export const gallery: { caption: string; src?: string }[] = [
  { caption: "Gym dashboard home" },
  { caption: "Member detail with photo" },
  { caption: "Invoices" },
  { caption: "Kiosk with entrance QR" },
  { caption: "Terminal simulator" },
  { caption: "Member app progress charts" },
  { caption: "AI agent chat and approval" },
  { caption: "Platform console gym list" },
];
