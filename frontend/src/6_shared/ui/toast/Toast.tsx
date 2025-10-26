import * as RadixToast from "@radix-ui/react-toast";
import { useToastStore } from "./toastStore";
import { clsx } from "clsx";

export const ToastProvider = () => {
    const { toasts, removeToast } = useToastStore();

    return (
        <RadixToast.Provider swipeDirection="right">
            {toasts.map((toast) => (
                <RadixToast.Root
                    key={toast.id}
                    duration={2500}
                    onOpenChange={(open) => !open && removeToast(toast.id)}
                    className={clsx(
                        "mb-3 rounded-xl px-5 py-3 shadow-lg text-white transition-all data-[state=open]:animate-in data-[state=closed]:animate-out",
                        toast.type === "success" && "bg-green-500",
                        toast.type === "error" && "bg-red-500",
                        toast.type === "info" && "bg-blue-500",
                        toast.type === "warning" && "bg-yellow-500 text-black"
                    )}
                >
                    <RadixToast.Title className="font-medium">
                        {toast.message}
                    </RadixToast.Title>
                </RadixToast.Root>
            ))}
            <RadixToast.Viewport className="fixed top-4 right-4 flex flex-col z-50" />
        </RadixToast.Provider>
    );
};