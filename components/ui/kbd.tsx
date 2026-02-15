import * as React from "react";

import { cn } from "@/lib/utils";

function Kbd({
  className,
  ...props
}: React.ComponentProps<"kbd">) {
  return (
    <kbd
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-6 items-center justify-center gap-1 rounded-sm border px-2 text-xs font-medium",
        className,
      )}
      {...props}
    />
  );
}

export { Kbd };
