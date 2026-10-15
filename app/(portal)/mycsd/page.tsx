export default function MyCsdPage() {
  return (
    <section className="flex min-h-[560px] flex-col rounded border border-zinc-200 bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-4 flex items-center justify-between border-b border-zinc-200 pb-3">
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-semibold text-usm-header">MyCSD</h1>
          <span className="rounded border border-usm-header/30 bg-usm-lilac px-2 py-0.5 text-xs text-usm-header">
            Active Service
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center rounded-md border-2 border-dashed border-usm-header/30 bg-zinc-50 p-8 text-center">
        <h2 className="text-xl font-bold text-usm-header">MyCSD</h2>
        <p className="mt-1 text-sm text-zinc-500">
          Placeholder for the MyCSD portal home.
        </p>
      </div>
    </section>
  );
}
