import AsyncStorage from '@react-native-async-storage/async-storage';

import { GROUP_COLLECTION } from '@storage/storageConfig';

import { groupsGetAll } from './groupsGetAll';

export async function groupCreate(newGroupName: string) {
  try {
    // Get all groups from AsyncStorage.
    const storedGroups = await groupsGetAll();

    // Add new group to the list and convert to string.
    const storage = JSON.stringify([...storedGroups, newGroupName]);

    // Register new group in AsyncStorage.
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
