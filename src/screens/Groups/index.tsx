import { useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { GroupContainer } from './styles';

import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { EmptyList } from '@components/EmptyList';

export function Groups() {
  const [groups, setGroups] = useState([]);

  const { navigate } = useNavigation();

  const handleNavigateNewGroup = () => navigate('NewGroup');

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

      <Button title='Create group' onPress={handleNavigateNewGroup} />
    </GroupContainer>
  );
}
