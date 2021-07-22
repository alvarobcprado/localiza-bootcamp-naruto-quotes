import { string } from "prop-types";
import ButtonStyled from "./styles";

const Button = ({ children, onUpdate }) => {
  return (
    <ButtonStyled onClick={onUpdate}>
      {children}
    </ButtonStyled>
  );
};

export default Button;

Button.propTypes = {
  children: string,
};
