import { useState } from 'react';
import { AllocationModal } from './components/AllocationModal';
import { RebalanceModal } from './components/RebalanceModal';
import { toast } from 'sonner@2.0.3';
import { Toaster } from './components/ui/sonner';
import { CustomTabs } from './components/CustomTabs';

interface TenantData {
  name: string;
  type: string;
  bundle1: {
    allocated: number;
    consumed: number;
    percentage: number;
    status: 'healthy' | 'warning' | 'danger';
  } | null;
  bundle2: {
    allocated: number;
    consumed: number;
    percentage: number;
    status: 'future' | 'planned';
  } | null;
}

interface UnitTypeData {
  bundleInterval: {
    name: string;
    period: string;
    status: string;
    remaining: string;
  };
  totalUnits: number;
  totalConsumed: number;
  totalAllocated: number;
  remainingPool: number;
  bundle1Total: number;
  bundle1Allocated: number;
  bundle2Total: number;
  bundle2Allocated: number;
  tenants: TenantData[];
}

type UnitType = 'ai-units' | 'agent-units' | 'heals' | 'billable-activities';

export default function App() {
  const [allocationModalOpen, setAllocationModalOpen] = useState(false);
  const [rebalanceModalOpen, setRebalanceModalOpen] = useState(false);
  const [currentTenant, setCurrentTenant] = useState<TenantData | null>(null);
  const [currentContract, setCurrentContract] = useState<'bundle1' | 'bundle2' | null>(null);
  const [currentUnitType, setCurrentUnitType] = useState<UnitType>('ai-units');

  const unitTypeData: { [key in UnitType]: UnitTypeData } = {
    'ai-units': {
      bundleInterval: {
        name: 'Bundle Interval 1',
        period: 'January 2025 - December 2025',
        status: 'Active',
        remaining: '2 months remaining',
      },
      totalUnits: 50000,
      totalConsumed: 32500,
      totalAllocated: 42000,
      remainingPool: 8000,
      bundle1Total: 50000,
      bundle1Allocated: 42000,
      bundle2Total: 30000,
      bundle2Allocated: 18000,
      tenants: [
        {
          name: 'Finance',
          type: 'Tenant A',
          bundle1: { allocated: 12000, consumed: 8500, percentage: 71, status: 'healthy' },
          bundle2: { allocated: 5000, consumed: 0, percentage: 0, status: 'future' },
        },
        {
          name: 'Marketing',
          type: 'Tenant B',
          bundle1: { allocated: 10000, consumed: 9200, percentage: 92, status: 'warning' },
          bundle2: { allocated: 6000, consumed: 0, percentage: 0, status: 'future' },
        },
        {
          name: 'Engineering',
          type: 'Main/Eng Folder',
          bundle1: { allocated: 15000, consumed: 10800, percentage: 72, status: 'healthy' },
          bundle2: { allocated: 7000, consumed: 0, percentage: 0, status: 'future' },
        },
        {
          name: 'Operations',
          type: 'Main/Ops Folder',
          bundle1: { allocated: 3000, consumed: 1500, percentage: 50, status: 'healthy' },
          bundle2: null,
        },
        {
          name: 'Sales',
          type: 'Tenant C',
          bundle1: { allocated: 2000, consumed: 1500, percentage: 75, status: 'healthy' },
          bundle2: null,
        },
      ],
    },
    'agent-units': {
      bundleInterval: {
        name: 'Bundle Interval 1',
        period: 'March 2025 - February 2026',
        status: 'Active',
        remaining: '4 months remaining',
      },
      totalUnits: 100000,
      totalConsumed: 45000,
      totalAllocated: 85000,
      remainingPool: 15000,
      bundle1Total: 100000,
      bundle1Allocated: 85000,
      bundle2Total: 60000,
      bundle2Allocated: 35000,
      tenants: [
        {
          name: 'Finance',
          type: 'Tenant A',
          bundle1: { allocated: 25000, consumed: 15000, percentage: 60, status: 'healthy' },
          bundle2: { allocated: 12000, consumed: 0, percentage: 0, status: 'future' },
        },
        {
          name: 'Marketing',
          type: 'Tenant B',
          bundle1: { allocated: 20000, consumed: 18000, percentage: 90, status: 'warning' },
          bundle2: { allocated: 10000, consumed: 0, percentage: 0, status: 'future' },
        },
        {
          name: 'Engineering',
          type: 'Main/Eng Folder',
          bundle1: { allocated: 30000, consumed: 9000, percentage: 30, status: 'healthy' },
          bundle2: { allocated: 13000, consumed: 0, percentage: 0, status: 'future' },
        },
        {
          name: 'Operations',
          type: 'Main/Ops Folder',
          bundle1: { allocated: 6000, consumed: 1800, percentage: 30, status: 'healthy' },
          bundle2: null,
        },
        {
          name: 'Sales',
          type: 'Tenant C',
          bundle1: { allocated: 4000, consumed: 1200, percentage: 30, status: 'healthy' },
          bundle2: null,
        },
      ],
    },
    'heals': {
      bundleInterval: {
        name: 'Bundle Interval 1',
        period: 'February 2025 - January 2026',
        status: 'Active',
        remaining: '3 months remaining',
      },
      totalUnits: 75000,
      totalConsumed: 52000,
      totalAllocated: 68000,
      remainingPool: 7000,
      bundle1Total: 75000,
      bundle1Allocated: 68000,
      bundle2Total: 50000,
      bundle2Allocated: 28000,
      tenants: [
        {
          name: 'Finance',
          type: 'Tenant A',
          bundle1: { allocated: 18000, consumed: 14000, percentage: 78, status: 'healthy' },
          bundle2: { allocated: 8000, consumed: 0, percentage: 0, status: 'future' },
        },
        {
          name: 'Marketing',
          type: 'Tenant B',
          bundle1: { allocated: 15000, consumed: 13500, percentage: 90, status: 'warning' },
          bundle2: { allocated: 9000, consumed: 0, percentage: 0, status: 'future' },
        },
        {
          name: 'Engineering',
          type: 'Main/Eng Folder',
          bundle1: { allocated: 25000, consumed: 19000, percentage: 76, status: 'healthy' },
          bundle2: { allocated: 11000, consumed: 0, percentage: 0, status: 'future' },
        },
        {
          name: 'Operations',
          type: 'Main/Ops Folder',
          bundle1: { allocated: 7000, consumed: 3500, percentage: 50, status: 'healthy' },
          bundle2: null,
        },
        {
          name: 'Sales',
          type: 'Tenant C',
          bundle1: { allocated: 3000, consumed: 2000, percentage: 67, status: 'healthy' },
          bundle2: null,
        },
      ],
    },
    'billable-activities': {
      bundleInterval: {
        name: 'Bundle Interval 1',
        period: 'April 2025 - March 2026',
        status: 'Active',
        remaining: '5 months remaining',
      },
      totalUnits: 120000,
      totalConsumed: 88000,
      totalAllocated: 105000,
      remainingPool: 15000,
      bundle1Total: 120000,
      bundle1Allocated: 105000,
      bundle2Total: 80000,
      bundle2Allocated: 45000,
      tenants: [
        {
          name: 'Finance',
          type: 'Tenant A',
          bundle1: { allocated: 30000, consumed: 24000, percentage: 80, status: 'healthy' },
          bundle2: { allocated: 15000, consumed: 0, percentage: 0, status: 'future' },
        },
        {
          name: 'Marketing',
          type: 'Tenant B',
          bundle1: { allocated: 25000, consumed: 23000, percentage: 92, status: 'warning' },
          bundle2: { allocated: 12000, consumed: 0, percentage: 0, status: 'future' },
        },
        {
          name: 'Engineering',
          type: 'Main/Eng Folder',
          bundle1: { allocated: 35000, consumed: 28000, percentage: 80, status: 'healthy' },
          bundle2: { allocated: 18000, consumed: 0, percentage: 0, status: 'future' },
        },
        {
          name: 'Operations',
          type: 'Main/Ops Folder',
          bundle1: { allocated: 10000, consumed: 8000, percentage: 80, status: 'healthy' },
          bundle2: null,
        },
        {
          name: 'Sales',
          type: 'Tenant C',
          bundle1: { allocated: 5000, consumed: 5000, percentage: 100, status: 'danger' },
          bundle2: null,
        },
      ],
    },
  };

  const handleOpenAllocation = (tenant: TenantData, contract: 'bundle1' | 'bundle2') => {
    setCurrentTenant(tenant);
    setCurrentContract(contract);
    setAllocationModalOpen(true);
  };

  const handleConfirmAllocation = (amount: number, isBlocked: boolean) => {
    if (!currentTenant || !currentContract) return;

    const contractName = currentContract === 'bundle1' ? 'Bundle Interval 1' : 'Bundle Interval 2';
    toast.success('✅ Allocation Updated', {
      description: `${currentTenant.name} allocation in ${contractName} updated to ${amount.toLocaleString()} units.\n\nBlocking policy: ${
        isBlocked ? '🔒 Enabled' : '🔓 Disabled'
      }\n\nChanges will be applied after saving.`,
    });

    setAllocationModalOpen(false);
    setCurrentTenant(null);
    setCurrentContract(null);
  };

  const handleApplyRecommendations = () => {
    toast.success('✨ Recommendations Applied', {
      description:
        'Planning recommendations for Bundle Interval 2 have been saved. You can now adjust individual tenant allocations.',
    });
    setRebalanceModalOpen(false);
  };

  const handleExportReport = () => {
    toast.info('📊 Exporting Allocation Report', {
      description:
        'Generating comprehensive report with:\n\n• Current bundle interval allocations\n• Consumption patterns by tenant\n• Bundle Interval 2 planning summary\n• Utilization trends\n• Capacity recommendations\n\nReport will be downloaded as Excel file.',
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'healthy':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[calc(var(--radius)+3px)] caption" style={{ background: 'var(--accent)/20', color: 'var(--accent)' }}>
            ✅ Healthy
          </span>
        );
      case 'warning':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[calc(var(--radius)+3px)] caption" style={{ background: '#fef3c7', color: '#92400e' }}>
            ⚠️ High Usage
          </span>
        );
      case 'future':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[calc(var(--radius)+3px)] caption" style={{ background: 'var(--accent)/20', color: 'var(--accent)' }}>
            📅 Future
          </span>
        );
      default:
        return null;
    }
  };

  const renderDashboardContent = () => {
    const data = unitTypeData[currentUnitType];
    const utilizationPercent = Math.round((data.totalConsumed / data.totalUnits) * 100);
    const allocationPercent = Math.round((data.totalAllocated / data.totalUnits) * 100);
    const bundle2Remaining = data.bundle2Total - data.bundle2Allocated;

    return (
      <div>
        {/* Current Bundle Interval Header */}
        <div className="bg-card px-6 py-4 rounded-[calc(var(--radius)+3px)] mb-4 border-l-4 border-primary" style={{ boxShadow: 'var(--elevation-sm)' }}>
          <div className="flex justify-between items-center">
            <div>
              <div className="caption mb-1" style={{ color: 'var(--muted-foreground)', letterSpacing: '0.5px' }}>
                CURRENT ACTIVE BUNDLE INTERVAL
              </div>
              <h2>{data.bundleInterval.period}</h2>
            </div>
            <div className="px-4 py-1.5 rounded-[20px] caption" style={{ background: '#dcfce7', color: '#166534' }}>
              ✓ {data.bundleInterval.status} • {data.bundleInterval.remaining}
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 mb-6">
          <div className="bg-card p-6 rounded-[calc(var(--radius)+3px)]" style={{ boxShadow: 'var(--elevation-sm)' }}>
            <p 
              className="mb-2" 
              style={{ 
                fontFamily: 'Noto Sans', 
                fontSize: '16px', 
                fontWeight: 'var(--font-weight-semibold)', 
                lineHeight: '24px',
                color: 'var(--foreground)',
                fontVariationSettings: "'CTGR' 0, 'wdth' 100"
              }}
            >
              Total Units
            </p>
            <p 
              style={{ 
                fontFamily: 'Noto Sans', 
                fontSize: '32px', 
                fontWeight: 'var(--font-weight-bold)', 
                lineHeight: '1.2',
                marginBottom: '4px', 
                color: 'var(--primary)',
                fontVariationSettings: "'CTGR' 0, 'wdth' 100"
              }}
            >
              {data.totalUnits.toLocaleString()}
            </p>
            <p 
              style={{ 
                fontFamily: 'Noto Sans', 
                fontSize: '12px', 
                fontWeight: 'var(--font-weight-regular)', 
                lineHeight: '16px',
                color: '#526069',
                fontVariationSettings: "'CTGR' 0, 'wdth' 100"
              }}
            >
              Available in current bundle
            </p>
          </div>

          <div className="bg-card p-6 rounded-[calc(var(--radius)+3px)]" style={{ boxShadow: 'var(--elevation-sm)' }}>
            <p 
              className="mb-2" 
              style={{ 
                fontFamily: 'Noto Sans', 
                fontSize: '16px', 
                fontWeight: 'var(--font-weight-semibold)', 
                lineHeight: '24px',
                color: 'var(--foreground)',
                fontVariationSettings: "'CTGR' 0, 'wdth' 100"
              }}
            >
              Total Consumed
            </p>
            <p 
              style={{ 
                fontFamily: 'Noto Sans', 
                fontSize: '32px', 
                fontWeight: 'var(--font-weight-bold)', 
                lineHeight: '1.2',
                marginBottom: '4px', 
                color: 'var(--accent)',
                fontVariationSettings: "'CTGR' 0, 'wdth' 100"
              }}
            >
              {data.totalConsumed.toLocaleString()}
            </p>
            <p 
              style={{ 
                fontFamily: 'Noto Sans', 
                fontSize: '12px', 
                fontWeight: 'var(--font-weight-regular)', 
                lineHeight: '16px',
                color: '#526069',
                fontVariationSettings: "'CTGR' 0, 'wdth' 100"
              }}
            >
              {utilizationPercent}% utilization (as of Oct 2025)
            </p>
          </div>

          <div className="bg-card p-6 rounded-[calc(var(--radius)+3px)]" style={{ boxShadow: 'var(--elevation-sm)' }}>
            <p 
              className="mb-2" 
              style={{ 
                fontFamily: 'Noto Sans', 
                fontSize: '16px', 
                fontWeight: 'var(--font-weight-semibold)', 
                lineHeight: '24px',
                color: 'var(--foreground)',
                fontVariationSettings: "'CTGR' 0, 'wdth' 100"
              }}
            >
              Total Allocated
            </p>
            <p 
              style={{ 
                fontFamily: 'Noto Sans', 
                fontSize: '32px', 
                fontWeight: 'var(--font-weight-bold)', 
                lineHeight: '1.2',
                marginBottom: '4px', 
                color: '#f59e0b',
                fontVariationSettings: "'CTGR' 0, 'wdth' 100"
              }}
            >
              {data.totalAllocated.toLocaleString()}
            </p>
            <p 
              style={{ 
                fontFamily: 'Noto Sans', 
                fontSize: '12px', 
                fontWeight: 'var(--font-weight-regular)', 
                lineHeight: '16px',
                color: '#526069',
                fontVariationSettings: "'CTGR' 0, 'wdth' 100"
              }}
            >
              {allocationPercent}% allocated to tenants
            </p>
          </div>

          <div className="bg-card p-6 rounded-[calc(var(--radius)+3px)]" style={{ boxShadow: 'var(--elevation-sm)' }}>
            <p 
              className="mb-2" 
              style={{ 
                fontFamily: 'Noto Sans', 
                fontSize: '16px', 
                fontWeight: 'var(--font-weight-semibold)', 
                lineHeight: '24px',
                color: 'var(--foreground)',
                fontVariationSettings: "'CTGR' 0, 'wdth' 100"
              }}
            >
              Remaining Pool
            </p>
            <p 
              style={{ 
                fontFamily: 'Noto Sans', 
                fontSize: '32px', 
                fontWeight: 'var(--font-weight-bold)', 
                lineHeight: '1.2',
                marginBottom: '4px', 
                color: 'var(--muted-foreground)',
                fontVariationSettings: "'CTGR' 0, 'wdth' 100"
              }}
            >
              {data.remainingPool.toLocaleString()}
            </p>
            <p 
              style={{ 
                fontFamily: 'Noto Sans', 
                fontSize: '12px', 
                fontWeight: 'var(--font-weight-regular)', 
                lineHeight: '16px',
                color: '#526069',
                fontVariationSettings: "'CTGR' 0, 'wdth' 100"
              }}
            >
              Available for allocation
            </p>
          </div>
        </div>

        {/* Allocation Table */}
        <div className="bg-card rounded-[calc(var(--radius)+3px)] overflow-hidden mb-6" style={{ boxShadow: 'var(--elevation-sm)' }}>
          <div className="bg-muted px-6 py-5 border-b border-border flex justify-between items-center">
            <h2>Tenant Allocation by Contract Bundle</h2>
            <button
              onClick={handleExportReport}
              className="px-5 py-2.5 bg-secondary text-secondary-foreground border border-border rounded-[var(--radius)] hover:bg-muted transition-colors flex items-center gap-2"
            >
              <span>📊</span>
              <span>Export Allocation Report</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-muted px-4 py-4 text-left border-b-2 border-border" style={{ color: 'var(--muted-foreground)', width: '20%' }}>
                    <span style={{ fontFamily: 'Noto Sans', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-semibold)' }}>
                      Tenant / Business Unit
                    </span>
                  </th>
                  <th className="bg-muted px-4 py-4 text-center border-b-2 border-border" style={{ color: 'var(--muted-foreground)', width: '35%' }}>
                    <div className="flex flex-col gap-1">
                      <p 
                        style={{ 
                          fontFamily: 'Noto Sans', 
                          fontSize: '12px', 
                          fontWeight: 'var(--font-weight-regular)', 
                          lineHeight: '16px',
                          color: '#526069',
                          fontVariationSettings: "'CTGR' 0, 'wdth' 100"
                        }}
                      >
                        {data.bundleInterval.period}
                      </p>
                      <p 
                        style={{ 
                          fontFamily: 'Noto Sans', 
                          fontSize: '12px', 
                          fontWeight: 'var(--font-weight-regular)', 
                          lineHeight: '16px',
                          color: 'var(--primary)',
                          fontVariationSettings: "'CTGR' 0, 'wdth' 100"
                        }}
                      >
                        {data.bundle1Total.toLocaleString()} total units
                      </p>
                      <p 
                        style={{ 
                          fontFamily: 'Noto Sans', 
                          fontSize: '12px', 
                          fontWeight: 'var(--font-weight-regular)', 
                          lineHeight: '16px',
                          color: 'var(--primary)',
                          fontVariationSettings: "'CTGR' 0, 'wdth' 100"
                        }}
                      >
                        {data.bundle1Allocated.toLocaleString()} allocated
                      </p>
                    </div>
                  </th>
                  <th className="bg-muted px-4 py-4 text-center border-b-2 border-border" style={{ color: 'var(--muted-foreground)', width: '35%' }}>
                    <div className="flex flex-col gap-1">
                      <p 
                        style={{ 
                          fontFamily: 'Noto Sans', 
                          fontSize: '12px', 
                          fontWeight: 'var(--font-weight-regular)', 
                          lineHeight: '16px',
                          color: '#526069',
                          fontVariationSettings: "'CTGR' 0, 'wdth' 100"
                        }}
                      >
                        January 2026 - July 2026
                      </p>
                      <p 
                        style={{ 
                          fontFamily: 'Noto Sans', 
                          fontSize: '12px', 
                          fontWeight: 'var(--font-weight-regular)', 
                          lineHeight: '16px',
                          color: 'var(--primary)',
                          fontVariationSettings: "'CTGR' 0, 'wdth' 100"
                        }}
                      >
                        {data.bundle2Total.toLocaleString()} total units
                      </p>
                      <p 
                        style={{ 
                          fontFamily: 'Noto Sans', 
                          fontSize: '12px', 
                          fontWeight: 'var(--font-weight-regular)', 
                          lineHeight: '16px',
                          color: 'var(--primary)',
                          fontVariationSettings: "'CTGR' 0, 'wdth' 100"
                        }}
                      >
                        {data.bundle2Allocated.toLocaleString()} pre-allocated
                      </p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.tenants.map((tenant, idx) => (
                  <tr key={idx} className="hover:bg-muted transition-colors">
                    <td className="px-4 py-4 border-b border-muted align-top">
                      <div>
                        <div>{tenant.name}</div>
                        <span className="small inline-block mt-1 px-2 py-0.5 bg-muted text-muted-foreground rounded-[var(--radius)]">
                          {tenant.type}
                        </span>
                      </div>
                    </td>
                    <td
                      className="px-4 py-4 border-b border-muted text-center align-top cursor-pointer hover:bg-accent/5 transition-all"
                      onClick={() => handleOpenAllocation(tenant, 'bundle1')}
                    >
                      {tenant.bundle1 ? (
                        <>
                          <div className="mb-1" style={{ fontFamily: 'Noto Sans', fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-bold)', color: 'var(--primary)' }}>
                            {tenant.bundle1.allocated.toLocaleString()} allocated
                          </div>
                          <div className="caption mb-2" style={{ color: 'var(--muted-foreground)' }}>
                            {tenant.bundle1.consumed.toLocaleString()} consumed ({tenant.bundle1.percentage}%)
                          </div>
                          <div className="h-1.5 bg-muted rounded-[calc(var(--radius)-1px)] overflow-hidden mb-1">
                            <div
                              className="h-full bg-accent transition-all"
                              style={{ width: `${tenant.bundle1.percentage}%` }}
                            />
                          </div>
                          {getStatusBadge(tenant.bundle1.status)}
                        </>
                      ) : (
                        <div>
                          <div className="caption" style={{ color: 'var(--muted-foreground)' }}>
                            No allocation
                          </div>
                          <div className="small mt-1" style={{ color: 'var(--muted-foreground)' }}>
                            Click to allocate
                          </div>
                        </div>
                      )}
                    </td>
                    <td
                      className="px-4 py-4 border-b border-muted text-center align-top cursor-pointer hover:bg-accent/5 transition-all"
                      onClick={() => handleOpenAllocation(tenant, 'bundle2')}
                    >
                      {tenant.bundle2 ? (
                        <>
                          <div className="mb-1" style={{ fontFamily: 'Noto Sans', fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-bold)', color: 'var(--chart-3)' }}>
                            {tenant.bundle2.allocated.toLocaleString()} planned
                          </div>
                          <div className="caption mb-2" style={{ color: 'var(--muted-foreground)' }}>
                            {tenant.bundle2.consumed.toLocaleString()} consumed
                          </div>
                          <div className="h-1.5 bg-muted rounded-[calc(var(--radius)-1px)] overflow-hidden mb-1">
                            <div
                              className="h-full bg-accent transition-all"
                              style={{ width: `${tenant.bundle2.percentage}%` }}
                            />
                          </div>
                          {getStatusBadge(tenant.bundle2.status)}
                        </>
                      ) : (
                        <div>
                          <div className="caption" style={{ color: 'var(--muted-foreground)' }}>
                            No allocation
                          </div>
                          <div className="small mt-1" style={{ color: 'var(--muted-foreground)' }}>
                            Click to allocate
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}

                {/* Totals Row */}
                <tr className="bg-muted border-t-2 border-border">
                  <td className="px-4 py-4">
                    <h3>TOTALS</h3>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <div style={{ fontFamily: 'Noto Sans', fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-bold)' }}>
                      {data.bundle1Allocated.toLocaleString()} allocated
                    </div>
                    <div className="caption" style={{ color: 'var(--muted-foreground)' }}>
                      {data.totalConsumed.toLocaleString()} consumed
                    </div>
                    <div className="caption mt-1" style={{ color: 'var(--accent)' }}>
                      ✅ {data.remainingPool.toLocaleString()} remaining in pool
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <div style={{ fontFamily: 'Noto Sans', fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-bold)', color: 'var(--chart-3)' }}>
                      {data.bundle2Allocated.toLocaleString()} planned
                    </div>
                    <div className="caption" style={{ color: 'var(--muted-foreground)' }}>
                      0 consumed
                    </div>
                    <div className="caption mt-1" style={{ color: 'var(--muted-foreground)' }}>
                      {bundle2Remaining.toLocaleString()} available for planning
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Planning Assistant Button */}
        <div className="flex justify-center">
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background p-5">
      <Toaster />
      
      <div className="max-w-[1800px] mx-auto">
        {/* Tabs for Unit Types */}
        <CustomTabs
          tabs={['AI Units', 'Agent Units', 'Heals', 'Billable Activities']}
          activeTab={
            currentUnitType === 'ai-units' ? 'AI Units' :
            currentUnitType === 'agent-units' ? 'Agent Units' :
            currentUnitType === 'heals' ? 'Heals' : 'Billable Activities'
          }
          onTabChange={(tab) => {
            const mapping: { [key: string]: UnitType } = {
              'AI Units': 'ai-units',
              'Agent Units': 'agent-units',
              'Heals': 'heals',
              'Billable Activities': 'billable-activities',
            };
            setCurrentUnitType(mapping[tab]);
          }}
        />

        {renderDashboardContent()}
      </div>

      {/* Modals */}
      {currentTenant && currentContract && (
        <AllocationModal
          isOpen={allocationModalOpen}
          tenant={currentTenant.name}
          contract={currentContract === 'bundle1' ? 'Bundle Interval 1' : 'Bundle Interval 2'}
          currentAllocation={currentTenant[currentContract]?.allocated || 0}
          contractCapacity={currentContract === 'bundle1' ? 50000 : 30000}
          totalContractAllocated={currentContract === 'bundle1' ? 42000 : 18000}
          onClose={() => {
            setAllocationModalOpen(false);
            setCurrentTenant(null);
            setCurrentContract(null);
          }}
          onConfirm={handleConfirmAllocation}
        />
      )}

      <RebalanceModal
        isOpen={rebalanceModalOpen}
        onClose={() => setRebalanceModalOpen(false)}
        onApply={handleApplyRecommendations}
      />
    </div>
  );
}