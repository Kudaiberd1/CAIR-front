import { Home, Users, User, Settings } from "lucide-react";
import icon from "../../assets/Frame.svg"
import SidebarItem from "./SidebarItem.tsx";
import {useState} from "react";
import {DashboardIcon, UsersIcon, UserIcon, UserManagerIcon, ProjecManagerIcon} from "../../6_shared/ui/icons/NavbarIcons.tsx";

const Sidebar = () => {
    const [active, setActive] = useState(0);
    return (
        <aside className={"w-84 bg-[rgb(33,40,54)] m-3 p-6 flex flex-col rounded-xl font-medium"}>
            <div className={"mb-10 flex items-center gap-3"}>
                <img src={icon} alt={"CAIR logo"} className={"w-14 h-14"} />
                <h2 className={"text-5xl font-semibold"}> CAIR </h2>
            </div>

            <div className={"flex flex-col gap-0.5"}>
                <SidebarItem icon={<DashboardIcon />} label="Dashboard" to="/" isActive={active==0} onClick={() => setActive(0)} />
                <SidebarItem icon={<UsersIcon />} label="Users" to="/" isActive={active==1} onClick={() => setActive(1)} />
                <SidebarItem icon={<UserIcon />} label="Profile" to="/" isActive={active==2} onClick={() => setActive(2)} />
            </div>

            <div className={"mt-10 uppercase ml-2 text-lg"}> Admin Tools </div>

            <div className={"flex flex-col gap-0.5 mt-2"}>
                <SidebarItem icon={<UserManagerIcon />} label="User Management" to="/" isActive={active==3} onClick={() => setActive(3)} />
                <SidebarItem icon={<ProjecManagerIcon />} label="Projects Management" to="/" isActive={active==4} onClick={() => setActive(4)} />
            </div>
        </aside>
    )
}

export default Sidebar;