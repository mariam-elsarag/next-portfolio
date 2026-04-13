"use client";

import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[], offset = 100) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);

        if (!visibleEntries.length) return;

        // pick MOST visible section
        const mostVisible = visibleEntries.reduce((prev, curr) => {
          return curr.intersectionRatio > prev.intersectionRatio ? curr : prev;
        });

        setActiveId(mostVisible.target.id);
      },
      {
        rootMargin: `-${offset}px 0px -60% 0px`,
        threshold: [0.2, 0.4, 0.6, 0.8],
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ids, offset]);

  return activeId;
}
