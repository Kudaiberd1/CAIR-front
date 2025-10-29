import { create } from "zustand";
import type {User} from "../../../5_entities/user/model/type.ts";

interface UserStore {
    user: User | null;
    setUser: (user : User) => void;
    updateUser: (partial: Partial<User>) => void;
}

export const useUserStore = create<UserStore>((set) => ({
    user: null,

    setUser : (user) => set({ user }),

    updateUser : (partial) =>
        set((state) => ({
            user: state.user ? { ...state.user, ...partial } : partial as User,
        }))
}));