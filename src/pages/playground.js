import List from "../components/List";
import Carousel from "../components/Carousel";
import LightBox from "../components/LightBox";
import Meta from "../components/Meta";

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
  const meta = [
    {
      key: 'Team',
      value: 'Zhiyuan Zhang, Botao Lu, Xintong Li, Ziqi Li'
    },
    {
      key: 'My Role',
      value: 'Research, community/interaction design'
    },
    {
      key: 'Duration',
      value: '1.5 months'
    },
    {
      key: 'Tools',
      value: 'Figma, paper'
    },
  ]
  // return <LightBox images={qoc}/>;
  return (
  <div className="bg-orange-light ">
    <div className="w-[1000px] m-auto">
    <Meta meta={meta}/>
    </div>
    </div>
    );
}

export default Playground;
