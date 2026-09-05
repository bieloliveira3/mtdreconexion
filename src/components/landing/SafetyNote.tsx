export function SafetyNote() {
  return (
    <div className="bg-surface px-5 py-6 sm:px-8 sm:py-8">
      <div className="mx-auto max-w-3xl rounded-xl border border-border bg-card px-6 py-5">
        <h2 className="text-[1.125rem] leading-[1.3] font-semibold tracking-[-0.01em] text-primary-dark sm:text-[1.25rem]">
          Una nota importante antes de comprar
        </h2>
        <div className="mt-3 grid gap-3 text-[0.9375rem] leading-[1.6] text-muted-foreground">
          <p>
            Este material no está pensado para relaciones donde hay violencia física, amenazas,
            control sobre tu dinero, tus salidas o tus vínculos, o donde sientes miedo de la otra
            persona. En esas situaciones no hay ejercicio de comunicación que sirva, y buscar la
            conversación puede ponerte en riesgo.
          </p>
          <p>
            Si es tu caso, la prioridad es tu seguridad. Busca apoyo profesional o una línea de
            atención de tu país.
          </p>
          <p>
            En Colombia: <strong className="font-semibold text-foreground">Línea 155</strong>,
            orientación a mujeres víctimas de violencia, 24 horas, gratuita. Si hay peligro
            inmediato: <strong className="font-semibold text-foreground">123</strong>.
          </p>
          <p>
            En México: <strong className="font-semibold text-foreground">911</strong> para
            emergencias.{" "}
            <strong className="font-semibold text-foreground">
              Línea Sin Violencia 800 108 4053
            </strong>
            , 24 horas, gratuita y confidencial.
          </p>
          <p>
            Y si estás pasando por algo que te supera, esto tampoco reemplaza atención psicológica.
            Si puedes buscarla, búscala.
          </p>
        </div>
      </div>
    </div>
  );
}
