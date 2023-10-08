import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export const InputContainer = styled(TextInput)`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.MD}px;
    background-color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}

  border-radius: 7px;
  margin-bottom: 16px;
  padding: 18px;
`;
