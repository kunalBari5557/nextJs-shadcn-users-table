import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowUpDown } from "lucide-react";

import {
    ColumnDef,
} from "@tanstack/react-table";
import { User } from "@/type/User";


export const columns: ColumnDef<User>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value: any) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value: any) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                className="py-2 px-4"
            >
                Name
                <ArrowUpDown />
            </Button>
        ),
        cell: ({ row }) => <div className="py-2 px-4">{row.getValue("name")}</div>,
    },
    {
        accessorKey: "username",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                className="py-2 px-4"
            >
                Username
                <ArrowUpDown />
            </Button>
        ),
        cell: ({ row }) => <div className="py-2 px-4">{row.getValue("username")}</div>,
    },
    {
        accessorKey: "email",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                className="py-2 px-4"
            >
                Email
                <ArrowUpDown />
            </Button>
        ),
        cell: ({ row }) => <div className="py-2 px-4 lowercase">{row.getValue("email")}</div>,
    },
];