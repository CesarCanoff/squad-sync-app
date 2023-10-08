import { EmptyListContainer, EmptyListMessage } from './styles';

type Props = {
  message: string;
}

export function EmptyList({ message }: Props) {
  return (
    <EmptyListContainer>
      <EmptyListMessage>{message}</EmptyListMessage>
    </EmptyListContainer>
  )
}