import {Button} from "../../../6_shared/ui/Button.tsx";
import {useState} from "react";
import {useUserStore} from "../model/store.ts";
import {login} from "../model/api.ts";
import {EyeIcon, EyeOffIcon} from "../../../6_shared/ui/icons/EyeIcon.tsx";
import {loginSchema} from "../lib/Validators.ts";
import { z } from "zod";

const LoginForm = () => {

    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { setUser } = useUserStore();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await loginSchema.parseAsync({ username: username, password: password});
            const data = await login(username, password);
            setUser({username, token: data.token});
            alert("Logged in successfully!");
        } catch (err) {
            if(err instanceof z.ZodError){
                setError(err.issues);
            }else{
                setError("❌ Invalid email or password");
            }
        }
        console.log(error);
    }

    const toggleShow = () => setShowPassword((v) => !v);

    return(
        <div className="flex flex-col pl-5 justify-center font-[SF_pro]">
            <h1 className="text-7xl mb-10 font-semibold">
                Log in
            </h1>
            <form onSubmit={handleSubmit}>
                <p className={"pb-2 text-[18px]"}> Email Address </p>
                <input className={"border dark:border-white p-5 rounded-2xl w-[550px] mb-12"}
                       placeholder={"230107142@sdu.edu.kz"}
                       onChange={(e) => setUsername(e.target.value)}
                />
                <p className={"pb-2 text-[18px]"}> Password </p>
                <div className="relative w-[550px] mb-3">
                    <input
                        className="border dark:border-white p-5 rounded-2xl w-full pr-14"
                        placeholder="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        aria-label="Password"
                    />

                    <button
                        type="button"
                        onClick={toggleShow}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200"
                    >
                        {showPassword ? (
                            <EyeOffIcon className="w-5 h-5" />
                        ) : (
                            <EyeIcon className="w-5 h-5" />
                        )}
                    </button>
                </div>
            </form>
            <p className={"flex text-[18px] justify-end mb-15 underline"}> Forgot password? </p>
            <Button content={"Login"} width={"w-[550px]"} color={"White"} icon={null} onClick={handleSubmit} />
        </div>
    )
}

export default LoginForm