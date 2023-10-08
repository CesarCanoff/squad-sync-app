import { BackButton, BackIcon, HeaderContainer, HeaderLogo } from './styles';

import Logo from '@assets/logo.png';

type Props = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {

  return (
    <HeaderContainer>
      {showBackButton &&
        <BackButton>
          <BackIcon />
        </BackButton>
      }
      <HeaderLogo source={Logo} />
    </HeaderContainer>
  );
}