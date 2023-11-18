import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IndexPage from '../../component/TakeOrder/index';
import OrderDetail from '../../component/TakeOrder/OrderDetail';

const NVStack = createNativeStackNavigator();

const OrderScreen = () => {
  return (
    <NVStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}>
      <NVStack.Screen name="IndexPage" component={IndexPage} />
      <NVStack.Screen name="OrderDetail" component={OrderDetail} />
    </NVStack.Navigator>
  );
};

export default OrderScreen;
