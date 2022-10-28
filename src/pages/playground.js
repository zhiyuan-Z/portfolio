import List from "../components/List";
import Carousel from "../components/Carousel";
import LightBox from "../components/LightBox";
import Meta from "../components/Meta";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const Playground = () => {
  // return <Carousel />;\
  // const qoc = [
  //   {
  //     url: '/coursecompass/cc_qoc_1.png',
  //     subHtml: '<div>bababba</div>'
  //   },
  //   {
  //     url: '/coursecompass/cc_qoc_2.png',
  //     subHtml: '<div>bababba</div>'
  //   },
  //   {
  //     url: '/coursecompass/cc_qoc_3.png',
  //     subHtml: '<div>bababba</div>'
  //   },
  // ]
  // const meta = [
  //   {
  //     key: 'Team',
  //     value: 'Zhiyuan Zhang, Botao Lu, Xintong Li, Ziqi Li'
  //   },
  //   {
  //     key: 'My Role',
  //     value: 'Research, community/interaction design'
  //   },
  //   {
  //     key: 'Duration',
  //     value: '1.5 months'
  //   },
  //   {
  //     key: 'Tools',
  //     value: 'Figma, paper'
  //   },
  // ]
  // return <LightBox images={qoc}/>;
  const [on, setOn] = useState(false);
  const { scrollY } = useScroll();
  useEffect(() => {
    console.log('!')
    return scrollY.onChange(() => {
      console.log(scrollY.current);
      if (scrollY.current > 50) {
        setOn(true);
      } else {
        setOn(false);
      }
    })
  })
  return (
    // <div className="bg-orange-light ">
    //   <div className="w-[1000px] m-auto">
    //   <Meta meta={meta}/>
    //   </div>
    //   </div>
    <>
      <div className="h-screen">
        <div
          className={`fixed flex ${on ? 'flex-row justify-end text-xl gap-4' : 'flex-col justify-evenly text-5xl items-end mr-64 my-32 gap-16'}`}
        // onClick={() => setOn(!on)}
        >
        <motion.div className={`bg-orange-light`} layout transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }} animate={{width: on ? '80px' : '500px'}}>{on ? 'Work' : 'Check out my work'}</motion.div>
        <motion.div className={`bg-orange-light`} layout transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }} animate={{width: on ? '80px' : '500px'}}>{on ? 'About' : 'About me'}</motion.div>
        <motion.div className={`bg-orange-light`} layout transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }} animate={{width: on ? '80px' : '500px'}}>Resume</motion.div>
        </div>
      </div>
      <div className="h-screen"></div>
    </>
  );
}

export default Playground;
