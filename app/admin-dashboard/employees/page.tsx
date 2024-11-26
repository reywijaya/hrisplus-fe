import {SidebarInset, SidebarTrigger} from "@/components/ui/sidebar";
import {Separator} from "@/components/ui/separator";
import {DataTable} from "@/components/admin/data-table/tanstack-table/data-table";
import {columns} from "@/components/admin/employees/emp-columns-def";
import CardHeaderInfo from "@/components/admin/employees/card-header-info";
import HeaderActionButton from "@/components/admin/employees/header-action-button";
import {ChartNoAxesCombined, Download, PlusCircle, Users} from "lucide-react";


/**
 * SIMULATE FETCHING DATA FROM JSON-SERVER
 * */
async function getEmployeeData() {
    return await fetch("http://localhost:8000/employees")
        .then((res) => res.json())
        .catch((error) => console.error("ERROR FETCH EMPLOYEES", error));
}

/**
 * EMPLOYEES PAGE => SERVER COMPONENT
 * */
export default async function EmployeesPage() {

    const employees = await getEmployeeData();

    return (
        <SidebarInset>
            <header
                className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                <div className="flex items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1"/>
                    <Separator orientation="vertical" className="mr-2 h-4"/>
                    <h1>Dashboard</h1>
                    {/*todo: define the content information for the header*/}
                </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="flex items-center justify-end gap-2">
                    <HeaderActionButton title={"Secondary"} variant={"secondary"}>
                        <Download/>
                    </HeaderActionButton>
                    <HeaderActionButton title={"Primary"}>
                        <PlusCircle/>
                    </HeaderActionButton>
                </div>
                <div className="flex gap-4 md:gap-6 justify-between">
                    <CardHeaderInfo title={"Title"} content={"Content"} additionalInfo={"+additionalInfo"}>
                        <Users/>
                    </CardHeaderInfo>
                    <CardHeaderInfo title={"Title"} content={"Content"} additionalInfo={"+additionalInfo"}>
                        <ChartNoAxesCombined/>
                    </CardHeaderInfo>
                    <CardHeaderInfo title={"Title"} content={"Content"} additionalInfo={"+additionalInfo"}/>
                </div>
                <div className="flex items-center justify-between space-y-2">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Master Data Employee</h2>
                        <p className="text-muted-foreground">
                            Here&apos;s a list of all the CV. Brewok Group Employee!
                        </p>
                    </div>
                </div>
                <DataTable data={employees} columns={columns}/>
            </div>
        </SidebarInset>
    )
}