import {clsx, type ClassValue} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function camelCaseToCapitalizedWords(input: string): string {
    return input
        .replace(/([a-z0-9])([A-Z])/g, "$1 $2") // Add space between camelCase words
        .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2") // Handle cases like "JSONParser"
        .replace(/^./, (char) => char.toUpperCase()); // Capitalize the first letter
}

export function isActiveConverter(input: boolean): string {
    return input ? "Active" : "Inactive"
}