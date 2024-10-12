import { ReactNode } from 'react';
import SettingsMenu from './components/SettingsMenu';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className="relative flex min-h-screen flex-col bg-themeDark">
        <div className="container mt-20">
          <div className="grid grid-cols-12">
            <div className="col-span-3">
              <SettingsMenu />
            </div>
            <div className="col-span-9">{children}</div>
          </div>
        </div>
      </main>
    </>
  );
}
