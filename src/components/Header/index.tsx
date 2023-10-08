import { useNavigation } from '@react-navigation/native';
import { BackButton, BackIcon, HeaderContainer, HeaderLogo } from './styles';

import Logo from '@assets/logo.png';

type Props = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
  const { navigate } = useNavigation();

  const handleGoBackToGroupsScreen = () => navigate('Groups');

  return (
    <HeaderContainer>
      {showBackButton &&
        <BackButton onPress={handleGoBackToGroupsScreen}>
          <BackIcon />
        </BackButton>
      }
      <HeaderLogo source={Logo} />
    </HeaderContainer>
  );
}