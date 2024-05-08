"use client";

import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";

function TransitionProvider({ children }) {
  const pathName = usePathname();

  // const bgColor = {
  //   '/':'bg-gradient-to-r from-[#C6EA8D] to-[#FE90AF]',
  //   '/about':'bg-gradient-to-r from-[#FF512F] to-[#DD2476]',
  //   '/contact':'bg-gradient-to-r from-[#D4145A] to-[#FBB03B]',
  //   '/portfolio':'bg-gradient-to-r from-[#FF5F6D] to-[#FFC371]'
  // }

  

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className={`min-w-screen min-h-screen  flex flex-col`}
      >
        {/* Animation */}
        <motion.div
          className="w-screen h-screen fixed  bg-stone-950 rounded-b-[100px] z-20"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />

        <motion.div
          className="text-4xl md:text-8xl fixed m-auto inset-0 w-fit h-fit bg-gradient-to-r from-blue-100 to-red-100 text-transparent bg-clip-text uppercase z-30"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {pathName === "/" ? "Home" : pathName.slice(1)}
        </motion.div>

        <motion.div
          className="w-screen h-screen fixed bg-stone-950 rounded-t-[100px] z-20 bottom-0"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        {/* Animation */}

        <div className="h-24">
          <Navbar />
        </div>

        <div className="grow">{children}</div>
      </div>
    </AnimatePresence>
  );
}

export default TransitionProvider;
