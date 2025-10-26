import {Button} from "../../../6_shared/ui/Button.tsx";

const LoginForm = () => {
    return(
        <div className="flex flex-col pl-5 justify-center font-light">
            <h1 className="text-7xl mb-10 font-semibold">
                Log in
            </h1>
            <form>
                <p className={"pb-2 text-[18px]"}> Email Address </p>
                <input className={"border dark:border-white p-5 rounded-2xl w-[550px] mb-12"} placeholder={"230107142@sdu.edu.kz"} />
                <p className={"pb-2 text-[18px]"}> Password </p>
                <input className={"border dark:border-white p-5 rounded-2xl w-[550px] mb-3"} placeholder={"password"} type={"password"} />
            </form>
            <p className={"flex text-[18px] justify-end mb-15 underline"}> Forgot password? </p>
            <Button content={"Login"} width={"w-[550px]"} color={"White"} icon={null} />
        </div>
    )
}

export default LoginForm