import { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Link from 'next/link';
import { useRouter } from "next/router";
import styles from './Navigation.module.css';

const Navigation = () => {
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

  return (
    <motion.header
      style={{ background: `rgba(255,255,255,${opacity})` }}
      ref={target}
      className='fixed w-full z-50 drop-shadow-sm font-heading'
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
          <li className={`relative basis-32 ${styles.underlined}`} >
            <Link href="/">
              <a className={`px-5 py-2 mx-3 my-4 text-center ${router.asPath == "/" ? styles.activeLink : ""}`}>Home</a>
            </Link>
            {router.asPath == "/" ? (
              <motion.div className={styles.activeUnderline} ref={underline} layoutId="underline" />
            ) : null}
            <div className={styles.underlineOverlay} />
          </li>
          {/* <li className={`relative basis-32 ${styles.underlined}`} >
            <Link href="/design" >
              <a className={`px-5 py-2 mx-3 my-4 text-center ${router.asPath == "/design" ? styles.activeLink : ""}`}>Design</a>
            </Link>
            {router.asPath == "/design" ? (
              <motion.div className={styles.activeUnderline} ref={underline} layoutId="underline" />
            ) : null}
            <div className={styles.underlineOverlay} />
          </li> */}
          {/* <li className={`relative basis-32 ${styles.underlined}`} >
            <Link href="/#develop">
              <a className={`px-5 py-2 mx-3 my-4 text-center ${router.asPath == "/develop" ? styles.activeLink : ""}`}>Develop</a>
            </Link>
            {router.asPath == "/#develop" ? (
              <motion.div className={styles.activeUnderline} ref={underline} layoutId="underline" />
            ) : null}
            <div className={styles.underlineOverlay} />
          </li> */}
          <li className={`relative basis-32 ${styles.underlined}`} >
            <Link href="/about">
              <a className={`px-5 py-2 mx-3 my-4 text-center ${router.asPath == "/about" ? styles.activeLink : ""}`}>About</a>
            </Link>
            {router.asPath == "/about" ? (
              <motion.div className={styles.activeUnderline} ref={underline} layoutId="underline" />
            ) : null}
            <div className={styles.underlineOverlay} />
          </li>
          {/* <li className={`relative basis-32 ${styles.underlined}`} >
            <Link href="/#contact">
              <a className={`px-5 py-2 mx-3 my-4 text-center ${router.asPath == "/contact" ? styles.activeLink : ""}`}>Contact</a>
            </Link>
            {router.asPath == "/#contact" ? (
              <motion.div className={styles.activeUnderline} ref={underline} layoutId="underline" />
            ) : null}
            <div className={styles.underlineOverlay} />
          </li> */}
          <li>
            <button className="mx-3 my-4 button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <Link href="/Resume_ZhiyuanZhang_Design.pdf">
                  <a target="_blank" download>Resume</a>
                </Link>
            </button>
          </li>
        </ul>
      </nav>
      {/* <div style={{ width: '100vw',  boxShadow: `0 0px 3px 1px rgba(230,230,230,${opacity})` }}></div> */}
    </motion.header>
  );
}

export default Navigation;