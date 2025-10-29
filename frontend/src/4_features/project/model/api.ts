import api from "../../../6_shared/api/axiosInstance.ts";

const Projects = async () => {
    const response = await api.get("/projects");
    return response;
}

export default Projects;