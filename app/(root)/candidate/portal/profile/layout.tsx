import Footer from '@/components/shared/footer/Footer';
import Marquee from '@/components/shared/Marquee/Marquee';
import Header from '@/components/shared/Nav/Header';
import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-themeDark relative">
            <main className="">
                {children}
            </main>
        </div>
    );
};

export default Layout;
