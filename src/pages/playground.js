import List from "../components/List";
import Carousel from "../components/Carousel";
import LightGallery from "../components/LightGallery";

export default () => {
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
  return <LightGallery images={qoc}/>;
}