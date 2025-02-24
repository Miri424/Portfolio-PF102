import "../../../assets/scss/main.scss";
import "./preview.scss";

const Preview = () => {
  return (
    <div className="w-100 mw-1200 mx-auto ">
      <div className="flex-box mt-12">
        <div className="preview-image">
          <img src="https://preview.colorlib.com/theme/estore/assets/img/gallery/gallery1.jpg" />
        </div>
        <div className="preview-image">
          <img src="https://preview.colorlib.com/theme/estore/assets/img/gallery/gallery2.jpg" />
        </div>
        <div className="preview-image">
          <img src="https://preview.colorlib.com/theme/estore/assets/img/gallery/gallery3.jpg" />
        </div>
        <div className="preview-image">
          <img src="https://preview.colorlib.com/theme/estore/assets/img/gallery/gallery4.jpg" />
        </div>
        <div className="preview-image">
          <img src="https://preview.colorlib.com/theme/estore/assets/img/gallery/gallery5.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Preview;
