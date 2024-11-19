import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {SidebarInset, SidebarTrigger} from "@/components/ui/sidebar";
import {Separator} from "@/components/ui/separator";
import {
    Breadcrumb,
    BreadcrumbItem, BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area";
import {ChevronDown, Eye, PencilLine, Slash, Trash2} from "lucide-react";
import Link from "next/link";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";

const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
]

export default function EmployeesTable() {
    return (
        <SidebarInset>
            <header
                className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                <div className="flex items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1"/>
                    <Separator orientation="vertical" className="mr-2 h-4"/>
                    {/*todo: it should be dynamic*/}
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
                </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <Card>
                    <CardHeader>
                        <CardTitle>All Employees</CardTitle>
                        <CardDescription>List of all employees</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ScrollArea
                            className="w-72 sm:w-[680px] md:w-[700px] lg:w-[900px] xl:w-[1000px] 2xl:w-auto whitespace-nowrap rounded-md border">
                            <Table>
                                <TableCaption>A list of your recent invoices.</TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>NIP</TableHead>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Phone Number</TableHead>
                                        <TableHead>Position</TableHead>
                                        <TableHead>Address</TableHead>
                                        <TableHead>Emergency Number</TableHead>
                                        <TableHead>Employment Contract</TableHead>
                                        <TableHead>Card Number</TableHead>
                                        <TableHead>Outlet Name</TableHead>
                                        <TableHead>Loan Status</TableHead>
                                        <TableHead>Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {invoices.map((invoice) => (
                                        <TableRow key={invoice.invoice}>
                                            <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                            <TableCell>{invoice.paymentStatus}</TableCell>
                                            <TableCell>{invoice.paymentMethod}</TableCell>
                                            <TableCell>{invoice.totalAmount}</TableCell>
                                            <TableCell>{invoice.totalAmount}</TableCell>
                                            <TableCell>{invoice.totalAmount}</TableCell>
                                            <TableCell>{invoice.totalAmount}</TableCell>
                                            <TableCell>{invoice.totalAmount}</TableCell>
                                            <TableCell>{invoice.totalAmount}</TableCell>
                                            <TableCell>{invoice.totalAmount}</TableCell>
                                            <TableCell>
                                                <div className="flex flex-row gap-1 items-center justify-around">
                                                    <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger asChild>
                                                                <Link href="#">
                                                                    <Eye className="w-5"/>
                                                                </Link>
                                                            </TooltipTrigger>
                                                            <TooltipContent>Details</TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                    <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger asChild>
                                                                <Link href="#">
                                                                    <PencilLine className="w-5"/>
                                                                </Link>
                                                            </TooltipTrigger>
                                                            <TooltipContent>Edit</TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                    <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger asChild>
                                                                <Link href="#">
                                                                    <Trash2 className="w-5 text-red-600"/>
                                                                </Link>
                                                            </TooltipTrigger>
                                                            <TooltipContent>Delete</TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TableCell colSpan={10}>Total</TableCell>
                                        <TableCell>$2,500.00</TableCell>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                            <ScrollBar orientation="horizontal"/>
                        </ScrollArea>
                    </CardContent>
                    <CardFooter></CardFooter>
                </Card>
            </div>
        </SidebarInset>
    )
}