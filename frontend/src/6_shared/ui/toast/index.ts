import { useToastStore } from "./toastStore";

export const showToast = (message: string, type: "success" | "error" | "info" | "warning" = "info") => {
    useToastStore.getState().addToast({ message, type });
};

export const showSuccess = (msg: string) => showToast(msg, "success");
export const showError = (msg: string) => showToast(msg, "error");
export const showInfo = (msg: string) => showToast(msg, "info");
export const showWarning = (msg: string) => showToast(msg, "warning");

export { ToastProvider } from "./Toast";