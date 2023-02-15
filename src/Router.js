import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Jobs from "./pages/Jobs";
import JobsDetails from "./pages/JobsDetails";
import { createStackNavigator } from "@react-navigation/stack";
import Favorites from "./pages/Favorites";
import Submits from "./pages/Submitts/Submitts";


const JobStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="JobsScreen" component={Jobs} />
      <Stack.Screen name="JobsDetailsScreen" component={JobsDetails} />
    </Stack.Navigator>
  )

}

const App = () => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="JobsDrawer" component={JobStack} />
        <Drawer.Screen name="FavoritedJobsDrawer" component={Favorites} />
        <Drawer.Screen name="SubmittedJobsDrawer" component={Submits} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;
