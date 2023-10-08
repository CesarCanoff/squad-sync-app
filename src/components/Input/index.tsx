import { TextInputProps } from "react-native";

import { useTheme } from "styled-components";

import { InputContainer } from "./styles";

export function Input({ ...rest }: TextInputProps) {
  const { COLORS } = useTheme();

  return (
    <InputContainer
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}

    />
  )
}