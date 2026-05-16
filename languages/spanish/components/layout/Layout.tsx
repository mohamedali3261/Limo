import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { TopBar } from './TopBar';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fff] selection:bg-teal-200" dir="rtl">
      <Navbar />
      <main className="flex-grow lg:mr-[280px]">
        <TopBar />
        <div className="w-full pb-24 lg:pb-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
