import {Button} from "@/components/ui/button";
import React from 'react'

interface HeaderActionButtonProps {
    children?: React.ReactNode,
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined,
    className?: string,
    title: string
}

export default function HeaderActionButton({children, variant, className, title}: HeaderActionButtonProps) {
    return (
        <Button variant={variant} className={className}>
            {children}
            {title}
        </Button>
    )
}