import UserMenu from "./UserMenu.tsx";
import {BackIcon, LogOutIcon, ToggleModeIcon} from "../../6_shared/ui/icons/NavbarIcons.tsx";
import {ButtonIcon} from "../../6_shared/ui/ButtonIcon.tsx";
import {useUIStore} from "../../6_shared/model/uiStore.ts";
import {useNavigate} from "react-router-dom";
import {useThemeStore} from "../../6_shared/model/themeStore.ts";


const Navbar = () => {

    const navigate = useNavigate();

    const toggleSidebar = useUIStore((state) => state.toggleSidebar);
    const isOpen = useUIStore((state) => state.isSidebarOpen);

    const logOut = () => {
        localStorage.clear();
        navigate("/login");
    }

    const theme = useThemeStore((state) => state.theme);
    const toggleTheme = useThemeStore((state) => state.toggleTheme);

    return (
        <div
            className={`flex items-center ms-3 me-10 my-3 rounded-2xl justify-between p-[12px] bg-white dark:bg-[#252b38] dark:border-b dark:border-[#2f3645]`}>
            <ButtonIcon color={"dark:text-[rgb(225,159,113)]"} icon={<BackIcon/>}
                        bgColor={"bg-gray-200 dark:bg-[rgb(53,61,74)]"}
                        h={"[60px]"}
                        onClick={toggleSidebar}/>

            <div className={"flex space-x-[28px]"}>
                <p className={"border-l-3 border-gray-200 dark:border-[rgb(46,52,64)]"}></p>

                <ButtonIcon color={"text-black dark:text-white"} icon={<ToggleModeIcon/>}
                            bgColor={"bg-orange-200 dark:bg-[rgb(133,103,84)]"}
                            h={"[60px]"}
                            onClick={toggleTheme}
                />

                <ButtonIcon color={"text-white dark:text-black"} bgColor={"bg-black dark:bg-[rgb(242,249,255)]"}
                            h={"[60px]"}
                            icon={<LogOutIcon/>} label={"Logout"} onClick={() => logOut()}/>

                <UserMenu/>
            </div>

        </div>
    )
}

export default Navbar;