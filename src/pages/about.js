import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import myPhoto from '../../public/my_photo.jpg'
import Footer from '../components/Footer'

export default function About() {

  return (
    <div className="font-sans relative overflow-hidden">
      <Head>
        <title>About - Zhiyuan Zhang</title>
        <meta name="description" content="About Zhiyuan Zhang" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navigation />

      <main>
        <div className="min-h-screen w-full px-8 grid grid-cols-12 gap-[24px] justify-items-center content-center relative">
          <div className="col-start-2 col-end-5 justify-self-end self-center relative">
            <Image src={myPhoto} alt="Picture of Zhiyuan." width="600px" height="800px" />
          </div>
          <div className="col-start-5 col-end-12 ml-16 justify-self-start">
            <h1 className="font-mont text-3xl font-normal mb-4 inline">
              Hi, there!<br />I am <span className="inline-block"><span className="text-orange">Zhiyuan</span> <span className='text-light-blue'>Zhang</span></span>, a designer and developer.
            </h1>
            <div className="text-xl font-normal my-2">

              <p className="mb-3">
                I am a master&apos;s student at University of Michigan School of Information. My focus is on User Experience Design, Human Computer Interaction and App Development.
              </p>
              <p className="mb-3">
                Before entering University of Michigan, I majored in Electrical and Computer Engineering at Shanghai Jiao Tong University, with two minors in Computer Science and Data Science.
              </p>
              <p className="mb-3">
                I love designing from users&apos; perspectives and solving ambiguous, challenging problems. I combine technology with humanism in my designs.
              </p>
              <p className="mb-3">
                My skills include interaction design, graphic design, web design, accessibility, online community design, AR/VR development, application development and data analysis. I am always open to challenges and learning new things.
              </p>
              <Link href="/ZhiyuanZhang_Resume_815.pdf">
                <a className="text-light-blue hover:underline focus-within:underline" target="_blank" download>Download Resume</a>
              </Link>
            </div>
          </div>
          <div className="absolute -top-[15%] -left-[20%] w-1/2 h-1/2 bg-orange rounded-full mix-blend-multiply filter blur-5xl opacity-100 skew-y-12 rotate-[120deg] -z-50"></div>
          <div className="absolute -bottom-[15%] -right-[15%] w-1/2 h-1/2 bg-light-blue rounded-full mix-blend-multiply filter blur-5xl opacity-100 skew-y-12 rotate-[120deg] -z-50"></div>
        </div>
      </main>
      <Footer />

    </div>
  )
}
