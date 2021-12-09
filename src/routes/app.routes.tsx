import React from "react";
import { createStackNavigator } from '@react-navigation/stack';


import { LaunchDetails } from "../screens/LaunchDetails";
import { Dashboard } from "../screens/Dasboard";

const { Navigator, Screen } = createStackNavigator()

export function AppRoutes() {
   return (
      <Navigator
         screenOptions={{ headerShown: false }}
      >
         <Screen
            name="Dashboard"
            component={Dashboard}
         />
         <Screen
            name="LaunchDetails"
            component={LaunchDetails}
         />
       </Navigator>
   )
}
