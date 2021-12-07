import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaProvider } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Accueil = () =>{
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Accueil </Text>
    </View>
  );
}

const Menu = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Menu </Text>
    </View>
  );
}

const Boissons = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Boissons </Text>
    </View>
  );
}

const Dessert = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Dessert </Text>
    </View>
  );
}
const Drawer = createDrawerNavigator();
const MyDrawer= () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Accueil" component={Accueil} />
      <Drawer.Screen name="Menu" component={Menu} />
      <Drawer.Screen name="Boissons" component={Boissons} />
      <Drawer.Screen name="Dessert" component={Dessert} />
    </Drawer.Navigator>
  );
}
export default function App() {
  
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center'
  }
});
