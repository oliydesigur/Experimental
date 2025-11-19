import { useState, useEffect } from 'react';

interface AllocationModalProps {
  isOpen: boolean;
  tenant: string;
  contract: string;
  currentAllocation: number;
  contractCapacity: number;
  totalContractAllocated: number;
  onClose: () => void;
  onConfirm: (amount: number, isBlocked: boolean) => void;
}

export function AllocationModal({
  isOpen,
  tenant,
  contract,
  currentAllocation,
  contractCapacity,
  totalContractAllocated,
  onClose,
  onConfirm,
}: AllocationModalProps) {
  const [amount, setAmount] = useState<string>('');
  const [isBlocked, setIsBlocked] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (isOpen) {
      setAmount(currentAllocation > 0 ? currentAllocation.toString() : '');
      setIsBlocked(true);
      setError('');
    }
  }, [isOpen, currentAllocation]);

  const available = contractCapacity - totalContractAllocated + currentAllocation;
  const value = parseInt(amount) || 0;
  const diff = value - currentAllocation;

  useEffect(() => {
    if (value < 0) {
      setError('Allocation cannot be negative');
    } else if (value > available) {
      setError(`Exceeds available capacity (${available.toLocaleString()} units available)`);
    } else {
      setError('');
    }
  }, [amount, value, available]);

  const handleConfirm = () => {
    if (error || value < 0 || value > available) return;
    onConfirm(value, isBlocked);
  };

  if (!isOpen) return null;

  const isValid = !error && value >= 0 && value <= available;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[1000]"
      style={{ background: 'rgba(0, 0, 0, 0.5)' }}
      onClick={onClose}
    >
      <div
        className="bg-card rounded-[calc(var(--radius)+4px)] max-w-[700px] w-[90%] max-h-[90vh] overflow-y-auto"
        style={{ boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-border">
          <h2 className="mb-2">
            Allocate Units - {tenant} → {contract}
          </h2>
          <p style={{ color: 'var(--muted-foreground)' }}>
            Adjust allocation for {tenant} in {contract}
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="bg-muted rounded-[var(--radius)] p-4 mb-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="caption" style={{ color: 'var(--muted-foreground)', marginBottom: '4px' }}>
                  Contract Capacity
                </div>
                <h2>{contractCapacity.toLocaleString()} units</h2>
              </div>
              <div>
                <div className="caption" style={{ color: 'var(--muted-foreground)', marginBottom: '4px' }}>
                  Currently Allocated
                </div>
                <h2 style={{ color: 'var(--primary)' }}>{currentAllocation.toLocaleString()} units</h2>
              </div>
              <div>
                <div className="caption" style={{ color: 'var(--muted-foreground)', marginBottom: '4px' }}>
                  Total Contract Allocated
                </div>
                <h3>{totalContractAllocated.toLocaleString()} units</h3>
              </div>
              <div>
                <div className="caption" style={{ color: 'var(--muted-foreground)', marginBottom: '4px' }}>
                  Available for Allocation
                </div>
                <h3 style={{ color: 'var(--accent)' }}>{available.toLocaleString()} units</h3>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <label className="block mb-2">Allocation Amount (units)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter allocation amount"
              min="0"
              className="w-full px-3 py-3 bg-input-background border border-border rounded-[var(--radius)] outline-none focus:ring-2 focus:ring-ring"
            />
            {error && (
              <div className="caption mt-1" style={{ color: 'var(--destructive-foreground)' }}>
                {error}
              </div>
            )}
          </div>

          <div className="mb-5">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isBlocked}
                onChange={(e) => setIsBlocked(e.target.checked)}
                className="w-[18px] h-[18px]"
              />
              <span>🔒 Block overconsumption from org pool</span>
            </label>
            <div className="caption ml-[26px] mt-1" style={{ color: 'var(--muted-foreground)' }}>
              When checked, tenant cannot consume beyond allocated amount
            </div>
          </div>

          {diff !== 0 && isValid && (
            <div className="bg-accent/10 border border-accent/30 rounded-[var(--radius)] p-4">
              <div className="mb-2" style={{ color: 'var(--accent)', fontFamily: 'Noto Sans', fontWeight: 'var(--font-weight-semibold)' }}>
                Allocation Preview:
              </div>
              <div className="caption">
                <strong>{tenant}</strong> allocation in <strong>{contract}</strong>:
                <br />
                Current: {currentAllocation.toLocaleString()} units
                <br />
                New: {value.toLocaleString()} units ({diff > 0 ? `+${diff.toLocaleString()}` : diff.toLocaleString()}{' '}
                change)
                <br />
                Blocking: {isBlocked ? '🔒 Enabled (cannot overconsume)' : '🔓 Disabled (can use org pool)'}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-secondary text-secondary-foreground border border-border rounded-[var(--radius)] hover:bg-muted transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            disabled={!isValid}
            className="px-5 py-2.5 bg-primary text-primary-foreground rounded-[var(--radius)] hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <span>✅</span>
            <span>Apply Allocation</span>
          </button>
        </div>
      </div>
    </div>
  );
}
