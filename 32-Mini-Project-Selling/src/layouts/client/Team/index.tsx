import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import "./index.scss"

const Leadership = () => {
  return (
    <div className="team-container">
      <div className="team-header">
        <p className="team-subheading">TEAM</p>
        <h2 className="team-heading">Leadership</h2>
      </div>

      <div className="team-members">
        <div className="team-member">
          <img
            src="https://preview.colorlib.com/theme/selling/images/person_2.jpg"
            alt="John Rooster"
            className="member-image"
          />
          <h3 className="member-name">John Rooster</h3>
          <p className="member-role">CO-FOUNDER, PRESIDENT</p>
          <p className="member-description">
            Nisi at consequatur unde molestiae quidem provident voluptatum
            deleniti quo iste error eos est praesentium distinctio cupiditate
            tempore suscipit inventore deserunt tenetur.
          </p>
          <div className="member-socials">
            <a href="#" className="social-link">
              <FaFacebookF />
            </a>
            <a href="#" className="social-link">
              <FaTwitter />
            </a>
            <a href="#" className="social-link">
              <FaLinkedinIn />
            </a>
            <a href="#" className="social-link">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="team-member">
          <img
            src="https://preview.colorlib.com/theme/selling/images/person_3.jpg"
            alt="Tom Sharp"
            className="member-image"
          />
          <h3 className="member-name">Tom Sharp</h3>
          <p className="member-role">CO-FOUNDER, COO</p>
          <p className="member-description">
            Nisi at consequatur unde molestiae quidem provident voluptatum
            deleniti quo iste error eos est praesentium distinctio cupiditate
            tempore suscipit inventore deserunt tenetur.
          </p>
          <div className="member-socials">
            <a href="#" className="social-link">
              <FaFacebookF />
            </a>
            <a href="#" className="social-link">
              <FaTwitter />
            </a>
            <a href="#" className="social-link">
              <FaLinkedinIn />
            </a>
            <a href="#" className="social-link">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="team-member">
          <img
            src="https://preview.colorlib.com/theme/selling/images/person_4.jpg"
            alt="Winston Hodson"
            className="member-image"
          />
          <h3 className="member-name">Winston Hodson</h3>
          <p className="member-role">MARKETING</p>
          <p className="member-description">
            Nisi at consequatur unde molestiae quidem provident voluptatum
            deleniti quo iste error eos est praesentium distinctio cupiditate
            tempore suscipit inventore deserunt tenetur.
          </p>
          <div className="member-socials">
            <a href="#" className="social-link">
              <FaFacebookF />
            </a>
            <a href="#" className="social-link">
              <FaTwitter />
            </a>
            <a href="#" className="social-link">
              <FaLinkedinIn />
            </a>
            <a href="#" className="social-link">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
