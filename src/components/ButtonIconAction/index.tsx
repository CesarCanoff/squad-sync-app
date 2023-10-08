import {
  ButtonIconActionContainer,
  ButtonIconActionStyleProps,
  ButtonIconActionIcon
} from "./styles";

import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconActionStyleProps;
}

export function ButtonIconAction({ icon, type = 'PRIMARY', ...rest }: Props) {
  return (
    <ButtonIconActionContainer {...rest} type={type}>
      <ButtonIconActionIcon
        name={icon}
        type={type}
      />
    </ButtonIconActionContainer>
  );
}