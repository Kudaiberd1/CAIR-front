import Sidebar from "../../../3_widgets/sidebar/Sidebar.tsx";
import Navbar from "../../../3_widgets/navbar/Navbar.tsx";
import {useThemeStore} from "../../../6_shared/model/themeStore.ts";

const DashboardLayout = () => {

    const theme = useThemeStore((state) => state.theme);

    return (
        <div className={`flex min-h-screen bg-zinc-100 dark:text-white dark:bg-[rgb(48,62,79)] ${theme}`}>
            <Sidebar/>
            <div className={"flex-1 flex flex-col"}>
                <Navbar/>
            </div>
        </div>
    )
}

export default DashboardLayout;