import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonText, ButtonStyleTypes } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  type?: ButtonStyleTypes;
}

export function Button({ title, type = 'PRIMARY', ...rest }: ButtonProps) {
  return (
    <ButtonContainer {...rest} type={type}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  )
}