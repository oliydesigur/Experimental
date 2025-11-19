import svgPaths from "./svg-3y2ls2g7zq";

function Small() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative rounded-[12px] shrink-0" data-name="small">
      <p className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#273139] text-[10px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Conversational
      </p>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#f4f5f7] box-border content-stretch flex gap-[8px] items-center justify-center px-[8px] py-0 relative rounded-[8px] shrink-0" data-name="Badge">
      <Small />
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Badge />
    </div>
  );
}

function AttentionBadge() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Attention badge">
      <div className="absolute bg-[#cc3d45] left-1/2 rounded-[33px] size-[12px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="notification dot" />
    </div>
  );
}

function Status() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center relative rounded-[3px] shrink-0" data-name="Status">
      <AttentionBadge />
      <div className="flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#273139] text-[14px] text-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[20px] overflow-ellipsis overflow-hidden whitespace-pre">Degraded</p>
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Status bar">
      <Frame />
      <Status />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-start justify-center max-w-[383px] relative shrink-0" data-name="Title">
      <div className="flex flex-col font-['Noto_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] max-h-[40px] max-w-[335px] overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-black text-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[24px] overflow-ellipsis overflow-hidden whitespace-pre">Claims Specialist</p>
      </div>
    </div>
  );
}

function Subtitle() {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-center max-w-[383px] relative shrink-0" data-name="Subtitle">
      <p className="basis-0 font-['Noto_Sans:Regular',sans-serif] font-normal grow leading-[20px] max-h-[40px] max-w-[335px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#526069] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Handles customer inquiries and provides support across multiple channels.
      </p>
    </div>
  );
}

function Titles() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Titles">
      <Title />
      <Subtitle />
    </div>
  );
}

function TitleBar() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Title bar">
      <Titles />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Header">
      <StatusBar />
      <TitleBar />
    </div>
  );
}

function AssignmentTurnedIn24Px() {
  return (
    <div className="[grid-area:1_/_1] aspect-[24/24] ml-[8px] mt-[10px] relative w-[16px]" data-name="assignment_turned_in_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="assignment_turned_in_24px">
          <path d={svgPaths.p79bf100} fill="var(--fill-0, #526069)" id="icon/action/assignment_turned_in_24px" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['Noto_Sans:Regular',sans-serif] font-normal leading-[16px] ml-[48px] mt-0 relative text-[#526069] text-[12px] w-[97px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Success rate
      </p>
      <p className="[grid-area:1_/_1] font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[20px] ml-[47.75px] mt-[16px] relative text-[#273139] text-[14px] w-[224px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        72.3%
      </p>
      <div className="[grid-area:1_/_1] bg-[#f4f5f7] ml-0 mt-[2px] rounded-[4px] size-[32px]" />
      <AssignmentTurnedIn24Px />
    </div>
  );
}

function AccessTime24Px() {
  return (
    <div className="[grid-area:1_/_1] aspect-[24/24] ml-[8px] mt-[10px] relative w-[16px]" data-name="access_time_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="access_time_24px">
          <path d={svgPaths.p17ed3000} fill="var(--fill-0, #526069)" id="icon/device/access_time_24px" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['Noto_Sans:Regular',sans-serif] font-normal leading-[16px] ml-[48px] mt-0 relative text-[#526069] text-[12px] w-[132px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Average response time
      </p>
      <p className="[grid-area:1_/_1] font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[20px] ml-[48px] mt-[16px] relative text-[#273139] text-[14px] w-[107px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        21 mins, 3 secs
      </p>
      <div className="[grid-area:1_/_1] bg-[#f4f5f7] ml-0 mt-[2px] rounded-[4px] size-[32px]" />
      <AccessTime24Px />
    </div>
  );
}

function Feedback() {
  return (
    <div className="[grid-area:1_/_1] aspect-[24/24] ml-[8px] mt-[10px] relative w-[16px]" data-name="feedback">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="feedback">
          <path d={svgPaths.paf3ac80} fill="var(--fill-0, #526069)" id="icon/maps/rate_review_24px" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['Noto_Sans:Regular',sans-serif] font-normal leading-[16px] ml-[48px] mt-0 relative text-[#526069] text-[12px] w-[97px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Feedback
      </p>
      <p className="[grid-area:1_/_1] font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[20px] ml-[47.75px] mt-[16px] relative text-[#273139] text-[14px] w-[224px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        21 reviews
      </p>
      <div className="[grid-area:1_/_1] bg-[#f4f5f7] ml-0 mt-[2px] rounded-[4px] size-[32px]" />
      <Feedback />
    </div>
  );
}

function ContentPlaceHolder() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0 w-full" data-name="Content place holder">
      <Group />
      <Group1 />
      <Group2 />
    </div>
  );
}

function ContentArea() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content area">
      <ContentPlaceHolder />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#526069] text-[12px] text-center text-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">Updated 2 hours ago</p>
      </div>
    </div>
  );
}

function ConstructorButton() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-0 relative rounded-[12px] shrink-0" data-name=".Constructor Button">
      <p className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0067df] text-[14px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Fix
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[8px] py-[10px] relative rounded-[3px] shrink-0" data-name="Button">
      <ConstructorButton />
    </div>
  );
}

function InformationBar() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Information bar">
      <Container />
      <Button />
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#cfd8dd] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start p-[16px] relative size-full">
          <Header />
          <ContentArea />
          <InformationBar />
        </div>
      </div>
    </div>
  );
}