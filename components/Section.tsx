export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-line py-16 sm:py-20">
      <h2 className="mb-10 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
        {title}
      </h2>
      {children}
    </section>
  );
}
