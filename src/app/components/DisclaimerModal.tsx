"use client";

import { useEffect, useState } from "react";

const acknowledgements = [
  "There has been no advertisement, personal communication, solicitation, invitation or inducement of any sort whatsoever from us or any of our members to solicit any work through this website.",
  "The user wishes to gain more information about us for his or her own information and use.",
  "The information about us is provided to the user only on his or her specific request and any information obtained or materials downloaded from this website is completely at the user&apos;s volition and any transmission, receipt or use of this website would not create any lawyer-client relationship.",
  "The information provided under this website is solely available at your request for information purpose only and should not be interpreted as soliciting or advertisement.",
];

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#061423]/70 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
    >
      <div className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-md border border-white/30 bg-[#f7f2e8] shadow-2xl">
        <div className="px-6 py-7 sm:px-10">
          <h2
            id="disclaimer-title"
            className="mb-6 text-center text-2xl font-semibold uppercase tracking-wide text-[#1f2933] sm:text-3xl"
          >
            Disclaimer &amp; Confirmation
          </h2>

          <div className="space-y-4 text-sm font-medium leading-relaxed text-black sm:text-[15px]">
            <p>
              As per the rules of the Bar Council of India, we are not permitted
              to solicit work and advertise. By clicking &ldquo;I Agree&rdquo;
              below, the user acknowledges the following:
            </p>

            <ul className="list-[square] space-y-3 pl-5">
              {acknowledgements.map((item) => (
                <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>

            <p>
              We are not liable for any consequence of any action taken by the
              user relying on material/information provided under this website.
              In cases where the user has any legal issues, he/she in all cases
              must seek independent legal advice, as the material contained in
              this document does not constitute/substitute professional advice
              that may be required before acting on any matter.
            </p>

            <p>
              Neither this website nor the web pages and the information
              contained herein constitute a contract, or will form the basis of
              a contract. While every care has been taken in preparing the
              content of this website and web pages to ensure accuracy at the
              time of publication and creation, Goel &amp; Associates assumes no
              responsibility for any errors, which despite all precautions may be
              found herein.
            </p>

            <p className="font-bold">
              All disputes, if any, are subject to the exclusive jurisdiction of
              courts at Dehradun, India only.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 border-t border-black/10 bg-[#f1ecdf] px-6 py-4 sm:px-10">
          <button
            type="button"
            className="rounded bg-slate-600 px-5 py-3 text-xs font-black uppercase tracking-wide text-white transition-colors hover:bg-slate-700"
            onClick={() => {
              window.history.back();
            }}
          >
            Disagree
          </button>
          <button
            type="button"
            className="rounded bg-[#003366] px-5 py-3 text-xs font-black uppercase tracking-wide text-white transition-colors hover:bg-[#062848]"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            I Agree
          </button>
        </div>
      </div>
    </div>
  );
}
