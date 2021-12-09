import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';

import { LaunchDetails } from "../screens/LaunchDetails";
import { Dashboard } from "../screens/Dashboard";

const Stack = createNativeStackNavigator()

export function AppRoutes() {
   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen
               name="Dashboard"
               component={Dashboard}
            />
            <Stack.Screen
               name="LaunchDetails"
               component={LaunchDetails}
            />
         </Stack.Navigator>
      </NavigationContainer>
   )
}
