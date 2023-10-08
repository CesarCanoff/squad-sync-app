import { useState } from 'react';
import { FlatList, Text } from 'react-native';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';

import { GroupContainer } from './styles';
import { EmptyList } from '@components/EmptyList';
import { Button } from '@components/Button';

export function Group() {
  const [groups, setGroups] = useState(['freeCodeCamp.org', 'RaseK Team']);

  return (
    <GroupContainer>
      <Header />

      <Highlight
        title='Groups'
        subtitle='Play with your group'
      />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <EmptyList message='No group, how about registering one?' />
        )}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
            onPress={() => { }}
          />
        )}
      />

      <Button title='Create group' />
    </GroupContainer>
  );
}
