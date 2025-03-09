"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"
import { Tangerine } from 'next/font/google';
import { cn } from '@/lib/utils';

type ToasterProps = React.ComponentProps<typeof Sonner>
const tangerine = Tangerine({
  weight: "400",
  subsets: ["latin"]
})
const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: cn(
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-foreground group-[.toaster]:text-[2rem] group-[.toaster]:border-primary group-[.toaster]:border-2 group-[.toaster]:shadow-lg",
            tangerine.className
          ),
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
