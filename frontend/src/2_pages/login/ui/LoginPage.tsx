import {Button} from "../../../6_shared/ui/Button.tsx";
import icon from "../../../assets/Frame.svg"
import LoginForm from "../../../3_features/auth/ui/LoginForm.tsx";

const LoginPage = () => {
    return(
        <div className="flex min-h-screen dark:bg-[#1F2937] dark:text-white dark font-light">
            <div className={"flex flex-col text-[18px] m-10 max-w-2xl w-full h-[850px] dark:bg-[rgb(48,62,79)] rounded-2xl items-center justify-center"}>
                <img className={"w-35 h-35"} src={icon} />
                <p className={"text-9xl font-bold"}> CAIR </p>
            </div>
            <LoginForm />
        </div>

    )
}

export default LoginPage;