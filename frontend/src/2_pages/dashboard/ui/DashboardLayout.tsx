import Sidebar from "../../../3_widgets/sidebar/Sidebar.tsx";

const DashboardLayout = () => {
    return(
        <div className={"flex min-h-screen dark:text-white dark:bg-[rgb(48,62,79)] dark"}>
            <Sidebar />

        </div>
    )
}

export default DashboardLayout;