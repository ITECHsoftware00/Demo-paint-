"use client";

import React, { useState, useEffect } from "react";

export type Card = {
  id: number;
  content: React.ReactNode;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleOutsideClick();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="w-full h-full p-4 md:p-8 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-5 relative">
      {cards.map((card, i) => (
        <div key={card.id || i} className={card.className}>
          <div
            onClick={() => handleClick(card)}
            className={`relative overflow-hidden cursor-pointer rounded-2xl md:rounded-3xl border-2 border-border/60 transition-all duration-300 group ${
              selected?.id === card.id
                ? "fixed inset-4 md:inset-12 lg:inset-20 z-50 m-auto max-w-5xl max-h-[85vh] rounded-2xl shadow-2xl border-primary"
                : lastSelected?.id === card.id
                ? "z-40 bg-card h-80 md:h-96 w-full"
                : "bg-card h-80 md:h-96 w-full hover:-translate-y-1 hover:shadow-xl hover:border-primary/80"
            }`}
          >
            {/* Thumbnail Image */}
            <img
              src={card.thumbnail}
              alt="Project Showcase"
              className={`object-cover object-center w-full h-full transition-transform duration-500 ease-out ${
                selected?.id === card.id
                  ? "scale-100 brightness-90"
                  : "group-hover:scale-105 brightness-95"
              }`}
            />

            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 ${
                selected?.id === card.id ? "opacity-100" : "opacity-70 group-hover:opacity-90"
              }`}
            />

            {/* Expand / Close Indicator */}
            <div className="absolute top-4 right-4 z-20">
              {selected?.id === card.id ? (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOutsideClick();
                  }}
                  className="w-9 h-9 bg-black/80 text-white rounded-full flex items-center justify-center border border-white/20 hover:bg-primary transition-colors text-sm font-bold shadow-lg"
                  aria-label="Close Preview"
                >
                  ✕
                </button>
              ) : (
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs font-mono uppercase bg-black/75 text-white px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm">
                  View Project ↗
                </span>
              )}
            </div>

            {/* Card Content Overlay */}
            <div
              className={`absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 transition-all duration-300 ${
                selected?.id === card.id ? "translate-y-0 opacity-100" : "translate-y-1 opacity-90"
              }`}
            >
              {card.content}
            </div>
          </div>
        </div>
      ))}

      {/* Backdrop Backdrop Blur when active */}
      {selected && (
        <div
          onClick={handleOutsideClick}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 transition-opacity duration-300"
          aria-hidden="true"
        />
      )}
    </div>
  );
};
