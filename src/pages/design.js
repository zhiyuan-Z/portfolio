import Head from "next/head";
import Navigation from '../components/Navigation'
import ProjectListings from "../components/ProjectListings";
import Footer from '../components/Footer'

export default function Design() {
  return (
    <div className="font-body relative overflow-hidden">
      <Head>
        <title>Zhiyuan Zhang - Design</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navigation />

      <main>
        <ProjectListings />
      </main>
      <Footer />

    </div>
  )
}