import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { BarChart3, Users, CreditCard, Settings, Search, Filter } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.25, ease: "easeOut" },
};

function StatCard({ icon: Icon, label, value, trend }) {
  return (
    <div className="rounded-2xl bg-white shadow-sm shadow-slate-200/60 border border-slate-200/60 p-5 flex items-start gap-4">
      <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-[#3FA4BB]/20 to-sky-200/30 text-sky-600 flex items-center justify-center">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <p className="text-sm text-slate-500">{label}</p>
        <div className="flex items-baseline gap-2 mt-1">
          <p className="text-2xl font-semibold text-slate-900">{value}</p>
          {trend && (
            <span className={`text-xs rounded-full px-2 py-0.5 ${trend.up ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"}`}>
              {trend.up ? "+" : ""}
              {trend.value}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function OverviewPanel() {
  return (
    <motion.div key="overview" {...fade}>
      {/* Hero with Spline */}
      <div className="relative rounded-2xl overflow-hidden mb-6 bg-white border border-slate-200/60 shadow-sm">
        <div className="h-[220px] sm:h-[260px] md:h-[300px]">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900">Welcome back 👋</h2>
              <p className="text-slate-600 mt-1">Here’s a quick glance at your business performance today.</p>
            </div>
            <button className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white/80 px-3 py-2 text-sm shadow-sm hover:shadow transition">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Live sync
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Users} label="Active Users" value="24,310" trend={{ up: true, value: 3.8 }} />
        <StatCard icon={CreditCard} label="MRR" value="$128,450" trend={{ up: true, value: 1.2 }} />
        <StatCard icon={BarChart3} label="Conversion" value="4.7%" trend={{ up: true, value: 0.6 }} />
        <StatCard icon={BarChart3} label="Churn" value="1.2%" trend={{ up: false, value: 0.2 }} />
      </div>
    </motion.div>
  );
}

function AnalyticsPanel() {
  return (
    <motion.div key="analytics" className="grid grid-cols-1 lg:grid-cols-3 gap-4" {...fade}>
      <div className="lg:col-span-2 rounded-2xl bg-white border border-slate-200/60 shadow-sm p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-slate-900">Traffic & Revenue</h3>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm hover:bg-slate-50">
              <Filter className="h-4 w-4 text-slate-500" />
              Last 30 days
            </button>
          </div>
        </div>
        {/* Simple SVG chart */}
        <div className="h-64">
          <svg viewBox="0 0 400 160" className="w-full h-full">
            <defs>
              <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#3FA4BB" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="strokeGrad" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#3FA4BB" />
                <stop offset="100%" stopColor="#60A5FA" />
              </linearGradient>
            </defs>
            <path d="M0,120 C60,140 100,90 160,110 C220,130 260,70 320,80 C360,86 380,70 400,72 L400,160 L0,160 Z" fill="url(#grad)" />
            <path d="M0,120 C60,140 100,90 160,110 C220,130 260,70 320,80 C360,86 380,70 400,72" fill="none" stroke="url(#strokeGrad)" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <div className="space-y-4">
        <div className="rounded-2xl bg-white border border-slate-200/60 shadow-sm p-5">
          <p className="text-sm text-slate-500">Daily Active Users</p>
          <p className="text-2xl font-semibold mt-1">6,840</p>
          <p className="text-xs text-emerald-600 mt-1">+4.2% vs last week</p>
        </div>
        <div className="rounded-2xl bg-white border border-slate-200/60 shadow-sm p-5">
          <p className="text-sm text-slate-500">Avg. Session</p>
          <p className="text-2xl font-semibold mt-1">7m 12s</p>
          <p className="text-xs text-slate-500 mt-1">Stable</p>
        </div>
        <div className="rounded-2xl bg-white border border-slate-200/60 shadow-sm p-5">
          <p className="text-sm text-slate-500">Bounce Rate</p>
          <p className="text-2xl font-semibold mt-1">28%</p>
          <p className="text-xs text-emerald-600 mt-1">-1.8% improvement</p>
        </div>
      </div>
    </motion.div>
  );
}

function UsersPanel() {
  const rows = [
    { name: "Olivia Rhye", email: "olivia@example.com", role: "Owner", status: "Active" },
    { name: "Phoenix Baker", email: "phoenix@example.com", role: "Admin", status: "Invited" },
    { name: "Lana Steiner", email: "lana@example.com", role: "Member", status: "Active" },
    { name: "Demi Wilkinson", email: "demi@example.com", role: "Member", status: "Suspended" },
  ];
  return (
    <motion.div key="users" {...fade}>
      <div className="rounded-2xl bg-white border border-slate-200/60 shadow-sm p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <h3 className="font-semibold text-slate-900 flex items-center gap-2"><Users className="h-5 w-5 text-sky-600" /> Users</h3>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <input
                placeholder="Search users"
                className="w-56 rounded-xl border border-slate-200 bg-white pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-200"
              />
            </div>
            <button className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm hover:bg-slate-50">
              <Filter className="h-4 w-4 text-slate-500" />
              Filters
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-slate-500">
                <th className="py-2.5">Name</th>
                <th className="py-2.5">Email</th>
                <th className="py-2.5">Role</th>
                <th className="py-2.5">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.email} className="border-t border-slate-100/80">
                  <td className="py-3 font-medium text-slate-900">{r.name}</td>
                  <td className="py-3 text-slate-600">{r.email}</td>
                  <td className="py-3 text-slate-600">{r.role}</td>
                  <td className="py-3">
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${
                      r.status === "Active"
                        ? "bg-emerald-50 text-emerald-600"
                        : r.status === "Invited"
                        ? "bg-sky-50 text-sky-700"
                        : "bg-rose-50 text-rose-600"
                    }`}>
                      <span className="h-1.5 w-1.5 rounded-full mr-1.5 bg-current" />
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}

function SettingsPanel() {
  return (
    <motion.div key="settings" {...fade}>
      <form className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-2xl bg-white border border-slate-200/60 shadow-sm p-5">
          <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <Settings className="h-5 w-5 text-sky-600" /> Account
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="text-sm">
              <span className="text-slate-600">First name</span>
              <input className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" />
            </label>
            <label className="text-sm">
              <span className="text-slate-600">Last name</span>
              <input className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" />
            </label>
            <label className="text-sm sm:col-span-2">
              <span className="text-slate-600">Email</span>
              <input type="email" className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" />
            </label>
          </div>
          <div className="mt-4 flex justify-end">
            <button type="button" className="rounded-xl bg-slate-900 text-white px-4 py-2 text-sm shadow-sm hover:opacity-95">
              Save changes
            </button>
          </div>
        </div>
        <div className="rounded-2xl bg-white border border-slate-200/60 shadow-sm p-5">
          <h3 className="font-semibold text-slate-900 mb-4">Security</h3>
          <label className="text-sm block">
            <span className="text-slate-600">Password</span>
            <input type="password" className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" />
          </label>
          <label className="text-sm block mt-3">
            <span className="text-slate-600">Two-factor authentication</span>
            <select className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200">
              <option>Off</option>
              <option>SMS</option>
              <option>Authenticator app</option>
            </select>
          </label>
        </div>
      </form>
    </motion.div>
  );
}

function BillingPanel() {
  const invoices = [
    { id: "INV-1024", date: "2024-09-01", amount: "$199.00", status: "Paid" },
    { id: "INV-1025", date: "2024-10-01", amount: "$199.00", status: "Paid" },
    { id: "INV-1026", date: "2024-11-01", amount: "$199.00", status: "Due" },
  ];
  return (
    <motion.div key="billing" {...fade}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="rounded-2xl bg-white border border-slate-200/60 shadow-sm p-5">
          <h3 className="font-semibold text-slate-900 mb-2">Current Plan</h3>
          <p className="text-slate-600 text-sm">Pro — Best for growing teams</p>
          <p className="text-3xl font-semibold mt-3">$199<span className="text-base font-normal text-slate-500">/mo</span></p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>• Unlimited projects</li>
            <li>• Priority support</li>
            <li>• Team seats: 10</li>
          </ul>
          <div className="mt-4 flex gap-2">
            <button className="rounded-xl bg-slate-900 text-white px-3 py-2 text-sm">Manage plan</button>
            <button className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm">Payment methods</button>
          </div>
        </div>
        <div className="lg:col-span-2 rounded-2xl bg-white border border-slate-200/60 shadow-sm p-5">
          <h3 className="font-semibold text-slate-900 mb-4">Invoices</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-slate-500">
                  <th className="py-2.5">Invoice</th>
                  <th className="py-2.5">Date</th>
                  <th className="py-2.5">Amount</th>
                  <th className="py-2.5">Status</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((inv) => (
                  <tr key={inv.id} className="border-t border-slate-100/80">
                    <td className="py-3 font-medium text-slate-900">{inv.id}</td>
                    <td className="py-3 text-slate-600">{inv.date}</td>
                    <td className="py-3 text-slate-600">{inv.amount}</td>
                    <td className="py-3">
                      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${
                        inv.status === "Paid" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                      }`}>
                        <span className="h-1.5 w-1.5 rounded-full mr-1.5 bg-current" />
                        {inv.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function DashboardContent({ currentTab }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
      {currentTab === "Overview" && <OverviewPanel />}
      {currentTab === "Analytics" && <AnalyticsPanel />}
      {currentTab === "Users" && <UsersPanel />}
      {currentTab === "Settings" && <SettingsPanel />}
      {currentTab === "Billing" && <BillingPanel />}
    </div>
  );
}
