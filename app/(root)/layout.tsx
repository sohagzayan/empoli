import Marquee from "@/components/shared/Marquee/Marquee"
import Header from "@/components/shared/Nav/Header"
import { Toaster } from "@/components/ui/sonner"


export default function RootLayouts({
    children,
}: {
    children: React.ReactNode
}) {


    return (
        <div className="relative">
            {/* <Marquee /> */}
            <Header />
            <main>
                {children}
            </main>
            <Toaster richColors />
        </div>
    )
}
