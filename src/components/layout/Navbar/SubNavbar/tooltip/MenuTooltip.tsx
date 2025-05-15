import React, { useEffect, useRef } from "react";
import "./MenuTooltip.css";

interface MenuSection {
  title: string;
  items: {
    text: string;
    link: string;
  }[];
}

interface MenuTooltipProps {
  sections: MenuSection[];
  position?: { top: number; left: number };
  onClose?: () => void;
}

export const MenuTooltip: React.FC<MenuTooltipProps> = ({
  sections,
  position,
  onClose,
}) => {
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        onClose?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div ref={tooltipRef} className="menu-tooltip">
      <div className="tooltip-grid">
        {sections.map((section, idx) => (
          <div key={idx} className="tooltip-section">
            <h4>{section.title}</h4>
            <ul>
              {section.items.map((item, itemIdx) => (
                <li key={itemIdx}>
                  <a href={item.link}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
