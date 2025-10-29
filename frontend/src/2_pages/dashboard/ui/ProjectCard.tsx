import type {ProjectResponse} from "../../../5_entities/project/model/type.ts";

const ProjectCard = ({project}: { project: ProjectResponse }) => {
    return (
        <div
            className="h-[520px] max-w-[310px] w-full rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition flex flex-col bg-[rgb(86,125,182)] text-white">
            {/* Image section */}
            <div
                className="relative h-[220px] bg-cover bg-center"
                style={{backgroundImage: `url(http://localhost:8080/${project.imagePaths[0]})`}}
            >
                {/* Status badge */}
                <div
                    className="absolute top-4 right-6 bg-blue-400 text-black text-[10px] font-medium px-3 py-1 rounded-full">
                    {project.status}
                </div>

                {/* Gradient overlay */}
                <div
                    className="absolute inset-0 bg-gradient-to-t from-[rgb(86,125,182)] via-transparent to-transparent"></div>
            </div>

            {/* Info section */}
            <div className="flex flex-col flex-1 justify-between p-6 bg-[rgb(86,125,182)]">
                <div>
                    <h1 className="text-2xl font-bold mb-4">{project.title}</h1>

                    <div className="flex justify-between text-sm text-white mb-2">
                        <span>Start</span>
                        <span>Finish</span>
                    </div>

                    <hr className={"border-white border-[1.6px]"}/>

                    <div className="flex justify-between text-[12px] text-white mb-4 pt-1">
                        <span>{project.startDate}</span>
                        <span>{project.endDate}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3">
                        {project.tags.map((tag) => (
                            <p className={"text-[12px] border border-[rgb(57,95,152)] bg-[rgb(57,95,152)] px-2 py-1 rounded-2xl"}> {tag.name} </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;