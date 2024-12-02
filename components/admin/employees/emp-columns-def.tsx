"use client"

import {ColumnDef} from "@tanstack/react-table"
import {Checkbox} from "@/components/ui/checkbox"

import {Employee} from "@/app/admin-dashboard/employees/data/schema" // todo should be edited
import {DataTableColumnHeader} from "../data-table/tanstack-table/data-table-column-header"
import {DataTableRowActions} from "../data-table/tanstack-table/data-table-row-actions"
import {isActive, loanStatus} from "@/app/admin-dashboard/employees/data/data-status";

export const columns: ColumnDef<Employee>[] = [
    {
        id: "select",
        header: ({table}) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
                className="translate-y-[2px]"
            />
        ),
        cell: ({row}) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="translate-y-[2px]"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "id",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="NIP"/>
        ),
        cell: ({row}) => <>{row.getValue("id")}</>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "firstName",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="First Name"/>
        ),
        cell: ({row}) => <>{row.getValue("firstName")}</>,
    },
    {
        accessorKey: "lastName",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Last Name"/>
        ),
        cell: ({row}) => <>{row.getValue("lastName")}</>,
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "phoneNumber",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Phone Number"/>
        ),
        cell: ({row}) => <>{row.getValue("phoneNumber")}</>,
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "role",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Role"/>
        ),
        cell: ({row}) => <>{row.getValue("role")}</>,
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "address",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Address"/>
        ),
        cell: ({row}) => <>{row.getValue("address")}</>,
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "emergencyNumber",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Emergency Number"/>
        ),
        cell: ({row}) => <>{row.getValue("emergencyNumber")}</>,
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "employmentContract",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Employment Contract"/>
        ),
        cell: ({row}) => <>{row.getValue("employmentContract")}</>,
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "cardNumber",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Card Number"/>
        ),
        cell: ({row}) => <>{row.getValue("cardNumber")}</>,
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "outletName",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Outlet Name"/>
        ),
        cell: ({row}) => <>{row.getValue("outletName")}</>,
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "loanStatus",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Loan Status"/>
        ),
        cell: ({row}) => {

            const status = loanStatus.find((status) => status.value === row.getValue("loanStatus"));

            let statusColor;
            if (status?.label === "Pending") {
                statusColor = "text-amber-600"
            } else if (status?.label === "Rejected") {
                statusColor = "text-red-600"
            } else if (status?.label === "Approved") {
                statusColor = "text-green-600"
            }

            if (!status) {
                return null
            }

            return (
                <div className="flex items-center">
                    {status.icon && (<status.icon className={`${statusColor} mr-2 h-4 w-4`}/>)}
                    {status.label}
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "gender",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Gender"/>
        ),
        cell: ({row}) => <>{row.getValue("gender")}</>,
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "isActive",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Employment Status"/>
        ),
        cell: ({row}) => {

            const activeStatus = isActive.find((activeStatus) => activeStatus.value === row.getValue("isActive"));

            return (
                <div className="flex items-center">
                    {activeStatus?.icon && (<activeStatus.icon
                        className={`${activeStatus.value ? "text-blue-600" : "text-red-600"} mr-2 h-4 w-4`}/>)}
                    {activeStatus?.label}
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        id: "actions",
        cell: () => <DataTableRowActions/>,
    },
]