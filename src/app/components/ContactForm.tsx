"use client";

import { FormEvent, useState } from "react";
import { ChevronRight } from "lucide-react";

type SubmitState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("sending");
    setFeedback("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Unable to send message.");
      }

      form.reset();
      setSubmitState("success");
      setFeedback("Your message has been sent. We will get back to you shortly.");
    } catch (error) {
      setSubmitState("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Unable to send message. Please try again."
      );
    }
  }

  const isSending = submitState === "sending";

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="contact-name"
          className="block text-[10px] uppercase tracking-[0.2em] font-black mb-2 text-slate-400"
        >
          Full Name *
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          className="w-full bg-slate-50 border-b-2 border-slate-200 px-3 py-3 focus:outline-none focus:border-[#003366] transition-colors text-slate-900 text-sm"
          placeholder="Your full name"
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="contact-email"
            className="block text-[10px] uppercase tracking-[0.2em] font-black mb-2 text-slate-400"
          >
            Email *
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            className="w-full bg-slate-50 border-b-2 border-slate-200 px-3 py-3 focus:outline-none focus:border-[#003366] transition-colors text-slate-900 text-sm"
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label
            htmlFor="contact-phone"
            className="block text-[10px] uppercase tracking-[0.2em] font-black mb-2 text-slate-400"
          >
            Phone
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            className="w-full bg-slate-50 border-b-2 border-slate-200 px-3 py-3 focus:outline-none focus:border-[#003366] transition-colors text-slate-900 text-sm"
            placeholder="+91 ..."
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="contact-subject"
          className="block text-[10px] uppercase tracking-[0.2em] font-black mb-2 text-slate-400"
        >
          Subject *
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          className="w-full bg-slate-50 border-b-2 border-slate-200 px-3 py-3 focus:outline-none focus:border-[#003366] transition-colors text-slate-900 text-sm"
          placeholder="e.g. GST Compliance, Tax Audit..."
        />
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="block text-[10px] uppercase tracking-[0.2em] font-black mb-2 text-slate-400"
        >
          Message *
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          className="w-full bg-slate-50 border-b-2 border-slate-200 px-3 py-3 focus:outline-none focus:border-[#003366] transition-colors resize-none text-slate-900 text-sm"
          placeholder="Briefly describe your tax matter..."
        />
      </div>

      {feedback ? (
        <p
          className={`text-sm font-semibold ${
            submitState === "success" ? "text-emerald-700" : "text-red-600"
          }`}
          role="status"
        >
          {feedback}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSending}
        className="w-full bg-[#003366] hover:bg-[#00284f] disabled:cursor-not-allowed disabled:bg-slate-400 text-white py-4 font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 transition-all shadow-lg shadow-[#003366]/20"
      >
        {isSending ? "Sending..." : "Send Message"} <ChevronRight size={16} />
      </button>
    </form>
  );
}
