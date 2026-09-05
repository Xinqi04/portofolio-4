import LocalizedText from './LocalizedText';

export default function FrontendDemoNote() {
  return (
    <aside className="mb-6 border-l-[3px] border-amber-300 bg-amber-300/10 p-4 text-sm leading-relaxed text-amber-100">
      <p className="mb-1 font-bold uppercase tracking-wide text-amber-300">
        <LocalizedText id="Catatan demo" en="Demo note" />
      </p>
      <p>
        <LocalizedText
          id="Demo di Vercel hanya menjalankan frontend (tampilan antarmuka). Karena keterbatasan database, fitur yang memerlukan akses database belum dapat digunakan lebih lanjut."
          en="The Vercel demo only runs the frontend (user interface). Due to database limitations, features that require database access are currently unavailable."
        />
      </p>
    </aside>
  );
}
