import { GroupCardContainer, GroupCardTitle, GroupCardIcon } from './styles';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
  title: string;
}

export function GroupCard({ title, ...rest }: Props) {
  return (
    <GroupCardContainer {...rest}>
      <GroupCardIcon />
      <GroupCardTitle>{title}</GroupCardTitle>
    </GroupCardContainer>
  );
}