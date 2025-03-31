import LeftSideBar from "@/components/dashboard/LeftSideBar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex gap-4">
            <LeftSideBar></LeftSideBar>
            {children}
        </div>
    );
}
