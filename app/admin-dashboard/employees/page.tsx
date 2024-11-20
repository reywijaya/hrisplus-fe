import {SidebarInset, SidebarTrigger} from "@/components/ui/sidebar";
import {Separator} from "@/components/ui/separator";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import BreadcrumbSection from "@/components/admin/breadcrumb-section";
import TableSection from "@/components/admin/table-section";

// this is page routing employees
export default function EmployeesPage() {
    return (
        <SidebarInset>
            <header
                className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                <div className="flex items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1"/>
                    <Separator orientation="vertical" className="mr-2 h-4"/>
                    <BreadcrumbSection/>
                </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <Card>
                    <CardHeader>
                        <CardTitle>Master Data Employees</CardTitle>
                        <CardDescription>List of all employees in CV. Brewok Group</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <TableSection/>
                    </CardContent>
                    <CardFooter>{/*todo: what goes in here*/}</CardFooter>
                </Card>
            </div>
        </SidebarInset>
    )
}