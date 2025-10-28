import dark_icon from "../../assets/Frame.svg"
import light_icon from "../../assets/Frame-1.svg"
import SidebarItem from "./SidebarItem.tsx";
import {useState} from "react";
import {
    DashboardIcon,
    UsersIcon,
    UserIcon,
    UserManagerIcon,
    ProjecManagerIcon
} from "../../6_shared/ui/icons/NavbarIcons.tsx";
import {useUIStore} from "../../6_shared/model/uiStore.ts";
import {useThemeStore} from "../../6_shared/model/themeStore.ts";

const Sidebar = () => {
    const [active, setActive] = useState(0);

    const isOpen = useUIStore((state) => state.isSidebarOpen);

    const theme = useThemeStore((state) => state.theme);

    return (
        <aside
            className={`bg-white dark:bg-[rgb(33,40,54)] rounded-xl font-[inter] transition-all duration-180 ${
                isOpen ? "w-84 m-3 p-6 flex flex-col" : "w-0 overflow-hidden"
            }`}>
            <div className={"mb-10 flex items-center gap-3"}>
                <img src={theme == "dark" ? dark_icon : light_icon} alt={"CAIR logo"} className={"w-14 h-14"}/>
                <h2 className={"text-5xl font-semibold"}> CAIR </h2>
            </div>

            <div className={"flex flex-col gap-0.5"}>
                <SidebarItem icon={<DashboardIcon/>} label="Dashboard" to="/" isActive={active == 0}
                             onClick={() => setActive(0)}/>
                <SidebarItem icon={<UsersIcon/>} label="Users" to="/" isActive={active == 1}
                             onClick={() => setActive(1)}/>
                <SidebarItem icon={<UserIcon/>} label="Profile" to="/" isActive={active == 2}
                             onClick={() => setActive(2)}/>
            </div>

            <div className={"mt-10 uppercase ml-2 text-lg"}> Admin Tools</div>

            <div className={"flex flex-col gap-0.5 mt-2"}>
                <SidebarItem icon={<UserManagerIcon/>} label="User Management" to="/" isActive={active == 3}
                             onClick={() => setActive(3)}/>
                <SidebarItem icon={<ProjecManagerIcon/>} label="Projects Management" to="/" isActive={active == 4}
                             onClick={() => setActive(4)}/>
            </div>
        </aside>
    )
}

export default Sidebar;