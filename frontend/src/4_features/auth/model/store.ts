import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
    id?: number;
    username: string;
    token: string;
}

interface UserStore {
    user: User | null;
    setUser: (user: User) => void;
    logout: () => void;
}

export const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
            user: null,
            setUser: (user) => {
                set({ user });
                localStorage.setItem("Authorization", user.token)
            },
            logout: () => set({ user: null }),
        }),
        { name: "user-storage" }
    )
);