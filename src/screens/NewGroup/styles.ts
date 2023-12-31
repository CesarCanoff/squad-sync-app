import styled from 'styled-components/native';
import { UsersThree } from 'phosphor-react-native';

export const NewGroupContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_800};
  padding: 24px;
`;

export const NewGroupContent = styled.View`
  flex: 1;
  justify-content: center;
`;

export const NewGroupIcon = styled(UsersThree).attrs(({ theme }) => ({
  size: 56,
  color: theme.COLORS.BLUE_500,
}))`
  align-self: center;
`;
