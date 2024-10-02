"use client"
import { cn } from "@/lib/utils";


import {
  Briefcase,
  FolderGit2,
  GraduationCap,
  HomeIcon,
  Mail, 
  User,
  Star
} from 'lucide-react';

import { Dock, DockIcon, DockItem, DockLabel } from '@/components/animation/DockAnimation';

import Link from "next/link";
import { useEffect, useState } from "react";
import FramerWrapper from "./animation/FramerWrapper";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const data = [
    {
      title: "Home",
      icon: <HomeIcon className="h-full w-full " />,
      href: "/",
    },
    {
      title: "About",
      icon: <User className="h-full w-full " />,
      href: "#about",
    },
    {
      title: "Skills",
      icon: <Star className="h-full w-full " />,
      href: "#skills",
    },
    {
      title: "Service",
      icon: <Briefcase className="h-full w-full " />,
      href: "#education",
    },
    {
      title: "Projects",
      icon: <FolderGit2 className="h-full w-full " />,
      href: "#projects",
    },
    {
      title: "Education",
      icon: <GraduationCap className="h-full w-full " />,
      href: "#education",
    },
    {
      title: "Contact us",
      icon: <Mail className="h-full w-full " />,
      href: "#contact",
    }
  ];
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname()
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div
      className={`fixed top-5 right-0 left-0 px-0 sm:px-5 m-auto w-full sm:w-fit bg-transparent z-[+9999999] ${
        scrolling ? "hidden" : "block"
      }`}
    >
      <Dock className="items-end pb-3 rounded-full">
        {data.map((item, idx) => (
          <Link className="relative z-10" href={item.href} key={idx}>
            <DockItem
              className={cn(
                "aspect-square rounded-full bg-gray-900 dark:bg-neutral-800 ",
                pathname === item.href && " bg-btn border-btn}"
              )}
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon
                className={cn(pathname === item.href || "text-white")}
              >
                {item.icon}
              </DockIcon>
            </DockItem>
          </Link>
        ))}
      </Dock>
    </div>
  );
};

export default Navbar;
