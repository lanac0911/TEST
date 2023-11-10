import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import FooterTabs from './layout/FooterTab';
import 'react-native-gesture-handler';

// import {Text} from 'react-native';
const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

function App(): JSX.Element {
  return (
    <NavigationContainer>
      {/* <NativeBaseProvider> */}
      <NativeBaseProvider config={config}>
        <FooterTabs />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default App;

