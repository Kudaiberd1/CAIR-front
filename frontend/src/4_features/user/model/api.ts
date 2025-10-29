import api from "../../../6_shared/api/axiosInstance.ts";

const userInfo = async () => {
    const response = await api.get("/users/me");
    return response;
}
export default userInfo