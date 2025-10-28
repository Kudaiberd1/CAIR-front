import {create} from "zustand";

interface UIStore {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
    closeSidebar: () => void;
    openSidebar: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
    isSidebarOpen: true,
    toggleSidebar: () => set((state) => ({isSidebarOpen: !state.isSidebarOpen})),
    closeSidebar: () => set({isSidebarOpen: false}),
    openSidebar: () => set({isSidebarOpen: true}),
}));