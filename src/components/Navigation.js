import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useCycle } from "framer-motion";
import Link from 'next/link';
import Image from "next/image";
import { useRouter } from "next/router";
import styles from './Navigation.module.css';
import { MenuToggle } from "./MenuToggle";
import logo from '../../public/logo.svg';

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

  // const sidebar = {
  //   open: (height = 1000) => ({
  //     clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
  //     transition: {
  //       type: "spring",
  //       stiffness: 20,
  //       restDelta: 2
  //     }
  //   }),
  //   closed: {
  //     clipPath: "circle(30px at 40px 40px)",
  //     transition: {
  //       delay: 0.5,
  //       type: "spring",
  //       stiffness: 400,
  //       damping: 40
  //     }
  //   }
  // };

  const [isOpen, toggleOpen] = useCycle(false, true);

  const staggerChildren = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const childrenVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  const navVariants = {
    open: {
      background: '#fff',
      height: "100vh",
      transition: {
        duration: 0.3
      }
    },
    closed: {
      height: "4.5rem",
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <motion.header
      style={{ background: `rgba(255,255,255,${opacity})` }}
      ref={target}
      className='fixed w-screen z-50 drop-shadow-sm font-heading'
      variants={variants}
      animate={visible ? "visible" : "hidden"}
      transition={{ ease: "easeOut", duration: 0.4 }}
    >
      <motion.nav
        className="tablet:hidden flex flex-row items-center justify-center"
        style={{ background: `rgba(255,255,255,${opacity})` }}
        ref={target}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={navVariants}
      >
        <div className="absolute top-0 w-[40px] m-3"><Image src={logo} alt="Logo of Zhiyuan Zhang, looks like two letter Z stacked together. One Z is orange, and the other is blue." fill /></div>
        <MenuToggle className="absolute top-0 right-0 p-2 m-4" toggle={() => toggleOpen()} />
        <motion.ul
          variants={staggerChildren}
          className={`px-6 flex flex-col justify-center items-center text-xl text-outline-dark font-medium z-50`}>
          <motion.li
            variants={childrenVariants}
            className={`relative basis-24 flex justify-center ${styles.underlined} ${isOpen ? '' : 'hidden'}`} >
            <Link href="/">
              <a className={`px-5 py-2 mx-3 my-4 text-center ${router.asPath == "/" ? styles.activeLink : ""}`}>Home</a>
            </Link>
            {router.asPath == "/" ? (
              <motion.div className={styles.activeUnderline} ref={underline} layoutId="underline" />
            ) : null}
            <div className={styles.underlineOverlay} />
          </motion.li>
          <motion.li
            variants={childrenVariants}
            className={`relative basis-24 flex justify-center ${styles.underlined} ${isOpen ? '' : 'hidden'}`} >
            <Link href="/about">
              <a className={`px-5 py-2 mx-3 my-4 text-center ${router.asPath == "/about" ? styles.activeLink : ""}`}>About</a>
            </Link>
            {router.asPath == "/about" ? (
              <motion.div className={styles.activeUnderline} ref={underline} layoutId="underline" />
            ) : null}
            <div className={styles.underlineOverlay} />
          </motion.li>
          <motion.li
            variants={childrenVariants}
          >
            <button className={`mx-3 my-4 button ${isOpen ? '' : 'hidden'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              <Link href="/Resume_ZhiyuanZhang_Design.pdf">
                <a target="_blank" download>Resume</a>
              </Link>
            </button>
          </motion.li>
        </motion.ul>
      </motion.nav>
      <nav
        className="hidden tablet:block"
        style={{ background: `rgba(255,255,255,${opacity})` }}
        ref={target}
      >
        <motion.ul
          className={`px-6 flex fle4-row justify-end items-center right-0 text-xl text-outline-dark font-medium z-50`}>
          <li className={`relative basis-32 ${styles.underlined}`} >
            <Link href="/">
              <a className={`px-5 py-2 mx-3 my-4 text-center ${router.asPath == "/" ? styles.activeLink : ""}`}>Home</a>
            </Link>
            {router.asPath == "/" ? (
              <motion.div className={styles.activeUnderline} ref={underline} layoutId="underline" />
            ) : null}
            <div className={styles.underlineOverlay} />
          </li>
          <li className={`relative basis-32 ${styles.underlined}`} >
            <Link href="/about">
              <a className={`px-5 py-2 mx-3 my-4 text-center ${router.asPath == "/about" ? styles.activeLink : ""}`}>About</a>
            </Link>
            {router.asPath == "/about" ? (
              <motion.div className={styles.activeUnderline} ref={underline} layoutId="underline" />
            ) : null}
            <div className={styles.underlineOverlay} />
          </li>
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
        </motion.ul>
      </nav>
    </motion.header>
  );
}

export default Navigation;