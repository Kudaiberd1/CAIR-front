import {useEffect, useState} from "react";
import type {User} from "../../5_entities/user/model/type.ts";
import userInfo from "../../4_features/projects/model/api.ts";
import {useUserStore} from "../../4_features/projects/model/store.ts";
import {useNavigate} from "react-router-dom";

const UserMenu = () => {
    const [profile, setProfile] = useState<User | undefined>();

    const token = localStorage.getItem("Authorization");

    const navigate = useNavigate();


    const {setUser} = useUserStore();

    useEffect(() => {
        userInfo().then((value) => {
            setUser(value.data);
            setProfile(value.data)
        });
    }, [token]);

    return (
        <>
            <img alt={"User avatar"} onClick={() => navigate("/")}
                 className={"my-auto w-[60px] h-[60px] rounded-2xl cursor-pointer"}
                 src={`http://localhost:8080/${profile?.avatarPath}`}/>
        </>
    )

}

export default UserMenu;