"use client";

import { useMemo, useState } from "react";

const RECIPIENT = "natalie@treoproperties.com";
const SUBJECT = "Independence Avenue deck repair responsibility";

export function EmailTreoCta() {
  const [name, setName] = useState("");
  const [unit, setUnit] = useState("");

  const emailLink = useMemo(() => {
    const trimmedName = name.trim();
    if (!trimmedName) {
      return "";
    }

    const trimmedUnit = unit.trim();
    const ownerLine = trimmedUnit ? `, owner of ${trimmedUnit}` : "";
    const closingLine = trimmedUnit
      ? `Thank you,\n${trimmedName}\n${trimmedUnit}`
      : `Thank you,\n${trimmedName}`;
    const body = `Hi Natalie,\n\nMy name is ${trimmedName}${ownerLine}. I am writing about the deck replacement project at Independence Avenue. The defects were documented while the CC&Rs placed maintenance and replacement on the Association, and Utah’s anti-retroactivity rules mean the HOA cannot transfer those costs after the fact.\n\nPlease confirm the board will fund this repair under the existing allocation and keep any Unique Feature Special Assessment prospective only. I would welcome a written response before the October 16 vote.\n\n${closingLine}`;

    const mailto = new URL(`mailto:${RECIPIENT}`);
    mailto.searchParams.set("subject", SUBJECT);
    mailto.searchParams.set("body", body);
    return mailto.toString();
  }, [name, unit]);

  function handleClick() {
    if (!emailLink) {
      return;
    }
    window.location.href = emailLink;
  }

  return (
    <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Email Treo management</h3>
          <p className="text-sm text-slate-600">
            Send Natalie at Treo a quick confirmation request about keeping the deck repairs under the existing CC&Rs.
          </p>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-[minmax(0,260px)_auto] sm:items-center">
        <label className="text-sm font-medium text-slate-700" htmlFor="sender-name">
          Your name for the email
        </label>
        <input
          id="sender-name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Jane Smith"
          className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
          autoComplete="name"
        />
      </div>
      <div className="grid gap-3 sm:grid-cols-[minmax(0,260px)_auto] sm:items-center">
        <label className="text-sm font-medium text-slate-700" htmlFor="sender-unit">
          Unit (optional)
        </label>
        <input
          id="sender-unit"
          type="text"
          value={unit}
          onChange={(event) => setUnit(event.target.value)}
          placeholder="Unit 104"
          className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
          autoComplete="off"
        />
      </div>
      <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-sm text-slate-600">
        <p className="font-medium text-slate-700">Email preview</p>
        <p className="mt-3 whitespace-pre-line">
          {(() => {
            const trimmedName = name.trim() || "Concerned homeowner";
            const trimmedUnit = unit.trim();
            const ownerLine = trimmedUnit ? `, owner of ${trimmedUnit}` : "";
            const closingLine = trimmedUnit ? `Thank you,\n${trimmedName}\n${trimmedUnit}` : `Thank you,\n${trimmedName}`;
            return `Hi Natalie,\n\nMy name is ${trimmedName}${ownerLine}. I am writing about the deck replacement project at Independence Avenue. The defects were documented while the CC&Rs placed maintenance and replacement on the Association, and Utah’s anti-retroactivity rules mean the HOA cannot transfer those costs after the fact.\n\nPlease confirm the board will fund this repair under the existing allocation and keep any Unique Feature Special Assessment prospective only. I would welcome a written response before the October 16 vote.\n\n${closingLine}`;
          })()}
        </p>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={handleClick}
          disabled={!name.trim()}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          Open email draft
        </button>
        <p className="text-xs text-slate-500">
          The button opens your default mail app with the message to {RECIPIENT}. Edit the draft before sending.
        </p>
      </div>
    </div>
  );
}
