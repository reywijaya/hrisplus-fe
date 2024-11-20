import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import Link from "next/link";
import {Eye, PencilLine, Trash2} from "lucide-react";

// todo: dynamic section fetch data from an api
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
export default function TableSection() {
    return (
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
    )
}