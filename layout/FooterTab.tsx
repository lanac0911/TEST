import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Platform} from 'react-native';
import {View, useTheme} from 'native-base';
import { Text } from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import OrderScreen from '../Screen/TakeOrder/OrderScreen';
interface FooterTabsProps {}

const RUNScreen = () => {
  return (
    <View>
      <View>
        <Text>Run Screen 2</Text>
      </View>
    </View>
  );
};



const Tab = createBottomTabNavigator();

const FooterTabs: React.FC<FooterTabsProps> = () => {
  const {colors, sizes} = useTheme();
  const iconSize: number = sizes[10];
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.darkBlue[400],
          tabBarInactiveTintColor: colors.gray[200],
          tabBarStyle: {
            height: Platform.OS === 'android' ? 80 : 100,
            paddingBottom: Platform.OS === 'android' ? sizes[3] : sizes[10],
            paddingTop: sizes[2],
          },
        }}>
        <Tab.Screen
          name="TakeOrder"
          component={OrderScreen}
          options={{
            tabBarLabel: '接單',
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({color}) => (
              <Icon name="share-square-o" size={iconSize} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={RUNScreen}
          options={{
            tabBarLabel: 'Settings',
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({color}) => (
              <Icon name="cog" size={iconSize} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default FooterTabs;
