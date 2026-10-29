import {useEffect, useState} from "react";
import {Outlet} from "react-router";
import {Sidebar} from "@/components/widgets/Sidebar/Sidebar.tsx";
import {Header} from "@/components/widgets/Header";
import {listenToReminders, refreshPushToken} from "@/services/push/push.service";
import {infoToast} from "@/hooks/useToast/useToast";

export function MainLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    useEffect(() => {
        void refreshPushToken();
    }, []);

    useEffect(() => {
        let unsubscribe: (() => void) | undefined;
        void listenToReminders(({notification}) => {
            infoToast({header: notification?.title, message: notification?.body});
        }).then((stopListening) => {
            unsubscribe = stopListening;
        });
        return () => unsubscribe?.();
    }, []);

    return (
        <div className="flex min-h-dvh bg-neutral-50">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className="flex-1 flex flex-col min-w-0">
                <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
                <main className="flex-1 p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}