import type {MouseEvent, ReactNode} from "react";

interface Props {
    content: string,
    color: string,
    icon: ReactNode | null,
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ content, color, icon, onClick } : Props) => {
    return(
        <button
            className={`bg-${color} w-full text-center rounded-lg transition ease-in-out duration-75 hover:brightness-110`}
            onClick={onClick}>
            <span className={"w-5 h-5"}> {icon} </span>
            {content}
        </button>
    )
}