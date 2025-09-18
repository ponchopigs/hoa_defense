export function MailingListForm() {
  return (
    <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold tracking-tight text-slate-900">
          Join the Deck Defense newsletter
        </h3>
        <p className="text-sm text-slate-600">
          Plug into coalition updates, legal toolkits, and urgent meeting alerts. The form below connects automatically to our email platform.
        </p>
      </div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-3">
        <iframe
          title="Deck Defense email subscription"
          src="https://79dc596b.sibforms.com/serve/MUIFAJauWTDVYgJA6ITkjMzGhezpVlll6i67bwL67wSL82HWlTIykatxqqMGyRHf0uFxh2WIvcuztCmIOTszwAsSn6qdiBJTHBgwCJCjZIWfufAe-B49HgZigcWDtA-3r6IZQafvWTRuZ6hUMXt0KYERxUUVYsh1dEwRQdMmjDBvFOs2xSj6UJzWFdTBRyQs2UjRWsH_yxu3qB7h"
          width="100%"
          height="680"
          className="mx-auto block max-w-full"
          style={{ border: "0" }}
          loading="lazy"
          allowFullScreen
        />
      </div>
      <p className="text-xs text-slate-500">
        Trouble with the embedded form? Open it in a new tab:{" "}
        <a
          href="https://79dc596b.sibforms.com/serve/MUIFAJauWTDVYgJA6ITkjMzGhezpVlll6i67bwL67wSL82HWlTIykatxqqMGyRHf0uFxh2WIvcuztCmIOTszwAsSn6qdiBJTHBgwCJCjZIWfufAe-B49HgZigcWDtA-3r6IZQafvWTRuZ6hUMXt0KYERxUUVYsh1dEwRQdMmjDBvFOs2xSj6UJzWFdTBRyQs2UjRWsH_yxu3qB7h"
          className="font-medium text-emerald-700 hover:text-emerald-600"
          target="_blank"
          rel="noreferrer"
        >
          deck defense signup
        </a>
        .
      </p>
    </div>
  );
}
