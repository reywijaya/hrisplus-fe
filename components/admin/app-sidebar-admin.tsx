"use client"

import * as React from "react"
import {
    AudioWaveform,
    BookOpen,
    CircleDollarSign,
    Command,
    Database,
    Frame,
    GalleryVerticalEnd,
    Map,
    MessageSquareQuote,
    PieChart,
} from "lucide-react"

import {NavMain} from "@/components/nav-main"
import {NavProjects} from "@/components/nav-projects"
import {NavUser} from "@/components/nav-user"
import {TeamSwitcher} from "@/components/team-switcher"
import {Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail,} from "@/components/ui/sidebar"

// This is sample data.
const data = {
    user: {
        name: "Administrator",
        email: "admin@mail.com",
        avatar: "/avatars/shadcn.jpg",
    },
    // todo this could be stored in database
    // outlet / store switcher
    // in employee dashboard, this is just a header
    teams: [
        {
            name: "Warkop Brewok",
            logo: GalleryVerticalEnd,
            plan: "Enterprise",
        },
        {
            name: "Toko Kopi Kongca",
            logo: AudioWaveform,
            plan: "Startup",
        },
        {
            name: "Pengyu Kopitiam",
            logo: Command,
            plan: "Free",
        },
    ],
    // todo: fetch from a real api
    navMain: [
        {
            title: "Master Employee",
            url: "#", // todo fill the actual url or just do not provide an url, not clickable
            icon: Database,
            isActive: true,
            items: [
                {
                    title: "All Employee",
                    url: "/admin-dashboard/employees",
                },
                {
                    title: "Active Employee",
                    url: "#",
                },
                {
                    title: "Inactive Employee",
                    url: "#",
                },
            ],
        },
        {
            title: "Payroll Management",
            url: "#",
            icon: CircleDollarSign,
            items: [
                {
                    title: "Genesis",
                    url: "#",
                },
                {
                    title: "Explorer",
                    url: "#",
                },
                {
                    title: "Quantum",
                    url: "#",
                },
            ],
        },
        {
            title: "Loan Management",
            url: "#",
            icon: BookOpen,
            items: [
                {
                    title: "All Loan Application",
                    url: "#",
                },
                {
                    title: "Paid Loan",
                    url: "#",
                },
                {
                    title: "Unpaid Loan",
                    url: "#",
                },
                {
                    title: "Changelog",
                    url: "#",
                },
            ],
        },
        {
            title: "Employee Feedback",
            url: "#",
            icon: MessageSquareQuote,
            items: [
                {
                    title: "All Feedback",
                    url: "#",
                },
                {
                    title: "Team",
                    url: "#",
                },
                {
                    title: "Billing",
                    url: "#",
                },
                {
                    title: "Limits",
                    url: "#",
                },
            ],
        },
    ],
    projects: [
        {
            name: "Applicants Archive",
            url: "#",
            icon: Frame,
        },
        {
            name: "Sales & Marketing",
            url: "#",
            icon: PieChart,
        },
        {
            name: "Travel",
            url: "#",
            icon: Map,
        },
    ],
}

// Dashboard sidebar for Administrator
export function AppSidebarAdmin({...props}: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams}/>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain}/>
                <NavProjects projects={data.projects}/>
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user}/>
            </SidebarFooter>
            <SidebarRail/>
        </Sidebar>
    )
}