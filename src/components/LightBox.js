import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom';
import dynamic from 'next/dynamic';

const LightGallery = dynamic(() => import('lightgallery/react'), {
  ssr: false
});

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

const LightBox = ({ images, border, width }) => {
  return (
    <div className={[`my-6 px-2 flex flex-col justify-center items-center mx-auto`]}>
      <LightGallery
        mode="lg-fade"
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames={`flex flex-row gap-4 w-[${width}]`}
        licenseKey="0BB4AF29-8F084112-9BD59D1E-63D2ED15">
        {images?.map((image, index) => (
          <a
            // data-lg-size
            className={`gallery-item transition-all hover:scale-105 rounded-md ${border ? 'border-2' : ''}`}
            data-src={image.url}
            data-sub-html={image.subHtml}
            key={index}>
            <img
              className="img-responsive cursor-pointer"
              src={image.url}
            />
          </a>
        ))}
      </LightGallery>
    </div>
  );
}

export default LightBox;