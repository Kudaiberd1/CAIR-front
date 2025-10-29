import {useProjectStore} from "../model/store.ts";
import {useEffect, useState} from "react";
import Projects from "../model/api.ts";
import type {ProjectResponse} from "../../../5_entities/project/model/type.ts";
import ProjectCard from "../../../2_pages/dashboard/ui/ProjectCard.tsx";

export const ProjectList = () => {
    const [projects, setProjects] = useState<ProjectResponse[]>();
    const {setProject} = useProjectStore();


    useEffect(() => {
        Projects().then((value) => {
            setProject(value.data);
            setProjects(value.data);
            //console.log(value.data);
        });
    }, []);

    return (
        <div className={"grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6"}>
            {projects?.map((p) => (
                <ProjectCard key={p.id} project={p}/>
            ))}
        </div>
    )
}