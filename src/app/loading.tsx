export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#F7F8F8]">
      <div className="relative w-12 h-12 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-2 border-[#C6C2C1] border-t-[#C86A28] animate-spin" />
        <div className="absolute w-4 h-4 rounded-full bg-[#151515]" />
      </div>
      <p className="mt-4 text-xs font-bold text-[#544643] tracking-widest uppercase">
        Loading Pep Software...
      </p>
    </div>
  );
}
