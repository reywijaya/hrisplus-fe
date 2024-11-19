import {AppSidebar} from "@/components/app-sidebar"
import {SidebarProvider,} from "@/components/ui/sidebar"
import {ReactNode} from "react";

export default function Layout({children}: { children: ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar/>
            {children}
        </SidebarProvider>
    )
}