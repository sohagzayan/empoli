'use client';
import { useState } from 'react';

const SettingsWrapper = () => {
  const [activeSettingsTab, setActiveSettingsTab] = useState(0);

  const getContent = (activeSettingsTab: number) => {
    switch (activeSettingsTab) {
      case 0:
        break;

      default:
        break;
    }
  };

  return <div className="">content</div>;
};

export default SettingsWrapper;
