import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import {ChevronDown, Slash} from "lucide-react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";

//todo: it should be dynamic
export default function BreadcrumbSection() {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink asChild>
                        <Link href="/admin-dashboard">Dashboard</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block">
                    <Slash className="h-4 w-4"/>
                </BreadcrumbSeparator>
                <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center gap-1">
                                Master Employee
                                <ChevronDown className="h-4 w-4"/>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start">
                                {/*todo add link*/}
                                <DropdownMenuItem>All Employees</DropdownMenuItem>
                                <DropdownMenuItem>Inactive Employees</DropdownMenuItem>
                                <DropdownMenuItem>Active Employees</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block">
                    <Slash className="h-4 w-4"/>
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <BreadcrumbPage>All employees</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}