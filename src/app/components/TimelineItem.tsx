interface TimelineItemProps {
  jobTitle?: string;
  companyName?: string;
  dates?: string;
  jobDescription?: string;
  isLast: boolean;
}

const TimelineItem = ({
  jobTitle,
  companyName,
  dates,
  jobDescription,
  isLast,
}: TimelineItemProps) => {
  return (
    <div className="col-start-2 col-span-10 md:col-start-4 md:col-span-6 flex flex-col items-start pb-10 relative">
      {/* Vertical line */}
      <div className="absolute top-1 left-1 w-[0.5px] h-full bg-white -translate-x-1/2"></div>

      {/* Small circle */}
      <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-highlight translate-y-1"></div>
      <div className="absolute -top-1 -left-1 w-4 h-4 rounded-full bg-highlight blur-xs translate-y-1"></div>

      <div className="ml-8">
        {jobTitle && (
          <h4 className="font-semibold text-base leading-none text-start">
            {jobTitle}
          </h4>
        )}
        {companyName && (
          <p className="font-semibold text-highlight/95 mt-2">{companyName}</p>
        )}
        {dates && <p className="font-light mt-2 text-sm text-white/70">{dates}</p>}
        {jobDescription && <p className="font-normal mt-4 text-white/80 leading-relaxed">{jobDescription}</p>}
      </div>
      {isLast && (
        <div className="absolute -bottom-2 left-0.5 w-1 h-1 rounded-full bg-white -translate-y-1 "></div>
      )}
    </div>
  );
};

export default TimelineItem;
