import type {User} from "../../user/model/type.ts";

export interface tag {
    id: number;
    name: string;
}

export interface ProjectResponse {
    id: number;
    title: string;
    description: string;
    status: string;
    progress: number;
    author: User;
    startDate: string;
    endDate: string;
    imagePaths: string[];
    teamMembers: User[];
    tags: tag[];
}