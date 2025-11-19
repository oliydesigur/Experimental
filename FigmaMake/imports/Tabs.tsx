function Tab() {
  return (
    <div className="box-border content-stretch flex flex-col items-start px-[16px] py-[10px] relative shrink-0" data-name="tab 1">
      <p className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#273139] text-[16px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Dashboard
      </p>
    </div>
  );
}

function Tab1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start px-[16px] py-[10px] relative shrink-0" data-name="tab 2">
      <p className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#273139] text-[16px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Design
      </p>
    </div>
  );
}

function Tab2() {
  return (
    <div className="box-border content-stretch flex flex-col items-start px-[16px] py-[10px] relative shrink-0" data-name="tab 3">
      <p className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#273139] text-[16px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Runtime
      </p>
    </div>
  );
}

function Tab3() {
  return (
    <div className="box-border content-stretch flex flex-col items-start px-[16px] py-[10px] relative shrink-0" data-name="tab 4">
      <div aria-hidden="true" className="absolute border-[#0067df] border-[0px_0px_4px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0067df] text-[16px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Feedback
      </p>
    </div>
  );
}

function Tab4() {
  return (
    <div className="box-border content-stretch flex flex-col items-start px-[16px] py-[10px] relative shrink-0" data-name="tab 5">
      <p className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#273139] text-[16px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Memory
      </p>
    </div>
  );
}

export default function Tabs() {
  return (
    <div className="content-stretch flex items-start relative size-full" data-name="Tabs">
      <Tab />
      <Tab1 />
      <Tab2 />
      <Tab3 />
      <Tab4 />
    </div>
  );
}