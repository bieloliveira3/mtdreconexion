export function SafetyNote() {
  return (
    <div className="px-5 pb-4 sm:px-8">
      <div className="mx-auto max-w-3xl rounded-xl border border-border bg-surface px-6 py-5">
        <p className="eyebrow text-primary">Una nota importante</p>
        <p className="mt-2 text-[0.88rem] leading-relaxed text-muted-foreground">
          Este material no está diseñado para relaciones donde existe violencia física, control
          coercitivo, amenazas o miedo. En esas situaciones, la prioridad es la seguridad y el apoyo
          profesional.
        </p>
      </div>
    </div>
  );
}
