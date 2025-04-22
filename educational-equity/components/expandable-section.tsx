"use client"

import { type ReactNode, useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ExpandableSectionProps {
  title: string
  children: ReactNode
  defaultExpanded?: boolean
}

export function ExpandableSection({ title, children, defaultExpanded = false }: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  return (
    <div className="border rounded-lg overflow-hidden mb-6">
      <Button
        variant="ghost"
        className="w-full flex justify-between items-center p-4 text-left"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="font-medium text-lg">{title}</span>
        {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </Button>
      {isExpanded && <div className="p-4 pt-0 border-t">{children}</div>}
    </div>
  )
}
