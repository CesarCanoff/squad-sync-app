import { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { GroupContainer } from './styles';

import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { EmptyList } from '@components/EmptyList';

import { groupsGetAll } from '@storage/group/groupsGetAll';
import { Loading } from '@components/Loading';

export function Groups() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);

  const { navigate } = useNavigation();

  const handleNavigateNewGroup = () => navigate('NewGroup');

  const handleNavigatePlayersList = (groupName: string) => {
    navigate('PlayersList', { GROUP_NAME: groupName });
  }

  const fetchGroupOnAsyncStorage = async () => {
    setIsLoading(true);

    try {
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroupOnAsyncStorage();
    }, []));

  return (
    <GroupContainer>
      <Header />

      <Highlight
        title='Groups'
        subtitle='Play with your group'
      />

      {isLoading ? <Loading /> :
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
              onPress={() => handleNavigatePlayersList(item)}
            />
          )}
        />

      }

      <Button title='Create group' onPress={handleNavigateNewGroup} />
    </GroupContainer>
  );
}