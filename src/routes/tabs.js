import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../views/home/HomeScreen";
import FavoriteScreen from "../views/home/FavoriteScreen";
import { Ionicons } from 'react-native-vector-icons';
import DiscoverScreen from '../views/home/DiscoverScreen';
const Tab = createBottomTabNavigator();

export default function HomeTabs() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                borderRadius: 15,
                height: 50,
                backgroundColor: '#000',
            }
        }}>
            <Tab.Screen options={{
                tabBarIcon: ({focused}) => (
                    <Ionicons
                        name="home"
                        size={24}
                        color={focused ? '#fff' : '#ccc'} />
                )
            }} name="Home" component={HomeScreen} />

            <Tab.Screen options={{
              tabBarIcon: ({focused}) => (
                <Ionicons
                  name={focused ? 'map' : 'map-outline'}
                  size={24}
                  color={focused ? '#fff' : '#ccc'} />
              )
            }} name="Discover" component={DiscoverScreen} />

            <Tab.Screen
                options={{
                    tabBarIcon: ({focused}) => (
                        <Ionicons
                            name="heart"
                            size={24}
                            color={focused ? '#fff' : '#ccc'} />
                    ),
                }} name="Favorite" component={FavoriteScreen}/>
        </Tab.Navigator>
    )
}
