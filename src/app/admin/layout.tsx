"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut, SessionProvider } from "next-auth/react";
import { 
  LayoutDashboard, 
  Inbox, 
  Brain, 
  FolderGit2, 
  BookOpen, 
  HelpCircle, 
  Briefcase, 
  Settings, 
  LogOut,
  IndianRupee
} from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AdminInnerLayout>{children}</AdminInnerLayout>
    </SessionProvider>
  );
}

function AdminInnerLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname === "/admin/login";

  // Navigation items for the CMS
  const menuItems = [
    { name: "Overview", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Leads Tracker", href: "/admin/leads", icon: Inbox },
    { name: "CMS Services", href: "/admin/services", icon: Brain },
    { name: "CMS Portfolio", href: "/admin/portfolio", icon: FolderGit2 },
    { name: "CMS Blog", href: "/admin/blog", icon: BookOpen },
    { name: "CMS Testimonials", href: "/admin/testimonials", icon: HelpCircle },
    { name: "CMS Pricing", href: "/admin/pricing", icon: IndianRupee },
    { name: "Site Settings", href: "/admin/settings", icon: Settings },
  ];

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/admin/login");
    router.refresh();
  };

  // If we are on the login page, render children directly without the layout frame
  if (isLoginPage) {
    return <div className="min-h-screen bg-gray-950">{children}</div>;
  }

  return (
    <div className="flex min-h-screen bg-gray-950 text-gray-100">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-gray-900 bg-gray-950 flex flex-col justify-between shrink-0 hidden md:flex">
        <div className="p-6 space-y-8">
          {/* Header */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              VP Admin CMS
            </span>
          </Link>

          {/* Menu */}
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    active 
                      ? "bg-indigo-600 text-white" 
                      : "text-gray-400 hover:bg-gray-900 hover:text-white"
                  }`}
                >
                  <Icon className="h-4.5 w-4.5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Logout */}
        <div className="p-6 border-t border-gray-900">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 w-full rounded-xl px-4 py-3 text-sm font-medium text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors focus:outline-none"
          >
            <LogOut className="h-4.5 w-4.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
        
        {/* Top Mobile Bar */}
        <header className="h-16 border-b border-gray-900 bg-gray-950/80 backdrop-blur px-6 flex md:hidden items-center justify-between">
          <span className="text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            VP Admin
          </span>
          <div className="flex items-center space-x-4">
            <Link href="/admin/dashboard" className="text-xs text-indigo-400">Panel</Link>
            <button onClick={handleLogout} className="text-xs text-red-400">Out</button>
          </div>
        </header>

        {/* Main Body */}
        <main className="flex-1 p-6 sm:p-10 max-w-7xl w-full mx-auto">
          {children}
        </main>

      </div>

    </div>
  );
}
