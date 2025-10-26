import { motion } from "framer-motion";

export default function TopTabs({ tabs, current, onChange }) {
  return (
    <div className="w-full border-b border-slate-200/70 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="relative flex gap-1 sm:gap-2 overflow-x-auto no-scrollbar" aria-label="Tabs">
          {tabs.map((t) => {
            const active = current === t;
            return (
              <button
                key={t}
                onClick={() => onChange(t)}
                className={`relative py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-[15px] font-medium transition-colors whitespace-nowrap ${
                  active ? "text-slate-900" : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {t}
                {active && (
                  <motion.span
                    layoutId="activeTabUnderline"
                    className="absolute left-2 right-2 -bottom-px h-0.5 rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, #3FA4BB 0%, #60A5FA 100%)",
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
