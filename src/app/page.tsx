"use client";

import { APP } from "@/lib/config";
import { useTheme } from "next-themes";
import { useEffect, useEffectEvent, useState } from "react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const mountPage = useEffectEvent(() => setIsMounted(true));

  useEffect(() => {
    mountPage();
  }, []);

  if (!isMounted) return;

  return (
    <div>
      <p>{APP.name}</p>
      <p>{APP.version}</p>
      <div>
        The current theme is: {theme}
        <button onClick={() => setTheme("light")}>Light Mode</button>
        <button onClick={() => setTheme("dark")}>Dark Mode</button>
      </div>
    </div>
  );
}
