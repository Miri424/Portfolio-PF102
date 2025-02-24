import "../../assets/scss/components/button.scss";
import "../../assets/scss/base/utilities.scss";


const Button = ({ text }) => {
  return (
    <button className="button font-400 font-size-18">{text}</button>
  )
}

export const SignInBtn = () => {
  return (
    <button className="sign-in-btn font-400 font-size-18">Sign</button>
  )
}

export default Button;
