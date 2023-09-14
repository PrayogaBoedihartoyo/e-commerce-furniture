import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../views/home/HomeScreen";
import FavoriteScreen from "../views/home/FavoriteScreen";
const Tab = createBottomTabNavigator();

export default function HomeTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Favorite" component={FavoriteScreen}/>
        </Tab.Navigator>
    )
}
