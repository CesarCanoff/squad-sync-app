import styled from 'styled-components/native';

import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export type ButtonIconActionStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonIconActionStyleProps;
};

export const ButtonIconActionContainer = styled(TouchableOpacity)<Props>`
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;

  margin-left: 12px;
`;

export const ButtonIconActionIcon = styled(MaterialIcons).attrs<Props>(
  ({ theme, type }) => ({
    size: 24,
    color: type === 'PRIMARY' ? theme.COLORS.BLUE_500 : theme.COLORS.RED,
  })
)``;
