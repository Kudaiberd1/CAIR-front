import type {MouseEvent, ReactNode} from "react";

interface Props {
    color: string,
    bgColor: string;
    h: string;
    icon: ReactNode | null,
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    label?: string;
}

export const ButtonIcon = ({label, color, bgColor, h, icon, onClick}: Props) => {
    return (
        <button
            className={`flex border-0 ${bgColor} h-${h} p-[20px] items-center rounded-2xl cursor-pointer ${color} transition ease-in-out duration-75 hover:brightness-110`}
            onClick={onClick}>
            {icon}
            <span className={"pl-1 py-auto"}> {label} </span>
        </button>
    )

}