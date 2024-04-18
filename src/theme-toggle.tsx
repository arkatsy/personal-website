import { Expand } from "@theme-toggles/react";
import "@theme-toggles/react/css/Expand.css";
import useTheme from "./use-theme";

export default function ThemeToggle() {
  const { isDark, toggle } = useTheme();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <Expand toggled={isDark} onToggle={toggle} duration={300} className="p-1 text-3xl" />;
}
