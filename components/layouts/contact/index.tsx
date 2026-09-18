"use client";

import ContactForm from "@/components/layouts/contact/ContactForm";
import ContactHero from "@/components/layouts/contact/ContactHero";
import OfficeList from "@/components/layouts/contact/OfficeList";
import BrandGrid from "@/components/layouts/home/BrandGrid";
import { OFFICES } from "@/utils/generic-data";

export default function ContactPage() {
  return (
    <div className="w-full overflow-hidden">
      <ContactHero />

      <section
        className="min-h-screen grid grid-cols-1 gap-20 bg-[#F9F9F9] px-6 py-24 md:px-10 md:py-32 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-24 lg:px-20 lg:py-40"
        id="contact"
      >
        <OfficeList offices={OFFICES} />

        <ContactForm />
      </section>

      <BrandGrid />
    </div>
  );
}

