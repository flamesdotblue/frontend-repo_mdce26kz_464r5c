import { Bell, ChevronDown } from "lucide-react";

export default function HeaderBar() {
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-[#3FA4BB] to-sky-400 shadow-lg shadow-sky-200/40 flex items-center justify-center text-white font-bold">
              F
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-slate-900">Finely</p>
              <p className="text-xs text-slate-500 -mt-0.5">Modern SaaS Suite</p>
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <button
              aria-label="Notifications"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/80 hover:bg-slate-50 transition shadow-sm"
            >
              <Bell className="h-5 w-5 text-slate-700" />
              <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-rose-500 ring-2 ring-white" />
            </button>
            <button className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-2.5 py-1.5 pr-3 shadow-sm hover:shadow transition">
              <img
                src="https://i.pravatar.cc/100?img=12"
                alt="avatar"
                className="h-8 w-8 rounded-xl object-cover"
              />
              <div className="hidden sm:block text-left">
                <p className="text-sm font-medium text-slate-900 leading-none">Alex Morgan</p>
                <p className="text-xs text-slate-500 leading-none mt-1">Admin</p>
              </div>
              <ChevronDown className="h-4 w-4 text-slate-500" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
