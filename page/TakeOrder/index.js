import React from 'react';
import {Text} from 'react-native';
// import {
//   Box,
//   Center,
//   Heading,
//   Icon,
//   Input,
//   Stack,
//   Text,
//   useColorModeValue,
// } from 'native-base';
// import { Ionicons } from '@expo/vector-icons';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { TabView, SceneMap } from 'react-native-tab-view';
// import { Dimensions, Pressable, Platform } from 'react-native';
// import OrderCard from './OrderCard';

// const SecondRoute = () => (
//   <Center flex={1} my='4'>
//     This is Tab 2
//   </Center>
// );

// const initialLayout = {
//   width: Dimensions.get('window').width,
// };
// const renderScene = SceneMap({
//   first: OrderCard,
//   second: SecondRoute,
// });

// const TakeOrder = () => {
//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     {
//       key: 'first',
//       title: '可接取',
//     },
//     {
//       key: 'second',
//       title: '已完成',
//     },
//   ]);
//   const renderTabBar = props => {
//     return (
//       <Box
//         flexDirection='row'
//         bgColor='muted.50'
//         rounded='3xl'
//         ml='5'
//         mr='5'
//         mb={1}
//         p='1'
//         shadow={3}
//         // minH={70}
//       >
//         {props.navigationState.routes.map((route, i) => {
//           const color =
//             index === i
//               ? useColorModeValue('#fff', '#e5e5e5')
//               : useColorModeValue('#1f2937', '#a1a1aa');
//           const borderColor =
//             index === i
//               ? 'darkBlue.600'
//               : useColorModeValue('muted.50', 'gray.400');
//           return (
//             <Box
//               key={i}
//               bgColor={borderColor}
//               flex={1}
//               alignItems='center'
//               p='4'
//               cursor='pointer'
//               rounded='3xl'
//             >
//               <Pressable
//                 onPress={() => {
//                   console.log(i);
//                   setIndex(i);
//                 }}
//               >
//                 <Text
//                   style={{
//                     color,
//                     fontWeight: '600',
//                     fontSize: 20,
//                     paddingTop: 2,
//                   }}
//                 >
//                   {route.title}
//                 </Text>
//               </Pressable>
//             </Box>
//           );
//         })}
//       </Box>
//     );
//   };
//   return (
//     <>
//       <Box
//         bg={{
//           linearGradient: {
//             colors: ['darkBlue.400', 'darkBlue.600'],
//             start: [0, 0],
//             end: [0, 1],
//           },
//         }}
//         minH={Platform.OS === 'android' ? 240 : 250}
//         pt={Platform.OS === 'android' ? '7' : '9'}
//         rounded='2xl'
//       >
//         <Stack p='7' space='xs'>
//           <Heading size='xl' color='lightBlue.50' fontWeight='bold'>
//             接單區
//           </Heading>
//           <Text fontSize='xl' color='lightBlue.50' fontWeight='bold'>
//             今日已派送 10 個訂單
//           </Text>
//           <Stack space='md' direction='row'>
//             <Input
//               mt='1'
//               rounded='2xl'
//               placeholder='搜尋'
//               w='90%'
//               bgColor='lightBlue.50'
//               size='lg'
//               placeholderTextColor='darkBlue.600'
//               InputLeftElement={
//                 <Icon
//                   as={<Ionicons name='search' />}
//                   size={5}
//                   ml='2'
//                   color='darkBlue.600'
//                 />
//               }
//             />
//             <Center>
//               <Icon
//                 as={<MaterialCommunityIcons name='sort' />}
//                 size={8}
//                 color='lightBlue.50'
//               />
//             </Center>
//           </Stack>
//         </Stack>
//       </Box>
//       <TabView
//         navigationState={{
//           index,
//           routes,
//         }}
//         swipeEnabled={false}
//         renderScene={renderScene}
//         renderTabBar={renderTabBar}
//         onIndexChange={setIndex}
//         initialLayout={initialLayout}
//         style={{
//           marginTop: -35,
//         }}
//       />
//     </>
//   );
// };
const TakeOrder = () => {
  return <Text>TEST</Text>;
};
export default TakeOrder;
