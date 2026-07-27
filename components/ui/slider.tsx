"use client"

import * as React from "react"
import type { CSSProperties } from "react"
import { Slider as SliderPrimitive } from "@base-ui/react/slider"

import { cn } from "@/lib/utils"

function Slider({
  className,
  spinThumb = false,
  shakeThumbLevel = 0,
  value,
  defaultValue,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root> & {
  spinThumb?: boolean
  shakeThumbLevel?: 0 | 1 | 2 | 3 | 4
}) {
  const [isThumbHeld, setIsThumbHeld] = React.useState(false)
  const shakeDistance = [0, 0.5, 1, 1.5, 2.5][shakeThumbLevel]
  const shakeRotation = [0, 2, 4, 7, 12][shakeThumbLevel]
  const shakeDuration = [0, 220, 180, 145, 110][shakeThumbLevel]
  const thumbImageStyle = {
    "--slider-logo-shake-distance": `${shakeDistance}px`,
    "--slider-logo-shake-rotation": `${shakeRotation}deg`,
    "--slider-logo-shake-duration": `${shakeDuration}ms`,
  } as CSSProperties
  const values = React.useMemo(() => {
    if (Array.isArray(value)) {
      return value
    }

    if (Array.isArray(defaultValue)) {
      return defaultValue
    }

    return [props.min ?? 0]
  }, [defaultValue, props.min, value])

  React.useEffect(() => {
    if (!isThumbHeld) {
      return
    }

    const releaseThumb = () => {
      setIsThumbHeld(false)
    }

    window.addEventListener("pointerup", releaseThumb)
    window.addEventListener("pointercancel", releaseThumb)

    return () => {
      window.removeEventListener("pointerup", releaseThumb)
      window.removeEventListener("pointercancel", releaseThumb)
    }
  }, [isThumbHeld])

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      className={cn(
        "relative flex w-full touch-none select-none items-center data-[disabled]:opacity-50",
        className
      )}
      value={value}
      defaultValue={defaultValue}
      {...props}
    >
      <SliderPrimitive.Control
        data-slot="slider-control"
        className="relative flex h-5 w-full items-center"
      >
        <SliderPrimitive.Track
          data-slot="slider-track"
          className="relative h-2 w-full grow overflow-hidden rounded-full bg-primary-foreground/30"
        >
          <SliderPrimitive.Indicator
            data-slot="slider-indicator"
            className="absolute h-full bg-primary-foreground"
          />
        </SliderPrimitive.Track>
        {values.map((_, index) => (
          <SliderPrimitive.Thumb
            key={index}
            data-slot="slider-thumb"
            index={index}
            onPointerDown={() => {
              setIsThumbHeld(true)
            }}
            className="slider-logo-thumb block size-9 cursor-grab rounded-full border-2 border-primary-foreground bg-primary text-primary-foreground shadow-sm transition-transform active:cursor-grabbing focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/70 disabled:pointer-events-none disabled:opacity-50"
          >
            <span
              aria-hidden="true"
              className={cn(
                "slider-logo-thumb-image block size-full",
                isThumbHeld && spinThumb && "slider-logo-thumb-image-spin",
                isThumbHeld && shakeThumbLevel > 0 && "slider-logo-thumb-image-shake",
              )}
              style={thumbImageStyle}
            />
          </SliderPrimitive.Thumb>
        ))}
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  )
}

export { Slider }
