import type {ProjectResponse} from "../../../5_entities/project/model/type.ts";
import {create} from "zustand";

interface ProjectStore {
    project: ProjectResponse | null;
    setProject: (project: ProjectResponse) => void;
    updateProject: (partial: Partial<ProjectResponse>) => void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
    project: null,

    setProject: (project) => set({project}),

    updateProject: (partial) =>
        set((state) => ({
            project: state.project ? {...state.project, ...partial} : partial as ProjectResponse,
        }))
}));