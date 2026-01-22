// components/CalendlyPopup.tsx
'use client';

import { useEffect, useState } from 'react';
import { PopupButton } from 'react-calendly';

interface CalendlyPopupProps {
  url?: string;
  text?: string;
  className?: string;
  color?: string;
  textColor?: string;
}

const CalendlyPopup: React.FC<CalendlyPopupProps> = ({
  url = "https://calendly.com/apexsolutionsnagpur/30min",
  text = "Book a Demo",
  className = "bg-[#2d5790] text-white px-6 py-3 rounded-lg hover:bg-[#1e3a61] transition-colors",
  color = "#2d5790",
  textColor = "#ffffff"
}) => {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRootElement(document.getElementById("__next") || document.body);
  }, []);

  if (!rootElement) return null;

  return (
    <PopupButton
      url={url}
      rootElement={rootElement}
      text={text}
      className={className}
      styles={{
        backgroundColor: color,
        color: textColor
      }}
    />
  );
};

export default CalendlyPopup;