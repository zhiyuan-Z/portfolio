import List from "../components/List";
import Carousel from "../components/Carousel";
import LightBox from "../components/LightBox";

const Playground = () => {
  // return <Carousel />;\
  const qoc = [
    {
      url: '/coursecompass/cc_qoc_1.png',
      subHtml: '<div>bababba</div>'
    },
    {
      url: '/coursecompass/cc_qoc_2.png',
      subHtml: '<div>bababba</div>'
    },
    {
      url: '/coursecompass/cc_qoc_3.png',
      subHtml: '<div>bababba</div>'
    },
  ]
  return <LightBox images={qoc}/>;
}

export default Playground;