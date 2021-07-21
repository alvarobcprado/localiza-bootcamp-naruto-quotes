import { string } from "prop-types";

const Button = ({ children, onclick }) => {
  return <button>{children}</button>;
};

export default Button;

Button.propTypes = {
  children: string,
};
