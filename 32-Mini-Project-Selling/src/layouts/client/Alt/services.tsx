import {
  FaOpencart,
  FaTimes,
  FaClock,
  FaCheck,
  FaBriefcase,
  FaCloudUploadAlt,
} from "react-icons/fa";
import "./index.scss"

const OurServices = () => {
  return (
    <div className="main-holder">
      <div className="title-holder">
        <p className="small-title">OUR SERVICES</p>
        <h1 className="big-title">We Offer Services</h1>
      </div>

      <div className="services-holder">
        <div className="row-holder">
          <div className="service-box">
            <div className="icon-holder">
              <FaOpencart className="orange-icon" />
            </div>
            <div className="text-holder">
              <h3 className="service-title">Business Consulting</h3>
              <p className="service-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </p>
              <a href="#" className="link-holder">
                Learn More
              </a>
            </div>
          </div>

          <div className="service-box">
            <div className="icon-holder">
              <FaTimes className="orange-icon" />
            </div>
            <div className="text-holder">
              <h3 className="service-title">Market Analysis</h3>
              <p className="service-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </p>
              <a href="#" className="link-holder">
                Learn More
              </a>
            </div>
          </div>

          <div className="service-box">
            <div className="icon-holder">
              <FaClock className="orange-icon" />
            </div>
            <div className="text-holder">
              <h3 className="service-title">User Monitoring</h3>
              <p className="service-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </p>
              <a href="#" className="link-holder">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="row-holder">
          <div className="service-box">
            <div className="icon-holder">
              <FaCheck className="orange-icon" />
            </div>
            <div className="text-holder">
              <h3 className="service-title">Seller Consulting</h3>
              <p className="service-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </p>
              <a href="#" className="link-holder">
                Learn More
              </a>
            </div>
          </div>

          <div className="service-box">
            <div className="icon-holder">
              <FaBriefcase className="orange-icon" />
            </div>
            <div className="text-holder">
              <h3 className="service-title">Financial Investment</h3>
              <p className="service-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </p>
              <a href="#" className="link-holder">
                Learn More
              </a>
            </div>
          </div>

          <div className="service-box">
            <div className="icon-holder">
              <FaCloudUploadAlt className="orange-icon" />
            </div>
            <div className="text-holder">
              <h3 className="service-title">Financial Management</h3>
              <p className="service-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </p>
              <a href="#" className="link-holder">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
