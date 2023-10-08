import { HighlightContainer, HighlightTitle, HighlightSubtitle } from './styles';

type Props = {
  title: string;
  subtitle: string;
}

export function Highlight({ title, subtitle }: Props) {
  return (
    <HighlightContainer>
      <HighlightTitle>{title}</HighlightTitle>
      <HighlightSubtitle>{subtitle}</HighlightSubtitle>
    </HighlightContainer>
  );
}