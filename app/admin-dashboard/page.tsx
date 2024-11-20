import {SidebarInset, SidebarTrigger} from "@/components/ui/sidebar";
import {Separator} from "@/components/ui/separator";
import {Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage} from "@/components/ui/breadcrumb";
import CardSection from "@/components/admin/card-section";
import {columns, Payment} from "@/components/admin/data-table/columns-definition";
import {DataTable} from "@/components/admin/data-table/data-table-section";
import {ChartAreaComponent} from "@/components/admin/chart/chart-area";
import {BarChartComponent} from "@/components/admin/chart/bar-chart";
import {PieChartComponent} from "@/components/admin/chart/pie-chart";

const dataCard = [
    {
        title: "Master Data Employee",
        content: "987",
    },
    {
        title: "Total Employee",
        content: "987",
    },
    {
        title: "Total Employee",
        content: "987",
    }
]

// example data for data table tank stank
async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com"
        },
        {
            id: "a62b71d8",
            amount: 250,
            status: "completed",
            email: "jane.doe@example.com"
        },
        {
            id: "c51f823a",
            amount: 150,
            status: "failed",
            email: "john.smith@example.com"
        },
        {
            id: "e93a47bc",
            amount: 300,
            status: "pending",
            email: "alice.w@example.com"
        },
        {
            id: "d41e93b7",
            amount: 500,
            status: "completed",
            email: "bob.m@example.com"
        },
        {
            id: "f81c72a9",
            amount: 75,
            status: "failed",
            email: "charlie.h@example.com"
        },
        {
            id: "g12a58df",
            amount: 120,
            status: "pending",
            email: "diana.k@example.com"
        },
        {
            id: "h93b64e1",
            amount: 450,
            status: "completed",
            email: "eve.p@example.com"
        },
        {
            id: "i34c71bf",
            amount: 200,
            status: "failed",
            email: "frank.o@example.com"
        },
        {
            id: "j56e82cd",
            amount: 320,
            status: "pending",
            email: "george.l@example.com"
        },
        {
            id: "k78d93ab",
            amount: 600,
            status: "completed",
            email: "hannah.m@example.com"
        },
        {
            id: "l45b72ef",
            amount: 95,
            status: "failed",
            email: "ian.s@example.com"
        },
        {
            id: "m23c41ae",
            amount: 80,
            status: "pending",
            email: "julia.t@example.com"
        },
        {
            id: "n67a58cb",
            amount: 550,
            status: "completed",
            email: "kevin.b@example.com"
        },
        {
            id: "o89d64fe",
            amount: 110,
            status: "failed",
            email: "linda.n@example.com"
        },
        {
            id: "p92e47ad",
            amount: 270,
            status: "pending",
            email: "mike.v@example.com"
        },
        {
            id: "q13c58af",
            amount: 400,
            status: "completed",
            email: "nora.g@example.com"
        },
        {
            id: "r76a93cd",
            amount: 135,
            status: "failed",
            email: "oliver.p@example.com"
        },
        {
            id: "s94e82fb",
            amount: 180,
            status: "pending",
            email: "paula.x@example.com"
        },
        {
            id: "t12b47ac",
            amount: 350,
            status: "completed",
            email: "quinn.j@example.com"
        },
        {
            id: "u45c93df",
            amount: 210,
            status: "failed",
            email: "rebecca.o@example.com"
        },
        {
            id: "v89a72bc",
            amount: 75,
            status: "pending",
            email: "steve.y@example.com"
        },
        {
            id: "w78e64af",
            amount: 500,
            status: "completed",
            email: "tina.z@example.com"
        },
        {
            id: "x67c93ae",
            amount: 95,
            status: "failed",
            email: "victor.m@example.com"
        },
        {
            id: "y34b58cd",
            amount: 400,
            status: "pending",
            email: "wendy.k@example.com"
        }
    ]
}
export default async function AdminDashboardPage() {

    // simulation
    const data = await getData();

    return (
        <SidebarInset>
            <header
                className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                <div className="flex items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1"/>
                    <Separator orientation="vertical" className="mr-2 h-4"/>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbPage>Dashboard</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>
            <div className="flex flex-col gap-4 p-4 pt-0">
                <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-xl">
                        <CardSection title={dataCard[0].title} content={dataCard[0].content}/>
                    </div>
                    <div className="rounded-xl">
                        <CardSection title={dataCard[1].title} content={dataCard[1].content}/>
                    </div>
                    <div className="rounded-xl">
                        <CardSection title={dataCard[2].title} content={dataCard[2].content}/>
                    </div>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                    <ChartAreaComponent />
                    <BarChartComponent />
                    <PieChartComponent />
                </div>
                <div className="flex-1">
                    <DataTable columns={columns} data={data}/>
                </div>
            </div>
        </SidebarInset>
    )
}