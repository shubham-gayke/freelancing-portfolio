import { useState, useEffect } from "react";
import { Palette } from "lucide-react";

export function ThemeSwitcher() {
  const themes = [
    { id: "default", name: "Midnight Cyber", color: "bg-blue-600" },
    { id: "violet", name: "Neon Violet", color: "bg-purple-600" },
    { id: "ocean", name: "Deep Ocean", color: "bg-teal-500" },
    { id: "crimson", name: "Crimson Forge", color: "bg-red-600" },
    { id: "matrix", name: "Hacker Matrix", color: "bg-green-500" },
  ];

  const [currentTheme, setCurrentTheme] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const themeId = themes[currentTheme].id;
    if (themeId === "default") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", themeId);
    }
  }, [currentTheme]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      
      {isOpen && (
        <div className="glass-panel p-3 flex flex-col gap-2 animate-in slide-in-from-bottom-5">
          {themes.map((theme, idx) => (
            <button
              key={theme.id}
              onClick={() => setCurrentTheme(idx)}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                currentTheme === idx ? "bg-white/20" : "hover:bg-white/10"
              }`}
            >
              <div className={`w-4 h-4 rounded-full ${theme.color} shadow-sm border border-white/30`} />
              <span className="text-sm font-medium text-white">{theme.name}</span>
            </button>
          ))}
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="glass-panel glass-highlight w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)] group"
        title="Switch Theme"
      >
        <Palette className="w-6 h-6 text-white group-hover:text-orange-400 transition-colors" />
      </button>
      
    </div>
  );
}
