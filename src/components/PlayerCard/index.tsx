import { ButtonIconAction } from "@components/ButtonIconAction";
import {
  PlayerCardContainer,
  PlayerCardIcon,
  PlayerCardPlayerName
} from "./styles";

type Props = {
  name: string;
  onRemove: () => void;
}

export function PlayerCard({ name, onRemove }: Props) {
  return (
    <PlayerCardContainer>
      <PlayerCardIcon name="person" />
      <PlayerCardPlayerName>{name}</PlayerCardPlayerName>
      <ButtonIconAction icon="close" type="SECONDARY" onPress={onRemove} />
    </PlayerCardContainer>
  )

}