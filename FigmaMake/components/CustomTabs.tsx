import { ReactNode } from 'react';

interface CustomTabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function CustomTab({ label, isActive, onClick }: CustomTabProps) {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start px-[16px] py-[10px] relative shrink-0 cursor-pointer"
      onClick={onClick}
    >
      {isActive && (
        <div
          aria-hidden="true"
          className="absolute border-[0px_0px_4px] border-solid inset-0 pointer-events-none"
          style={{ borderColor: 'var(--primary)' }}
        />
      )}
      <p
        className="relative shrink-0 text-[16px] text-center text-nowrap whitespace-pre"
        style={{
          fontFamily: 'Noto Sans',
          fontWeight: 'var(--font-weight-semibold)',
          lineHeight: '24px',
          color: isActive ? 'var(--primary)' : 'var(--foreground)',
          fontVariationSettings: "'CTGR' 0, 'wdth' 100",
        }}
      >
        {label}
      </p>
    </div>
  );
}

interface CustomTabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function CustomTabs({ tabs, activeTab, onTabChange }: CustomTabsProps) {
  return (
    <div className="content-stretch flex items-start relative w-full mb-6">
      {tabs.map((tab) => (
        <CustomTab
          key={tab}
          label={tab}
          isActive={activeTab === tab}
          onClick={() => onTabChange(tab)}
        />
      ))}
    </div>
  );
}
