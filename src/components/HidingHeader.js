import { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Link from 'next/link';

export default function HidingHeader() {
  const [visible, setVisible] = useState(true);
  const [opacity, setOpacity] = useState('0');
  const target = useRef(null);
  const { scrollY } = useScroll({ target: target });

  useEffect(() => {
    return scrollY.onChange(() => {
      setOpacity(`${scrollY.current / 240}`);
      if (scrollY?.current < scrollY?.prev) {
        setVisible(true);
        console.log("visible");
      } else if (scrollY?.current > 240 && scrollY?.current > scrollY?.prev) {
        setVisible(false);
        console.log("hidden");
      }
    })
  })

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -80 }
  };

  // transition-top duration-[400ms] ease-out ${pos} motion-reduce:transition-none
  return (
    <motion.header
      style={{ background: `rgba(255,255,255,${opacity})`, boxShadow: `0 0px 8px 2px rgba(200,200,200,${opacity})` }}
      ref={target}
      className={`fixed w-full z-50`}
      variants={variants}
      animate={visible ? "visible" : "hidden"}
      transition={{ ease: "easeOut", duration: 0.4 }}
    >
      <nav
        style={{ background: `rgba(255,255,255,${opacity})` }}
        ref={target}
        className={`px-6 flex fle4-row justify-end items-center right-0 text-xl font-normal z-50`}
        variants={variants}
        animate={visible ? "visible" : "hidden"}
        transition={{ ease: "easeOut", duration: 0.4 }}
      >
        <Link href="/">
          <a className="px-5 py-2 mx-3 my-4">Home</a>
        </Link>
        <Link href="/#design" >
          <a className="px-5 py-2 mx-3 my-4">Design</a>
        </Link>
        <Link href="/">
          <a className="px-5 py-2 mx-3 my-4">Develop</a>
        </Link>
        <Link href="/">
          <a className="px-5 py-2 mx-3 my-4">About</a>
        </Link>
        <Link href="/">
          <a className="px-5 py-2 mx-3 my-4">Contact</a>
        </Link>
        <button className="mx-3 my-4 button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          <div>Resume</div>
        </button>
      </nav>
      {/* <div style={{ width: '100vw',  boxShadow: `0 0px 3px 1px rgba(230,230,230,${opacity})` }}></div> */}
    </motion.header>
  );
}