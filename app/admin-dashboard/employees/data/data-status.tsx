import {Ban, CheckCircle, CircleCheck, CircleDashed, CircleOff} from "lucide-react";

export const isActive = [
    {
        value: true,
        label: "Active",
        icon: CheckCircle
    },
    {
        value: false,
        label: "Inactive",
        icon: CircleOff
    }
]

export const loanStatus = [
    {
        value: "Pending",
        label: "Pending",
        icon: CircleDashed
    },
    {
        value: "Approved",
        label: "Approved",
        icon: CircleCheck
    },
    {
        value: "Rejected",
        label: "Rejected",
        icon: Ban
    }
]