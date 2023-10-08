import { useState } from "react";
import { Alert } from "react-native";

import { NewGroupContainer, NewGroupContent, NewGroupIcon } from "./styles";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { useNavigation } from "@react-navigation/native";

export function NewGroup() {
  const { navigate } = useNavigation();

  const [groupName, setGroupName] = useState('');

  const handleGoToPlayersListScreen = () => navigate('PlayersList', 
  { GROUP_NAME: groupName });

  return (
    <NewGroupContainer>
      <Header showBackButton />

      <NewGroupContent>
        <NewGroupIcon />

        <Highlight
          title="Create group"
          subtitle="Create a group for add players"
        />

        <Input
          placeholder="Group name"
          maxLength={20}
          defaultValue={groupName}
          value={groupName}
          onChangeText={setGroupName}
        />

        <Button
          title="Create group"
          onPress={() => groupName
            ? handleGoToPlayersListScreen()
            : Alert.alert(
              'Group name is required',
              'Please, enter a group name'
            )}
          style={{ marginTop: 15 }}
        />
      </NewGroupContent>

    </NewGroupContainer>
  )
}
