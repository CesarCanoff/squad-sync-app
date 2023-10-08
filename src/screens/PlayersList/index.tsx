import { ButtonIconAction } from "@components/ButtonIconAction";
import { PlayerListContainer, PlayerListForm, PlayerListHeader, PlayerListNumberOfPlayers } from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";

export function PlayersList() {
  const [team, setTeam] = useState("Alfa");
  const [players, setPlayers] = useState([]);

  return (
    <PlayerListContainer>
      <Header showBackButton />

      <Highlight
        title="Group name"
        subtitle="Add people and divide them into groups"
      />

      <PlayerListForm>
        <Input
          placeholder="Player name"
          autoCorrect={false}
        />

        <ButtonIconAction icon="add" />
      </PlayerListForm>

      <PlayerListHeader>

        <FlatList
          data={["Alfa", "Bravo"]}
          horizontal
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
    </PlayerListContainer>
  )
}