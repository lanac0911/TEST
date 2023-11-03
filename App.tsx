import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import FooterTabs from './layout/FooterTab';
// import {Text} from 'react-native';


function App(): JSX.Element {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <FooterTabs />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};



export default App;

