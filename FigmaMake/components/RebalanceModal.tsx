interface RebalanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: () => void;
}

export function RebalanceModal({ isOpen, onClose, onApply }: RebalanceModalProps) {
  if (!isOpen) return null;

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
          <h2 className="mb-2">Allocation Planning Assistant</h2>
          <p style={{ color: 'var(--muted-foreground)' }}>Optimize allocations across bundle intervals</p>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="mb-3" style={{ color: 'var(--primary)' }}>
            📊 Current Status:
          </h3>
          <div className="border-2 border-primary rounded-[var(--radius)] p-4 mb-5" style={{ background: 'var(--primary)/10' }}>
            <div className="bg-muted rounded-[var(--radius)] p-4">
              <div className="flex justify-between py-2 border-b border-border">
                <span>Bundle Interval 1 (Active):</span>
                <strong>42,000 / 50,000 allocated (84%)</strong>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span>Bundle Interval 2 (Future):</span>
                <strong>18,000 / 30,000 planned (60%)</strong>
              </div>
              <div className="flex justify-between py-2 pt-3" style={{ color: 'var(--accent)' }}>
                <span>Remaining Pool:</span>
                <strong>8,000 units available</strong>
              </div>
            </div>
            <div className="mt-3">✅ All allocations are healthy and within limits</div>
          </div>

          <div className="bg-accent/10 border border-accent/30 rounded-[var(--radius)] p-4">
            <div className="mb-3" style={{ color: 'var(--accent)', fontFamily: 'Noto Sans', fontWeight: 'var(--font-weight-semibold)' }}>
              💡 Planning Recommendations
            </div>
            <div className="caption mb-3" style={{ color: 'var(--foreground)' }}>
              Consider these optimizations for better resource utilization:
            </div>

            <h4 className="my-4">Marketing (High Usage):</h4>
            <div className="ml-4 caption mb-4">
              Current: 10K allocated, 9.2K consumed (92% usage)
              <br />
              <strong>Recommendation: Consider increasing allocation by 2K for Bundle Interval 2</strong>
              <br />
              <span style={{ color: 'var(--muted-foreground)' }}>⚠️ High utilization may lead to bottlenecks</span>
            </div>

            <h4 className="my-4">Operations (Low Planning):</h4>
            <div className="ml-4 caption mb-4">
              Current: 3K in Bundle 1, none planned for Bundle 2
              <br />
              <strong>Recommendation: Plan 2K for Bundle Interval 2 based on current usage patterns</strong>
            </div>

            <h4 className="my-4">Sales (Low Planning):</h4>
            <div className="ml-4 caption mb-4">
              Current: 2K in Bundle 1, none planned for Bundle 2
              <br />
              <strong>Recommendation: Plan 2K for Bundle Interval 2</strong>
            </div>
          </div>

          <h3 className="my-5">📅 Bundle Interval 2 Planning</h3>
          <div className="p-3 bg-accent/10 border border-accent/30 rounded-[calc(var(--radius)-1px)]">
            <strong>Available Capacity:</strong> 12,000 units remaining for allocation in Bundle Interval 2
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-secondary text-secondary-foreground border border-border rounded-[var(--radius)] hover:bg-muted transition-colors"
          >
            Close
          </button>
          <button
            onClick={onApply}
            className="px-5 py-2.5 bg-primary text-primary-foreground rounded-[var(--radius)] hover:opacity-90 transition-all flex items-center gap-2"
          >
            <span>✨</span>
            <span>Apply Recommendations</span>
          </button>
        </div>
      </div>
    </div>
  );
}
