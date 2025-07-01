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
  position, // 'position' prop is defined but not directly applied to style in the current JSX.
  onClose,
}) => {
  // Ref to directly access the DOM element of the tooltip for click outside detection.
  const tooltipRef = useRef<HTMLDivElement>(null);

  // Effect hook to add and clean up an event listener for clicks outside the tooltip.
  useEffect(() => {

    const handleClickOutside = (event: MouseEvent) => {
      // Checks if the tooltip ref exists and if the clicked target is not within the tooltip.
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        onClose?.(); // Calls onClose if it's a function.
      }
    };

    // Adds the event listener when the component mounts.
    document.addEventListener("mousedown", handleClickOutside);
    // Removes the event listener when the component unmounts or `onClose` changes.
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]); // Dependency array: re-run effect if `onClose` changes.

  return (
    <div ref={tooltipRef} className="menu-tooltip">
      <div className="tooltip-grid">
        {/* Maps through each section provided in props to render a column of links. */}
        {sections.map((section, idx) => (
          <div key={idx} className="tooltip-section">
            <h4>{section.title}</h4>
            <ul>
              {/* Maps through each item within a section to render individual links. */}
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