// components/CalendlyInline.tsx
'use client';

import { InlineWidget } from 'react-calendly';

interface CalendlyInlineProps {
  url: string;
  styles?: React.CSSProperties;
  pageSettings?: {
    backgroundColor?: string;
    hideEventTypeDetails?: boolean;
    hideLandingPageDetails?: boolean;
    primaryColor?: string;
    textColor?: string;
  };
  prefill?: {
    email?: string;
    firstName?: string;
    lastName?: string;
    name?: string;
  };
}

const CalendlyInline: React.FC<CalendlyInlineProps> = ({ 
  url = "https://calendly.com/apexsolutionsnagpur/30min",
  styles,
  pageSettings,
  prefill 
}) => {
  const defaultStyles: React.CSSProperties = {
    minHeight: '700px',
    width: '100%',
    ...styles
  };

  return (
    <div style={defaultStyles}>
      <InlineWidget
        url={url}
        pageSettings={{
          backgroundColor: 'ffffff',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: '00a2ff',
          textColor: '4d5055',
          ...pageSettings
        }}
        prefill={prefill}
        styles={{
          height: '100%',
          width: '100%'
        }}
      />
    </div>
  );
};

export default CalendlyInline;