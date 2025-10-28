import {NavLink} from "react-router-dom";
import type {MouseEvent} from "react";

interface Props {
    icon: React.ReactNode;
    label: string;
    to: string;
    isActive: boolean;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const SidebarItem = ({icon, label, to, isActive, onClick}: Props) => {
    return (
        <NavLink
            to={to}
            className={`flex items-center gap-3 px-3 py-4 rounded-xl transition text-lg 
                ${isActive ? "bg-blue-400 dark:bg-[rgb(86,125,182)] text-white" : "hover:bg-gray-200 dark:hover:bg-[#323a4a]"}`
            }
            onClick={onClick}
        >
            {icon}
            <span> {label} </span>
        </NavLink>
    );
}

export default SidebarItem;