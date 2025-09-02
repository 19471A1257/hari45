import React from "react";

/**
 * Hari EV — UX Case Study (React + Tailwind)
 * - Assumes Tailwind is set up globally.
 * - Uses your existing openCS('hari-ev-case-study.html') pattern for modal (optional).
 * - Replace image src paths with yours in /public/images or /images depending on your build.
 */
export default function HariEvCaseStudy() {
  const openCS = (url: string) => {
    // If your page defines window.openCS, use that; otherwise fallback to new tab
    // @ts-ignore
    if (typeof window !== "undefined" && typeof (window as any).openCS === "function") {
      // @ts-ignore
      (window as any).openCS(url);
    } else {
      window.open(url, "_blank");
    }
  };

  const Btn: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className = "", ...props }) => (
    <button
      className={
        "rounded-lg border border-yellow-400/70 px-4 py-2 font-semibold text-yellow-300 hover:bg-yellow-400/10 transition " +
        className
      }
      {...props}
    >
      {children}
    </button>
  );

  const LinkBtn: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({ children, className = "", ...props }) => (
    <a
      className={
        "rounded-lg border border-yellow-400/70 px-4 py-2 font-semibold text-yellow-300 hover:bg-yellow-400/10 transition " +
        className
      }
      {...props}
    >
      {children}
    </a>
  );

  return (
    <section
      id="hari-ev-case-study"
      className="rounded-xl border border-yellow-400/30 bg-white/5 p-6 shadow-[0_0_15px_rgba(253,216,53,0.15)]"
      style={{ borderLeft: "4px solid #fdd835" }}
    >
      <h2 className="mb-2 text-2xl font-semibold text-red-400">🚗 Hari EV Sector Platform — UX Case Study</h2>
      <p className="text-yellow-300/90">
        <strong>Role:</strong> UI/UX Designer &nbsp;|&nbsp; <strong>Duration:</strong> 4 Weeks &nbsp;|&nbsp;{" "}
        <strong>Tools:</strong> Figma, FigJam, Google Forms, Photoshop, Illustrator
      </p>

      <p className="mt-3 text-yellow-100/90">
        A mobile UX that helps EV owners quickly find compatible charging stations, plan reliable routes, and understand
        battery health—reducing range anxiety and decision friction.
      </p>

      {/* Chips */}
      <div className="mt-4 flex flex-wrap gap-2">
        {["Mobile UX", "Design System", "Usability Testing", "Information Architecture"].map((c) => (
          <span
            key={c}
            className="rounded-full border border-yellow-400/30 bg-black/40 px-3 py-1 text-xs text-blue-100/90"
          >
            {c}
          </span>
        ))}
      </div>

      {/* Preview Grid */}
      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <img src="/images/low-fi.png" alt="Low Fidelity" className="h-44 w-full rounded-lg object-cover opacity-90" loading="lazy" />
        <img src="/images/hi-fi-1.png" alt="High Fidelity 1" className="h-44 w-full rounded-lg object-cover opacity-90" loading="lazy" />
        <img src="/images/hi-fi-2.png" alt="High Fidelity 2" className="h-44 w-full rounded-lg object-cover opacity-90" loading="lazy" />
      </div>

      {/* Actions */}
      <div className="mt-4 flex flex-wrap gap-3">
        <Btn onClick={() => openCS("/hari-ev-case-study.html")}>🔎 View live case study</Btn>
        <LinkBtn href="/hari-ev-case-study.html" target="_blank">↗ Open full page</LinkBtn>
        <LinkBtn href="/Hari-EV-Case-Study.pdf" download>📄 Download PDF</LinkBtn>
      </div>

      {/* Highlights */}
      <div className="mt-6">
        <h3 className="mb-2 text-lg font-semibold text-red-400">Highlights</h3>
        <ul className="ml-5 list-disc text-yellow-100/90">
          <li>Charging station discovery with compatibility filters</li>
          <li>Clear battery health messaging and guidance</li>
          <li>IA that prioritizes “find stations”, “battery status”, “navigate”</li>
        </ul>
      </div>
    </section>
  );
}
