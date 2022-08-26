import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Link from 'next/link';

export default function HidingHeader() {
  // const [position, setPosition] = useState(0);
  const [visible, setVisible] = useState(true);
  const { scrollY } = useScroll()
  
  useEffect(() => {
    // const handleScroll = () => {
    //   const moving = window.pageYOffset;

    //   setVisible(position > moving);
    //   setPosition(moving);
    // };
    // window.addEventListener("scroll", handleScroll);
    // return (() => {
    //   window.removeEventListener("scroll", handleScroll);
    // });
    
    return scrollY.onChange(() => {
      if (scrollY?.current < scrollY?.prev) {
        setVisible(true);
        console.log("visible");
      } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
        setVisible(false);
        console.log("hidden");
      }
    })
  })

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -80 }
  };

  // const pos = visible ? "top-0" : "-top-[80px]";
  // transition-top duration-[400ms] ease-out ${pos} motion-reduce:transition-none
  return (
    <motion.header className="px-8 fixed w-screen z-50 bg-[#ffffff]/80"
    variants={variants}
    animate={visible ? "visible" : "hidden"}
    transition={{ease: "easeOut", duration: 0.4}}>
        <nav className="flex flex-row justify-end items-center right-0 text-xl font-normal z-50">
            <Link href="/">
              <a className="px-6 py-4 mx-4 my-2">Home</a>
            </Link>
            <Link href="/#design" >
              <a className="px-6 py-4 mx-4 my-2">Design</a>
            </Link>
            <Link href="/">
              <a className="px-6 py-4 mx-4 my-2">Develop</a>
            </Link>
            <Link href="/">
              <a className="px-6 py-4 mx-4 my-2">About</a>
            </Link>
            <Link href="/">
              <a className="px-6 py-4 mx-4 my-2">Contact</a>
            </Link>
            <button className="px-6 py-4 mx-4 my-2">
              <i className=""></i> Resume
            </button>
        </nav>
      </motion.header>
  );
}