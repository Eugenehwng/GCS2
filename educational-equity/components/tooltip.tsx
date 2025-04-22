"use client"

import type { ReactNode } from "react"
import { Tooltip as TooltipPrimitive, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface TooltipProps {
  children: ReactNode
  content: string
}

export function Tooltip({ children, content }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipPrimitive>
        <TooltipTrigger asChild>
          <span className="underline decoration-dotted cursor-help">{children}</span>
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-xs">{content}</p>
        </TooltipContent>
      </TooltipPrimitive>
    </TooltipProvider>
  )
}
