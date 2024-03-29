import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
// import {HomePage} from './src/components/homepage/HomePage';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import { Accueil } from './src/accueil/Accueil'
import { Detail } from './src/detail/Costume'
import { Garde } from './src/garde/Garde'
import { Liste } from './src/liste/Liste'
import { TCharac } from "./src/liste/store/listeStore";

export type TStackRoute = {
  ['/garde']: any;
  ['/accueil']: any;
  ['/liste']: {choice : string, gender : string};
  ['/detail']: { character : TCharac};
};

const Stack = createStackNavigator<TStackRoute>();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
      <SafeAreaView
          style={{...backgroundStyle, flex: 1}}
          forceInset={{top: 'always'}}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <NavigationContainer>
          <Stack.Navigator
              transparentCard={true}
              transitionConfig={{
                containerStyle: {
                  backgroundColor: 'transparent',
                },
              }}
              screenOptions={{
                headerShown: false,
              }}
              initialRouteName="/garde">
            <Stack.Screen name="/garde" component={Garde} />
            <Stack.Screen name="/accueil" component={Accueil} />
            <Stack.Screen name="/liste" component={Liste} />
            <Stack.Screen name="/detail" component={Detail} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
  );
};

export default App;