import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type ButtonStyleTypes = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonStyleTypes;
};

export const ButtonContainer = styled(TouchableOpacity)<Props>`
  flex: 1;

  min-width: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.BLUE_500 : theme.COLORS.RED_DARK};

  border-radius: 6px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
