import Head from 'next/head'
import Image from 'next/image'
import ProjectListings from '../components/ProjectListings'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import logo from '../../public/logo.svg'
import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function Home() {
  const homeRef = useRef(null);
  const workRef = useRef(null);

  const subtitle = "I am passionate about bringing technology and humanism together to create elegant and enjoyable products.";

  const ScrollingMouse = () => {
    return (
      <motion.svg
        width="40"
        height="100%"
        viewBox="0 0 247 390"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ cursor: "pointer" }}
        whileHover={{
          y: -5,
          transition: {
            yoyo: Infinity,
            ease: "easeOut",
            duration: 0.3,
          },
        }}
      >
        <motion.path
          animate={{
            y: [-50, -10, 0, 50],
            opacity: [0, 0.8, 1, 0]
          }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1,
          }}
          className="stroke-outline" id="wheel" d="M123.359,79.775l0,72.843" strokeWidth='20px' />
        <path className="stroke-outline" id="mouse" d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" strokeWidth='20px' />
      </motion.svg>
    )
  }

  const logoVariants = {
    offscreen: {
      opacity: 0
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const titleVariants = {
    offscreen: {
      y: "100%",
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        delay: 0.25,
        duration: 0.5
      }
    }
  }

  const subtitleVariants = {
    offscreen: {
      opacity: 1
    },
    onscreen: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.015
      }
    }
  }

  const letterVariants = {
    offscreen: {
      y: "100%",
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1
      }
    }
  }

  const buttonVariants = {
    offscreen: {
      y: "50%",
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        delay: 2.25,
        // ease: "easeInOut",
        duration: 2.5
      }
    }
  }

  return (
    <div className="font-body relative overflow-hidden">
      <Head>
        <title>Zhiyuan Zhang</title>
        <meta name="description" content="Zhiyuan Zhang's portfolio. Gradute student at University of Michigan. Focus on UX Design / HCI / App Development." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navigation />

      <main className='scroll'>
        <div className='h-screen relative snap-y snap-mandatory overflow-y-auto overflow-x-hidden scroll-smooth'>
          <motion.div
            ref={homeRef}
            className="snap-start h-screen w-full px-8 grid tablet:grid-cols-12 tablet:gap-[24px] justify-items-center content-center relative"
            initial="offscreen"
            whileInView="onscreen">
            {/* <img className="col-start-2 col-end-5 m-auto justify-self-end" src="logo.svg" alt="logo of Zhiyuan Zhang" width="290" height="320"/> */}
            <motion.div
              className="hidden tablet:block tablet:col-start-2 tablet:col-end-5 justify-self-end self-center"
              variants={logoVariants}
            >
              <Image src={logo} alt="Logo of Zhiyuan Zhang, looks like two letter Z stacked together. One Z is orange, and the other is blue." width="290" height="320" />
            </motion.div>
            <div className="col-start-0 tablet:col-start-5 tablet:col-end-11 tablet:ml-16 justify-self-start self-center flex flex-col gap-4">
              <div className=' overflow-hidden'>
                <motion.h1
                  className="font-heading text-6xl font-normal my-2"
                  variants={titleVariants}
                >
                  Hi, I&apos;m <span className="inline-block"><span className="text-orange">Zhiyuan</span> <span className='text-blue'>Zhang!</span></span>
                </motion.h1>
              </div>
              <motion.h2
                className="font-heading text-2xl font-light my-2"
                variants={subtitleVariants}
              >
                {subtitle.split("").map((char, index) => (
                  <span key={index} className={char == " " ? "inline overflow-hidden" : "inline-block overflow-hidden"}>
                    <motion.span className={char == " " ? "inline" : "inline-block"} variants={letterVariants}>
                      {char}
                    </motion.span>
                  </span>
                ))}
              </motion.h2>
            </div>
            <motion.div
              className='absolute bottom-8 tablet:bottom-[5%] flex flex-col items-center gap-2 cursor-pointer'
              variants={buttonVariants}
            >
              <div onClick={() => workRef.current.scrollIntoView()}><ScrollingMouse /></div>
              <div className='hidden laptop:block font-heading text-xl font-semibold text-outline'>Scroll</div>
            </motion.div>
            <div className="absolute -top-[15%] -left-[20%] w-1/2 h-1/2 bg-orange rounded-full mix-blend-multiply filter blur-5xl opacity-100 skew-y-12 rotate-[120deg] -z-50"></div>
            <div className="absolute -bottom-[15%] -right-[15%] w-1/2 h-1/2 bg-blue rounded-full mix-blend-multiply filter blur-5xl opacity-100 skew-y-12 rotate-[120deg] -z-50"></div>
          </motion.div>
          <div ref={workRef} className='snap-start min-h-screen flex flex-col pt-[4.5rem] tablet:pt-24 m-auto items-center relative'>
            <ProjectListings className="" home />
          </div>
          <Footer className="border-t-4 border-orange snap-start" />
        </div>
      </main>

    </div>
  )
}
