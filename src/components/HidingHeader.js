import { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Link from 'next/link';

export default function HidingHeader() {
  const [visible, setVisible] = useState(true);
  const [opacity, setOpacity] = useState('0');
  const target = useRef(null);
  const { scrollY } = useScroll({target: target});

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
        className={`px-8 flex flex-row justify-end items-center right-0 text-xl font-normal z-50`}
        variants={variants}
        animate={visible ? "visible" : "hidden"}
        transition={{ ease: "easeOut", duration: 0.4 }}
      >
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
      {/* <div style={{ width: '100vw',  boxShadow: `0 0px 3px 1px rgba(230,230,230,${opacity})` }}></div> */}
    </motion.header>
  );
}