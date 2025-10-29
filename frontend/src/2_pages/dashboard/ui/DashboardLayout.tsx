import Sidebar from "../../../3_widgets/sidebar/Sidebar.tsx";
import Navbar from "../../../3_widgets/navbar/Navbar.tsx";
import {useThemeStore} from "../../../6_shared/model/themeStore.ts";
import React from "react";

const DashboardLayout = ({children}: { children: React.ReactNode }) => {

    const theme = useThemeStore((state) => state.theme);

    return (
        <div className={`flex min-h-screen bg-zinc-100 dark:text-white dark:bg-[rgb(48,62,79)] ${theme}`}>
            <Sidebar/>
            <div className={"flex-1 flex flex-col"}>
                <Navbar/>
                <main
                    className={"py-13 px-16 ms-3 me-10 my-3 h-full rounded-2xl overflow-y-auto bg-white dark:bg-[#252b38] dark:border-b dark:border-[#2f3645]"}> {children} </main>
            </div>
        </div>
    )
}

export default DashboardLayout;