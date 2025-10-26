import { create } from "zustand";

export type ToastType = "success" | "error" | "info" | "warning";

interface ToastMessage {
    id: string;
    message: string;
    type: ToastType;
}

interface ToastState {
    toasts: ToastMessage[];
    addToast: (msg: Omit<ToastMessage, "id">) => void;
    removeToast: (id: string) => void;
}

export const useToastStore = create<ToastState>((set) => ({
    toasts: [],
    addToast: (msg) =>
        set((state) => ({
            toasts: [...state.toasts, { id: crypto.randomUUID(), ...msg }],
        })),
    removeToast: (id) =>
        set((state) => ({
            toasts: state.toasts.filter((t) => t.id !== id),
        })),
}));