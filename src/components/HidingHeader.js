import { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Link from 'next/link';
import Router, { useRouter } from "next/router";
import { PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER } from "next/dist/server/api-utils";

export default function HidingHeader() {
  const router = useRouter();
  const target = useRef(null);
  const underline = useRef(null);
  const { scrollY } = useScroll({ target: target });
  const [visible, setVisible] = useState(true);
  const [opacity, setOpacity] = useState('0');


  useEffect(() => {
    return scrollY.onChange(() => {
      setOpacity(`${scrollY.current / 80}`);
      if (scrollY?.current < scrollY?.prev) {
        setVisible(true);
      } else if (scrollY?.current > 240 && scrollY?.current > scrollY?.prev) {
        setVisible(false);
      }
    })
  })

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -80 }
  };

  // animating css gradient is hard
  const underlineMotion = {
    rest: {
      // backgroundSize: "100%",
      // backgroundPosition: "left 0",
      offset: "50%",
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    },
    hover: {
      // backgroundSize: "10000%",
      // backgroundPosition: "left 100%",
      offset: "80%",
      transition: {
        duration: 0.8,
        ease: "easeIn"
      }
    }
  }

  const [timeoutID, setTimeoutID] = useState();

  const handleMouseEnter = (event) => {
    if (event.currentTarget.innerHTML.includes("div")) {
      underline.current.style.setProperty("transition", "none");
      setTimeout(() => {
        underline.current.style.setProperty("--l", "0%");
        underline.current.style.setProperty("--r", "0%");
      }, 10);
      setTimeout(() => {
        underline.current.style.setProperty("transition", "--l 0.3s ease-out, --r 0.4s ease-out");
        underline.current.style.setProperty("--r", "100%");
      }, 20);
    }
  }

  const handleMouseLeave = (event) => {
    if (event.currentTarget.innerHTML.includes("div")) {
      underline.current.style.setProperty("--l", "100%");
    }
  }

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
        variants={variants}
        animate={visible ? "visible" : "hidden"}
        transition={{ ease: "easeOut", duration: 0.4 }}
      >
        <ul className={`px-6 flex fle4-row justify-end items-center right-0 text-xl font-normal z-50`}>
          <li className="relative basis-32" onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)} onFocus={(e) => handleMouseEnter(e)} onBlur={(e) => handleMouseLeave(e)} >
            <Link href="/">
              <a className={`px-5 py-2 mx-3 my-4 ${router.asPath == "/" ? "active-link" : ""}`}>Home</a>
            </Link>
            {router.asPath == "/" ? (
              <motion.div className="active-underline" ref={underline} layoutId="underline" />
            ) : null}
          </li>
          {/* <li className="relative basis-32" onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)} onFocus={(e) => handleMouseEnter(e)} onBlur={(e) => handleMouseLeave(e)} >
            <Link href="/">
              <a className={`px-5 py-2 mx-3 my-4 ${router.asPath == "/" ? "active-link" : ""}`}>Home</a>
            </Link>
            {router.asPath == "/" ? (
              <motion.div className="active-underline" ref={underline} layoutId="underline" />
            ) : null}
          </motion.li> */}
          {/* <li className="relative basis-32" onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)} onFocus={(e) => handleMouseEnter(e)} onBlur={(e) => handleMouseLeave(e)} >
            <Link href="/">
              <a className={`px-5 py-2 mx-3 my-4 ${router.asPath == "/" ? "active-link" : ""}`}>Home</a>
            </Link>
            {router.asPath == "/" ? (
              <motion.svg className="active-underline" >
                <motion.linearGradient id="gradient" layoutId="underline" >
                  <motion.stop offset="50%" stop-color="#A6 ref={underline}EA99" />
                  <motion.stop offset="50%" stop-color="#E1 ref={underline}F8DD" />
                </motion.linearGradient>
                <motion.rect width="100%" height="100%" fill="url(#gradient)"/>
              </motion.svg>
            ) : null}
          </motion.li> */}
          <li className="relative basis-32" onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)} onFocus={(e) => handleMouseEnter(e)} onBlur={(e) => handleMouseLeave(e)} >
            <Link href="/design" >
              <a className={`px-5 py-2 mx-3 my-4 ${router.asPath == "/design" ? "active-link" : ""}`}>Design</a>
            </Link>
            {router.asPath == "/design" ? (
              <motion.div className="active-underline" ref={underline} layoutId="underline" />
            ) : null}
          </li>
          <li className="relative basis-32" onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)} onFocus={(e) => handleMouseEnter(e)} onBlur={(e) => handleMouseLeave(e)} >
            <Link href="/#develop">
              <a className={`px-5 py-2 mx-3 my-4 ${router.asPath == "/develop" ? "active-link" : ""}`}>Develop</a>
            </Link>
            {router.asPath == "/#develop" ? (
              <motion.div className="active-underline" ref={underline} layoutId="underline" />
            ) : null}
          </li>
          <li className="relative basis-32" onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)} onFocus={(e) => handleMouseEnter(e)} onBlur={(e) => handleMouseLeave(e)} >
            <Link href="/#about">
              <a className={`px-5 py-2 mx-3 my-4 ${router.asPath == "/about" ? "active-link" : ""}`}>About</a>
            </Link>
            {router.asPath == "/#about" ? (
              <motion.div className="active-underline" ref={underline} layoutId="underline" />
            ) : null}
          </li>
          <li className="relative basis-32" onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)} onFocus={(e) => handleMouseEnter(e)} onBlur={(e) => handleMouseLeave(e)} >
            <Link href="/#contact">
              <a className={`px-5 py-2 mx-3 my-4 ${router.asPath == "/contact" ? "active-link" : ""}`}>Contact</a>
            </Link>
            {router.asPath == "/#contact" ? (
              <motion.div className="active-underline" ref={underline} layoutId="underline" />
            ) : null}
          </li>
          <li>
            <button className="mx-3 my-4 button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              <div>Resume</div>
            </button>
          </li>
        </ul>
      </nav>
      {/* <div style={{ width: '100vw',  boxShadow: `0 0px 3px 1px rgba(230,230,230,${opacity})` }}></div> */}
    </motion.header>
  );
}