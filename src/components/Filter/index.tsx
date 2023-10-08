import { TouchableOpacityProps } from "react-native";

import { FilterContainer, FilterStyleProps, FilterTitle } from "./styles";

type Props = TouchableOpacityProps & FilterStyleProps & {
  title: string;
};

export function Filter({ title, isActive = false, ...rest }: Props) {
  return (
    <FilterContainer {...rest} isActive={isActive}>
      <FilterTitle>{title}</FilterTitle>
    </FilterContainer>
  );
}