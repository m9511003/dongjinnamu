"use client";

import { useEffect, useState } from "react";
import LinkCard from "./LinkCard";
import { links } from "@/data/links";

const STORAGE_KEY = "dongjinnamu-link-clicks";

export default function LinkList() {
  const [clicks, setClicks] = useState<Record<string, number>>({});

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setClicks(JSON.parse(stored));
    }
  }, []);

  const handleClick = (id: string) => {
    setClicks((prev) => {
      const next = { ...prev, [id]: (prev[id] ?? 0) + 1 };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  return (
    <div className="flex w-full flex-col gap-3">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          title={link.title}
          url={link.url}
          clicks={clicks[link.id] ?? 0}
          onLinkClick={() => handleClick(link.id)}
        />
      ))}
    </div>
  );
}
