export function BackgroundDecorations() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Bolla azzurra in alto a sinistra */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-200 blur-[120px]" />

      {/* Bolla blu al centro/destra */}
      <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] rounded-full bg-sky-300 blur-[100px]" />

      {/* Bolla ciano in basso */}
      <div className="absolute bottom-[-10%] left-[20%] w-[35%] h-[35%] rounded-full bg-cyan-100 blur-[80px]" />
    </div>
  );
}