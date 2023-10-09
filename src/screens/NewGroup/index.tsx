import { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { NewGroupContainer, NewGroupContent, NewGroupIcon } from "./styles";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";

import { groupCreate } from "@storage/group/groupCreate";

import { AppError } from "@utils/AppError";

export function NewGroup() {
  const { navigate } = useNavigation();

  const [groupName, setGroupName] = useState('');

  const handleGoToPlayersListScreen = async () => {
    try {
      if (groupName.trim().length === 0) {
        Alert.alert(
          'Please, enter a group name',
          'Enter a group name to continue'
        )
      }

      await groupCreate(groupName);
      navigate('PlayersList', { GROUP_NAME: groupName });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert(
          'Group already exists',
          'Please, enter a new group name'
        );
      } else {
        Alert.alert(
          'Unexpected error',
          'Please, try again later'
        );

        console.error(error);
      }
    }
  }

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
          onPress={handleGoToPlayersListScreen}

          style={{ marginTop: 15 }}
        />
      </NewGroupContent>

    </NewGroupContainer>
  )
}
