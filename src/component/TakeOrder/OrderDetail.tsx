import React from 'react';

import {
  Box,
  Badge,
  Slider,
  Heading,
  Icon,
  Input,
  Stack,
  VStack,
  HStack,
  Select,
  Text,
  FlatList,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  ScrollView,
} from 'native-base';
import {Platform, Pressable} from 'react-native';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

import {useRoute} from '@react-navigation/native';

const OrderDetail = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {orderData} = route.params;

  const borderRadiusStyle = {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  };

  const renderDeliverItem = ({item}) => (
    <Stack
      p={2}
      pl={5}
      pr={5}
      ml={3}
      mr={3}
      borderWidth={1}
      borderColor="gray.300"
      // borderBottomWidth={1}
      // borderBottomColor="gray.200"
      direction={'row'}
      alignItems="center"
      justifyContent="center">
      <Box w={'40%'}>
        <Text fontSize={'lg'} margin={1}>
          {item.kg} kg
        </Text>
      </Box>

      <Box w={'40%'}>
        <Text fontSize={'lg'} margin={1} alignSelf="flex-end">
          AU17443133
        </Text>
      </Box>

      <Box w={'20%'} justifyContent="center" alignItems="center">
        <Icon
          as={<FontIcon name="minus-circle" />}
          size={6}
          color={'ff0'}
          style={{color: 'red'}}
        />
      </Box>
    </Stack>
  );

  const [service, setService] = React.useState('');

  const renderReItem = ({item}) => (
    <Stack
      p={3}
      pl={5}
      pr={5}
      ml={3}
      mr={3}
      borderWidth={1}
      borderColor="gray.300"
      direction={'col'}
      alignItems="stretch"
      justifyContent="center">
      <Stack direction={'row'}>
        <Box w={'40%'}>
          <Text fontSize={'xl'} margin={1}>
            {item.kg} kg
          </Text>
        </Box>

        <Box w={'40%'}>
          <Text fontSize={'lg'} margin={1} alignSelf="flex-end">
            AU17443133
          </Text>
        </Box>

        <Box w={'20%'} justifyContent="center" alignItems="center">
          <Icon
            as={<FontIcon name="minus-circle" />}
            size={6}
            color={'ff0'}
            style={{color: 'red'}}
          />
        </Box>
      </Stack>
      <Stack direction={'row'} alignItems="center" justifyContent="center">
        <Stack flex={1} h={'100%'}>
          <Select
            selectedValue={service}
            mt={1}
            accessibilityLabel="選擇退氣種類"
            placeholder="選擇退氣種類"
            _selectedItem={{bg: 'teal.600'}}
            onValueChange={itemValue => setService(itemValue)}>
            <Select.Item label="種類一" value="ux" />
            <Select.Item label="種類二" value="ux" />
            <Select.Item label="種類三" value="ux" />
            <Select.Item label="種類四" value="ux" />
          </Select>
        </Stack>

        <Stack flex={1}>
          <InputGroup justifyContent="center">
            <Input placeholder="請輸入" w={'70%'} />
            <InputRightAddon children={'kg'} />
          </InputGroup>
        </Stack>

        <Stack flex={1}>
          <InputGroup justifyContent="center">
            <InputLeftAddon children={'$'} />
            <Input placeholder="請輸入" w={'70%'} />
          </InputGroup>
        </Stack>
      </Stack>
    </Stack>
  );

  return (
    <>
      <ScrollView pb={20}>
        <Box
          bg="#005EB4"
          minH={Platform.OS === 'android' ? 320 : 330}
          pt={Platform.OS === 'android' ? '7' : '9'}
          style={borderRadiusStyle}>
          <VStack p="7" space="xs">
            <Stack direction={'row'} testID="back-icon">
              <Pressable
                flex={1}
                onPress={() => {
                  navigation.goBack();
                }}>
                {({pressed}) => (
                  <Box
                    color={pressed ? 'gray.200' : 'white'}
                    p={3}
                    borderRadius={50}
                    shadow={3}>
                    <Icon
                      as={<FontIcon name="reply" />}
                      size={8}
                      color={pressed ? 'lightBlue.500' : 'lightBlue.50'}
                    />
                  </Box>
                )}
              </Pressable>
              <Box
                flexDirection={'row'}
                alignItems="center"
                justifyContent="center"
                flex={1}
                w={100}>
                <Box bg={'white'} p={3} borderRadius={50} shadow={3}>
                  <Icon
                    as={<FontIcon name="user-md" />}
                    size={6}
                    color={'ff0'}
                    style={{color: 'darkblue'}}
                  />
                </Box>
                <Text> </Text>
                <Box bg={'white'} p={3} borderRadius={50} shadow={3}>
                  <Icon
                    as={<FontIcon name="map" />}
                    size={6}
                    color={'ff0'}
                    style={{color: 'orange'}}
                  />
                </Box>
                <Text> </Text>
                <Box bg={'white'} p={3} borderRadius={50} shadow={3}>
                  <Icon
                    as={<FontIcon name="phone" />}
                    size={6}
                    color={'ff0'}
                    style={{color: 'red'}}
                  />
                </Box>
              </Box>
            </Stack>
            <Heading size="xl" color="lightBlue.50" fontWeight="bold">
              {orderData.customer_name}
            </Heading>
            <Text fontSize="xl" color="lightBlue.50" fontWeight="bold">
              {orderData.customer_phone}
            </Text>
            <Text fontSize="xl" color="lightBlue.50" fontWeight="bold">
              {orderData.address}
            </Text>
            <Box>
              <HStack
                testID="middle-box"
                direction="row"
                bg="#fff"
                shadow={3}
                h={140}
                rounded="xl"
                // alignItems="center"
                justifyContent="center"
                width="100%"
                // position="absolute"
                // left={0}
                // right={0}
                // bottom={0}
                // top={0}
                // zIndex={3}
              >
                <Box
                  p={4}
                  pl={1}
                  h={'90%'}
                  width={'50%'}
                  // alignItems="center"
                  // justifyContent="center"
                >
                  <Text fontSize="xl" bold>
                    訂單內容
                    <Text fontSize="md">(廚房)</Text>
                  </Text>
                  <Stack direction="row" mt={3} mb={3}>
                    {orderData.gas_list &&
                      orderData.gas_list.map((v, i) => {
                        return (
                          <Badge
                            key={i}
                            mr={2}
                            colorScheme="info"
                            variant={'outline'}>
                            <Text
                              color={'darkBlue.600'}
                              fontWeight="bold"
                              fontSize="md">
                              {v.kg} KG x{v.num}
                            </Text>
                          </Badge>
                        );
                      })}
                  </Stack>

                  <Text fontSize="md">
                    無樓梯
                    <Text fontSize="xs" color={'red.500'}>
                      (要打電話)
                    </Text>
                  </Text>
                </Box>

                <Stack
                  h={'40%'}
                  width={'40%'}
                  // bg="#000"
                  direction="row"
                  alignItems="center"
                  justifyContent="center">
                  <Box
                    bg={'#f00'}
                    color={'fff'}
                    h={12}
                    rounded="3xl"
                    shadow={2}
                    w={12}
                    alignItems="center"
                    justifyContent="center">
                    <Text fontSize="lg" color="gray.100" bold>
                      欠桶
                    </Text>
                  </Box>
                  <Box
                    bg={'#f00'}
                    h={12}
                    rounded="3xl"
                    ml={1}
                    w={12}
                    shadow={2}
                    alignItems="center"
                    justifyContent="center">
                    <Text fontSize="lg" color="gray.100" bold>
                      欠款
                    </Text>
                  </Box>
                  <Icon
                    as={<FontIcon name="edit" />}
                    ml={3}
                    mr={2}
                    size={6}
                    color="black.500"
                  />
                </Stack>
              </HStack>
            </Box>
          </VStack>
        </Box>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          width="100%">
          <Stack width="70%" mr={1} alignItems="center" justifyContent="center">
            <Slider
              w="2/4"
              m={5}
              mb={1}
              // maxW={300}
              w={'70%'}
              colorScheme={'blue'}
              defaultValue={0} // 设置默认值为 0
              minValue={0}
              maxValue={100}
              accessibilityLabel="hello world"
              step={2}
              isReadOnly // 设置为只读，禁止拖动
            >
              <Slider.Track>
                <Slider.FilledTrack />
              </Slider.Track>
              <Slider.Thumb />
            </Slider>
            <Box flexDirection={'row'} w={'100%'} justifyContent="center">
              <Text pr={'20%'} textAlign="center">
                掃描鋼瓶{' '}
              </Text>
              <Text pl={'20%'} textAlign="center">
                額外操作{' '}
              </Text>
            </Box>
          </Stack>

          <Pressable
            onPress={() => {
              console.log('hi');
            }}>
            {({pressed}) => (
              <Box
                bg={pressed ? 'gray.200' : 'white'}
                p={3}
                borderRadius={50}
                shadow={3}>
                <Icon
                  as={<FontIcon name="barcode" />}
                  size={6}
                  color="primary.700"
                />
              </Box>
            )}
          </Pressable>
        </Stack>

        <Stack
          direction="col"
          // bg="#f00" /* red */
          // h={100}
          // alignItems="center"
          justifyContent="center"
          width="100%">
          <Heading ml={5} mt={5} color="#1677FF">
            配送鋼瓶
          </Heading>

          {/* 配送鋼瓶 */}
          <Stack
            direction="col"
            // bg="#ff0" /** yellow */
            // h={200}
            // alignItems="center"
            justifyContent="center"
            width="100%"
            mt={1}
            mb={1}>
            <FlatList
              ml={1}
              data={orderData.gas_list}
              renderItem={renderDeliverItem}
              keyExtractor={item => item.kg}
              scrollEnabled={false}
            />
          </Stack>

          {/* 收回鋼瓶 */}
          <Heading ml={5} mt={5} color="#1677FF">
            收回鋼瓶
          </Heading>

          <Stack
            direction="row"
            bg="green"
            // h={100}
            // alignItems="center"
            justifyContent="center"
            width="100%">
            <FlatList
              ml={1}
              data={orderData.gas_list}
              renderItem={renderReItem}
              keyExtractor={item => item.kg}
              scrollEnabled={false}
            />
          </Stack>
        </Stack>
      </ScrollView>
    </>
  );
};

export default OrderDetail;
