import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4 p-8 glass-card">
        <div className="relative">
          <div className="absolute inset-0 rounded-full blur-md bg-primary/30 animate-pulse"></div>
          <Loader2 className="w-12 h-12 text-primary animate-spin relative z-10" />
        </div>
        <div className="text-lg font-medium text-foreground/80 animate-pulse">
          Loading...
        </div>
      </div>
    </div>
  );
}
