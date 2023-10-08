# Quick Guide

Quick guide to useful code snippets in other projects.

### @expo/vector-icons types
```typescript
import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconActionStyleProps;
}
```
---
### React Navigation

Implement navigation using React Navigation
Installation
```shell
npm install @react-navigation/native
```

Installing dependencies into an Expo managed project
```shell
npx expo install react-native-screens react-native-safe-area-context
```

Installing the ***native stack*** navigator
```shell
npm install @react-navigation/native-stack
```
---
### Async Storage
Installation
```shell
npx expo install @react-native-async-storage/async-storage
```


07