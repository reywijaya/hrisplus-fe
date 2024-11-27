import {Card, CardContent, CardDescription, CardHeader} from "@/components/ui/card";
import React from "react";

interface CardHeaderInfoProps {
    children?: React.ReactNode,
    title: string,
    content: string,
    additionalInfo?: string
}

export default function CardHeaderInfo({children, title, content, additionalInfo}: CardHeaderInfoProps) {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardDescription>
                    <div className="flex justify-between items-center">
                        {title}
                        {children}
                    </div>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between items-center">
                    <h2 className="font-bold text-2xl truncate">{content}</h2>
                    <p className="text-neutral-400 truncate">{additionalInfo}</p>
                </div>
            </CardContent>
        </Card>
    )
}