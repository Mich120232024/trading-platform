"use client";
import React from "react";
import {
  LayoutDashboard,
  LineChart,
  Settings,
  Users,
  LucideIcon,
} from "lucide-react";

interface MainLayoutProps {
  children: React.ReactNode;
}

interface NavigationItem {
  name: string;
  icon: LucideIcon;
}

export function MainLayout({ children }: MainLayoutProps) {
  const navigation: NavigationItem[] = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Trading", icon: LineChart },
    { name: "Settings", icon: Settings },
    { name: "Profile", icon: Users },
  ];

  const renderNavigationItems = () =>
    navigation.map((item) => {
      const Icon = item.icon;
      return (
        <a
          key={item.name} // Ensure 'key' is properly placed on the 'a' tag
          href="#"
          className="flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-md"
        >
          <Icon className="h-5 w-5 mr-3" />
          <span>{item.name}</span>
        </a>
      );
    });

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="fixed inset-y-0 left-0 w-64 bg-gray-800">
        <div className="flex h-16 items-center px-6">
          <span className="text-xl font-bold text-white">Trading Platform</span>
        </div>
        <nav className="px-3 mt-6">{renderNavigationItems()}</nav>
      </div>
      <div className="pl-64">
        <main className="py-6 px-8">{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;
