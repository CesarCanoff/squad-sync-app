import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { PLAYER_COLLECTION } from "@storage/storageConfig";

import { PlayerStorageDTO } from "./PlayerStorageDTO";

import { playersGetByGroup } from "./playersGetByGroup";

export async function playerAddByGroup(groupName: string, player: PlayerStorageDTO) {
  try {
    const storedPlayers = await playersGetByGroup(groupName);

    const playerAlreadyExists = storedPlayers.filter(storedPlayer => storedPlayer.name === player.name);

    if (playerAlreadyExists.length > 0) throw new AppError('Player already exists');

    const storage = JSON.stringify([...storedPlayers, player]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${groupName}`, storage);
  } catch (error) {
    throw error;
  }
  
}