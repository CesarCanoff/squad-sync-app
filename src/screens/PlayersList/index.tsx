import { useEffect, useState, useRef } from "react";
import { Alert, FlatList, TextInput } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import {
  PlayerListContainer,
  PlayerListForm,
  PlayerListHeader,
  PlayerListNumberOfPlayers
} from "./styles";

import { AppError } from "@utils/AppError";

import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { Filter } from "@components/Filter";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { EmptyList } from "@components/EmptyList";
import { PlayerCard } from "@components/PlayerCard";
import { ButtonIconAction } from "@components/ButtonIconAction";

import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { groupRemoveByName } from "@storage/group/groupRemoveByName";
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup";
import { playersGetByGroupAndTeam } from "@storage/player/playerGetByGroupAndTeam";
import { Loading } from "@components/Loading";

type RouteParams = { GROUP_NAME: string; }

export function PlayersList() {
  const [isLoading, setIsLoading] = useState(true);
  const [team, setTeam] = useState("Alfa");
  const [newPlayerName, setNewPlayerName] = useState("");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const { navigate } = useNavigation();

  const route = useRoute();
  const { GROUP_NAME } = route.params as RouteParams;

  const newPlayerNameInputRef = useRef<TextInput>(null);

  const handleAddPlayer = async () => {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert("You must enter a player name", "Please enter a player name.");
    }

    const newPlayer = { name: newPlayerName, team }

    try {
      await playerAddByGroup(GROUP_NAME, newPlayer);
      fetchPlayersByTeam();

    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert("New player", error.message);
      } else {
        console.log(error);
        Alert.alert("New player", "An error occurred while adding a new player.");
      }
    } finally {
      newPlayerNameInputRef.current?.blur();
      setNewPlayerName("");
    }
  }

  const fetchPlayersByTeam = async () => {
    setIsLoading(true);

    try {
      const playersByTeam = await playersGetByGroupAndTeam(GROUP_NAME, team);
      setPlayers(playersByTeam);

    } catch (error) {
      console.log(error);
      Alert.alert("Players", "An error occurred while loading players.");
    } finally {
      setIsLoading(false);
    }
  }

  const handleRemovePlayer = async (playerName: string) => {
    try {
      await playerRemoveByGroup(playerName, GROUP_NAME);
      fetchPlayersByTeam();

    } catch (error) {
      console.log(error);
      Alert.alert("Remove player", "An error occurred while removing a player.");
    }
  }

  const groupRemove = async () => {
    try {
      await groupRemoveByName(GROUP_NAME);
      navigate("Groups");

    } catch (error) {
      console.log(error);
      Alert.alert("Remove group", "An error occurred while removing the group.");
    }
  }

  const handleGroupRemove = async () => {
    Alert.alert(
      "Remove group",
      "Are you sure you want to remove this group?",
      [
        { text: "No", style: "cancel" },
        { text: "Yes", onPress: () => groupRemove() }
      ]
    );
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team])

  return (
    <PlayerListContainer>
      <Header showBackButton />

      <Highlight
        title={GROUP_NAME}
        subtitle="Add people and divide them into groups"
      />

      <PlayerListForm>
        <Input
          inputRef={newPlayerNameInputRef}
          placeholder="Player name"
          value={newPlayerName}
          onChangeText={setNewPlayerName}
          autoCorrect={false}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />

        <ButtonIconAction icon="add" onPress={handleAddPlayer} />
      </PlayerListForm>

      <PlayerListHeader>

        <FlatList
          data={["Alfa", "Bravo"]}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
        />
        <PlayerListNumberOfPlayers>{players.length}</PlayerListNumberOfPlayers>
      </PlayerListHeader>

      {isLoading ? <Loading /> :
        <FlatList
          data={players}
          contentContainerStyle={[
            { paddingBottom: 50 },
            players.length === 0 && { flex: 1 }
          ]}
          ListEmptyComponent={() => (
            <EmptyList message='There are no players on this team' />
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <PlayerCard name={item.name} onRemove={() => handleRemovePlayer(item.name)} />
          )}
        />

      }

      <Button
        title="Remove group"
        type="SECONDARY"
        onPress={handleGroupRemove}
      />
    </PlayerListContainer>
  )
}