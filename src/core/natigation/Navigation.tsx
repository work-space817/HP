import { NavigationContainer, NavigationProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenNames } from "./routes";
import HomeScreen from "../screens/home/HomeScreen";
import DetailsScreen from "../screens/details/DetailsScreen";
import ListScreen from "../screens/list/ListScreen";
import ResetCharacterList from "../../helpers/UI/header/ResetCharacterList";
import TitleByCharacter from "../../helpers/UI/header/TitleByCharacter";

const Stack = createNativeStackNavigator();

type ScreenNamesType = keyof typeof ScreenNames;
export type RootStackParamList = Record<ScreenNamesType[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: "fade",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Group>
          <Stack.Screen
            name={ScreenNames.HomeScreen}
            component={HomeScreen}
            options={{
              title: "Home Screen",
              headerRight: () => <ResetCharacterList />,
            }}
          />

          <Stack.Screen
            name={ScreenNames.ListScreen}
            component={ListScreen}
            options={{
              headerRight: () => <ResetCharacterList />,
              headerBackVisible: false,
              title: "List Screen",
            }}
          />
          <Stack.Screen
            name={ScreenNames.DetailsScreen}
            component={DetailsScreen}
            options={{
              headerTitle: () => <TitleByCharacter />,
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
