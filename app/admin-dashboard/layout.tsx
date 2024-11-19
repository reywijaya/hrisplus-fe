import {SidebarProvider} from "@/components/ui/sidebar";
import {AppSidebarAdmin} from "@/components/admin/app-sidebar-admin";
import {ReactNode} from "react";

export default function AdminLayout({children}: { children: ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebarAdmin/>
            {children}
        </SidebarProvider>
    )
}