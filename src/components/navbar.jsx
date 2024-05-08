"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/contact", title: "Contact" },
  { url: "/portfolio", title: "Portfolio" },
];



function Navbar() {
  const [open, setOpen] = useState(false);
  const pathName = usePathname()

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const middleVariants = {
    closed: {
      opactiy: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        staggerChildren: 0.2,
        when: 'beforeChildren'
      }
    },
  };

  const listItemVariants = {
    closed:{
      y:[40,20],
      opacity:0
    },
    opened:{
      y:0,
      opacity:1,
      transition:{
        type:'spring',
        duration:0.4
      }
    }
  }

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* Links for >medium screens */}
      <div className="hidden md:flex gap-4 md:w-1/3">
        {links.map((link) => (
          <NavLink key={link.url} link={link} />
        ))}
      </div>
      {/* Links for >medium screens */}

      {/* LOGO */}
      <div className="md:hidden lg:flex lg:w-1/3 justify-center">
        <Link
          href="/"
          className="text-sm rounded-md p-1 bg-black flex h-8 justify-center items-center"
        >
          <span className="text-white font-semibold mr-1">Manas</span>
          <span className="bg-white rounded text-black px-1 font-bold">
            Kolaskar
          </span>
        </Link>
      </div>
      {/* LOGO */}

      {/* Social Media Links */}
      <div className="hidden md:flex gap-4 md:w-1/3 justify-center">
        <Link target="_blank" href="https://github.com/maannas">
          <Image src="/github.png" alt="Github Icon" width={24} height={24} className="animate-bounce transition-all duration-75" />
        </Link>
        
        <Link target="_blank" href="https://www.linkedin.com/in/manaskolaskar/">
          <Image
            src="/linkedin.png"
            alt="Linkedin Icon"
            width={24}
            height={24}
          />
        </Link>
      </div>
      {/* Social Media Links */}

      {/* Responsive Menu */}
      <div className="md:hidden">
        {/* Menu Button */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="h-8 w-10 flex flex-col justify-between z-[100] relative"
        >
          <motion.div
            variants={topVariants}
            animate={`${open ? "opened" : "closed"}`}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={middleVariants}
            animate={`${open ? "opened" : "closed"}`}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={`${open ? "opened" : "closed"}`}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* Menu Button */}

        {/* Menu List */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute inset-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-50"
          >
            {links.map((link,idx) => (
              <motion.div variants={listItemVariants} key={idx}>
                <Link onClick={()=>{
                  link.url === pathName ? setOpen(false) : ''
                }}  href={link.url} className="p-1">
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
        {/* Menu List */}
      </div>
      {/* Responsive Menu */}
    </div>
  );
}

export default Navbar;
