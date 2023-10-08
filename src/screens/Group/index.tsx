import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';

import { GroupContainer } from './styles';

export function Group() {
  return (
    <GroupContainer>
      <Header />

      <Highlight
        title="Grupos"
        subtitle="Jogue com o seu grupo"
      />

      <GroupCard
        title="CoD Warzone"
        onPress={() => {}}
      />
    </GroupContainer>
  );
}
