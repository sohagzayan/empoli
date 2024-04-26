import Header from "@/components/shared/Nav/Header"
import MobileNav from "@/components/shared/Nav/MobileNav"
import Footer from "@/components/shared/footer/Footer"
import { Toaster } from "@/components/ui/sonner"


export default function RootLayouts({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <div className="">
            <Header />
            {children}
        </div>
    )
}
