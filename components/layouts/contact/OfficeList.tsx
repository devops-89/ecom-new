import type { Office, OfficeListProps } from "@/types/contact.types";

import OfficeCard from "./OfficeCard";

export default function OfficeList({
  offices,
}: OfficeListProps) {
  return (
    <aside data-aos="fade-up" className="flex flex-col gap-14 self-start lg:sticky lg:top-28">
      {offices.map((office) => (
        <OfficeCard
          key={office.country}
          office={office}
        />
      ))}
    </aside>
  );
}
