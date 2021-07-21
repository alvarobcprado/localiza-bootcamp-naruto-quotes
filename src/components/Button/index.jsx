import { string } from "prop-types";
import ButtonStyled from "./styles";

const Button = ({ children }) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};

export default Button;

Button.propTypes = {
  children: string,
};
