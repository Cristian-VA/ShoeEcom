// @ts-nocheck
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2  w-full overflow-hidden  bg-gray-100",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={value >= 100? "h-full w-full  bg-sky-400 transition-all": "h-full w-full  bg-emerald-400 transition-all"}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
