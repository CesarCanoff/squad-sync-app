import { useState } from "react";
import { FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";

import {
  PlayerListContainer,
  PlayerListForm,
  PlayerListHeader,
  PlayerListNumberOfPlayers
} from "./styles";

import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { Filter } from "@components/Filter";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { EmptyList } from "@components/EmptyList";
import { PlayerCard } from "@components/PlayerCard";
import { ButtonIconAction } from "@components/ButtonIconAction";

type RouteParams = {
  GROUP_NAME: string;
}

export function PlayersList() {
  const [team, setTeam] = useState("Alfa");
  const [players, setPlayers] = useState([]);

  const route = useRoute();
  const { GROUP_NAME } = route.params as RouteParams;

  return (
    <PlayerListContainer>
      <Header showBackButton />

      <Highlight
        title={GROUP_NAME}
        subtitle="Add people and divide them into groups"
      />

      <PlayerListForm>
        <Input
          placeholder="Player name"
          autoCorrect={false}
        />

        <ButtonIconAction icon="add" onPress={() => { }} />
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
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => { }} />
        )}
      />

      <Button title="Remove group" type="SECONDARY" />
    </PlayerListContainer>
  )
}