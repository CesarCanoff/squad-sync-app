import { CaretLeft } from 'phosphor-react-native';
import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const HeaderLogo = styled.Image`
  width: 45px;
  height: 45px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.WHITE,
}))``;
