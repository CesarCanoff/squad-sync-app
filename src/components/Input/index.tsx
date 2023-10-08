import { TextInputProps } from "react-native";

import { useTheme } from "styled-components";

import { InputContainer } from "./styles";

export function Input({ ...rest }: TextInputProps) {
  const theme = useTheme();

  return (
    <InputContainer
      placeholderTextColor={theme.COLORS.GRAY_200}
      {...rest}

    />
  )
}