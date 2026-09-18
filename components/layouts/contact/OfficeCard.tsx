import type { Office, OfficeCardProps } from "@/types/contact.types";

const flagClassNames: Record<string, string> = {
  indiaFlag:
    "bg-[linear-gradient(to_bottom,#ff9933_0_33.33%,#fff_33.33%_66.66%,#138808_66.66%_100%)]",
  usaFlag:
    "bg-[repeating-linear-gradient(to_bottom,#b22234_0_2px,#fff_2px_4px)]",
  singaporeFlag: "bg-[linear-gradient(to_bottom,#ef3340_0_50%,#fff_50%_100%)]",
};

export default function OfficeCard({ office }: OfficeCardProps) {
  return (
    <article className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span
          className={`inline-flex h-5.5 w-8 overflow-hidden rounded-sm border border-[#e7e7e7] ${flagClassNames[office.flag]}`}
          aria-hidden="true"
        />

        <h2 className="m-0 text-[1rem] font-semibold tracking-[0.3px] text-[#111]">
          {office.country}
        </h2>
      </div>

      <address className="flex flex-col gap-0.5 text-[17px] leading-5 text-black not-italic">
        {office.lines.map((line: string) => (
          <span key={line}>{line}</span>
        ))}
      </address>
    </article>
  );
}

