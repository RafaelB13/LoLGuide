import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import React from 'react';
import ChampionInfos from '../screens/Champion-Infos';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView, StyleSheet } from 'react-native';

const getTabBarIcon = (route: any) => {
  const icons: { [key: string]: string } = {
    'Champions Guide': 'home',
    'Champions Info': 'info',
  };
  return ({ color, size }: { color: string; size: number }) => (
    <Icon name={icons[route.name]} color={color} size={size} />
  );
};

const Tab = createBottomTabNavigator();
export default function TabRoutes() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: getTabBarIcon(route),
          tabBarActiveTintColor: '#bb86fc',
          tabBarInactiveTintColor: '#888888',
          tabBarStyle: {
            backgroundColor: '#121212',
            borderTopColor: '#1e1e1e',
          },
          headerShown: false, // Remove o cabeçalho
        })}>
        <Tab.Screen name="Champions Guide" component={HomeScreen} />
        <Tab.Screen name="Champions Info" component={ChampionInfos} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121212',
  },
});
