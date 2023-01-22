import Main from "./src/components/Main";
import FullInfo from "./src/components/FullInfo";
import { gStyle } from "./src/styles/style";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: "Main",
            headerStyle: {
              backgroundColor: "#000",
              height: 100,
            },
            headerTitleStyle: {
              color: "#FFF",
              fontSize: 16,
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="FullInfo"
          component={FullInfo}
          options={{
            title: "FullInfo",
            headerStyle: {
              backgroundColor: "#000",
              height: 100,
            },
            headerTitleStyle: {
              color: "#FFF",
              fontSize: 16,
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
