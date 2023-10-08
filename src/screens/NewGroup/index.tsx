import { NewGroupContainer, NewGroupContent, NewGroupIcon } from "./styles";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";

export function NewGroup() {
  return (
    <NewGroupContainer>
      <Header showBackButton />

      <NewGroupContent>
        <NewGroupIcon />

        <Highlight
          title="Create group"
          subtitle="Create a group for add players"
        />

        <Input placeholder="Group name" />

        <Button title="Create group" />
      </NewGroupContent>

    </NewGroupContainer>
  )
}