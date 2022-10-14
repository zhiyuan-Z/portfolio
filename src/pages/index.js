import Head from 'next/head'
import Image from 'next/image'
import ProjectListings from '../components/ProjectListings'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import logo from '../../public/logo.svg'

export default function Home() {

  return (
    <div className="font-body relative overflow-hidden">
      <Head>
        <title>Zhiyuan Zhang</title>
        <meta name="description" content="Zhiyuan Zhang's portfolio. Gradute student at University of Michigan. Focus on UX Design / HCI / App Development." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navigation />

      <main>
        <div className="h-screen w-full px-8 grid grid-cols-12 gap-[24px] justify-items-center content-center relative">
          {/* <img className="col-start-2 col-end-5 m-auto justify-self-end" src="logo.svg" alt="logo of Zhiyuan Zhang" width="290" height="320"/> */}
          <div className="col-start-2 col-end-5 justify-self-end self-center">
            <Image src={logo} alt="Logo of Zhiyuan Zhang, looks like two letter Z stacked together. One Z is orange, and the other is blue." width="290" height="320" />
          </div>
          <div className="col-start-5 col-end-11 ml-16 justify-self-start self-center flex flex-col gap-4">
            <h1 className="font-heading text-6xl font-normal my-2">
              Hi, I&apos;m <span className="inline-block"><span className="text-orange">Zhiyuan</span> <span className='text-blue'>Zhang!</span></span>
            </h1>
            <h2 className="text-2xl font-light my-2">
              {/* I find balance between humanity and technology to make delightful designs for people. */}
              {/* I create delightful products that combine technologies from the user&apos;s perspective. */}
              I am passionate about bringing technology and humanism together to create elegant and enjoyable products.
            </h2>
          </div>
          <div className="absolute -top-[15%] -left-[20%] w-1/2 h-1/2 bg-orange rounded-full mix-blend-multiply filter blur-5xl opacity-100 skew-y-12 rotate-[120deg] -z-50"></div>
          <div className="absolute -bottom-[15%] -right-[15%] w-1/2 h-1/2 bg-blue rounded-full mix-blend-multiply filter blur-5xl opacity-100 skew-y-12 rotate-[120deg] -z-50"></div>
        </div>
        <ProjectListings home />
      </main>
      <Footer />

    </div>
  )
}
