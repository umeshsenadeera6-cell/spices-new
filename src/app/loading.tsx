import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/80 backdrop-blur-md">
      <div className="relative flex flex-col items-center">
        {/* Animated Background Pulse */}
        <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl w-48 h-48 -translate-y-8 animate-pulse" />

        {/* Logo */}
        <div className="relative z-10 mb-6 opacity-80">
          <Image
            src="/logo.png"
            alt="Serendib"
            width={200}
            height={70}
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Loading Spinner / Bar */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
        </div>
        
        <p className="mt-4 text-xs font-semibold tracking-widest text-emerald-900/40 uppercase">
          Loading
        </p>
      </div>
    </div>
  );
}
