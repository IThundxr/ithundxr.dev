// "use client";
//
// import { Moon, Sun } from "lucide-react";
// import { useEffect, useState } from "react";
//
// export function ThemeToggle() {
//   const [mounted, setMounted] = useState(false);
//   const [theme, setTheme] = useState<"light" | "dark">("light");
//
//   useEffect(() => {
//     setMounted(true);
//     const savedTheme = document.cookie
//       .split(";")
//       .find((c) => c.trim().startsWith("theme="))
//       ?.split("=")[1] as "light" | "dark" | undefined;
//     if (savedTheme) {
//       setTheme(savedTheme);
//       document.documentElement.classList.toggle("dark", savedTheme === "dark");
//     } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//       setTheme("dark");
//       document.documentElement.classList.add("dark");
//       document.cookie = `theme=dark;path=/;max-age=31536000`; // 1 year
//     }
//   }, []);
//
//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     document.documentElement.classList.toggle("dark", newTheme === "dark");
//     document.cookie = `theme=${newTheme};path=/;max-age=31536000`; // 1 year
//   };
//
//   if (!mounted) {
//     return null;
//   }
//
//   return (
//     <button
//       onClick={toggleTheme}
//       className="p-2 text-primary transition-all duration-150 hover:scale-110 hover:drop-shadow-md"
//       aria-label="Toggle theme"
//     >
//       {theme === "light" ? <Moon size={32} /> : <Sun size={32} />}
//     </button>
//   );
// }
