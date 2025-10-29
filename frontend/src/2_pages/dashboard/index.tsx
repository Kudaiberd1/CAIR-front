import DashboardLayout from "./ui/DashboardLayout.tsx";
import {ProjectList} from "../../4_features/project/ui/ProjectList.tsx";

const Dashboard = () => {
    return (
        <DashboardLayout>
            <h1 className={"text-5xl font-bold pb-18"}> AI Projects </h1>
            <ProjectList/>
        </DashboardLayout>
    )
}

export default Dashboard;