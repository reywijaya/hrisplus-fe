import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import React from "react";

interface CardHeaderInfoProps {
    children?: React.ReactNode,
    title: string,
    content: string,
    additionalInfo?: string
}

export default function CardHeaderInfo ({children, title, content, additionalInfo}: CardHeaderInfoProps) {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-neutral-500">
                <div className="flex justify-between items-center">
                    {title}
                    {children}
                </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between items-center">
                    <h2 className="font-bold text-2xl">{content}</h2>
                    <p className="text-neutral-300">{additionalInfo}</p>
                </div>
            </CardContent>
        </Card>
    )
}