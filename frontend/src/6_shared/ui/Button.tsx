import type {MouseEvent, ReactNode} from "react";

interface Props {
    content: string,
    width: string,
    color: string,
    icon: ReactNode | null,
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ content, width, color, icon, onClick } : Props) => {
    return(
        <button
            className={`bg-${color} ${width} dark:bg-white dark:text-black justify-center py-4 gap-2 text-center rounded-[15px] transition ease-in-out duration-75 hover:brightness-110`}
            onClick={onClick}
        >
            <span className={"w-5 h-5 p-0 m-0 mx-auto"}> {icon} </span>
            <span className={"my-autox"}> {content} </span>
        </button>
    )
}