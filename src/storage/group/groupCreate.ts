import AsyncStorage from '@react-native-async-storage/async-storage';

import { GROUP_COLLECTION } from '@storage/storageConfig';

import { groupsGetAll } from './groupsGetAll';
import { AppError } from '@utils/AppError';

export async function groupCreate(newGroupName: string) {
  try {
    // Get all groups from AsyncStorage.
    const storedGroups = await groupsGetAll();

    const groupAlreadyExists = storedGroups.includes(newGroupName);

    if (groupAlreadyExists) throw new AppError('Group already exists');

    // Add new group to the list and convert to string.
    const storage = JSON.stringify([...storedGroups, newGroupName]);

    // Register new group in AsyncStorage.
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
