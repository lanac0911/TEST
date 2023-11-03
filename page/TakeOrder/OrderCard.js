import {
  Badge,
  Box,
  Button,
  Center,
  Icon,
  Pressable,
  AlertDialog,
  Stack,
  Text,
  View,
  VStack,
} from 'native-base';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useMemo, useRef, useState } from 'react';
import { Dimensions } from 'react-native';

const OrderCard = () => {
  const [data, setData] = useState([
    {
      key: 1,
      order_id: 'OD1234',
      customer_name: '張文宗',
      customer_phone: '0914325765',
      address: '臺北市大同區哈密街59巷2弄182號23樓',
      time: '2022/01/01 下午5:00',
      gas_list: [
        { kg: 10, num: 12 },
        { kg: 20, num: 2 },
        { kg: 30, num: 2 },
      ],
    },
    {
      key: 2,
      order_id: 'OD1235',
      customer_name: '張姿貞',
      customer_phone: '0936841271',
      address: '桃園市大溪區福山一路95號17樓',
      time: '2022/01/01 下午5:00',
      gas_list: [
        { kg: 10, num: 2 },
        { kg: 20, num: 2 },
        { kg: 30, num: 2 },
      ],
    },
    {
      key: 3,
      order_id: 'OD1235',
      customer_name: '張姿貞',
      customer_phone: '0936841271',
      address: '桃園市大溪區福山一路95號17樓',
      time: '2022/01/01 下午5:00',
      gas_list: [
        { kg: 10, num: 2 },
        { kg: 20, num: 2 },
        { kg: 30, num: 2 },
      ],
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [delKey, setDelKey] = useState(false);
  const [takeKey, setTakeKey] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef(null);
  const [itemHeights, setItemHeights] = useState([]);
  const getItemLayout = (data, index) => ({
    length: itemHeights[index],
    offset: itemHeights.slice(0, index).reduce((a, b) => a + b, 0),
    index,
  });
  const onSwipeValueChange = swipeData => {
    const { key, value } = swipeData;
    if (value > Dimensions.get('screen').width * 0.5) {
      // 如果滑動值超過閾值，則刪除該 item
      setIsOpen(true);
      setDelKey(key);
    }
  };
  const DeleteOrderData = () => {
    const newData = [...data];
    const prevIndex = data.findIndex(item => item.key === delKey);
    newData.splice(prevIndex, 1);
    setData(newData);
    setIsOpen(false);
  };

  return (
    <>
      <SwipeListView
        data={data}
        style={{ borderRadius: 20 }}
        onSwipeValueChange={onSwipeValueChange}
        getItemLayout={getItemLayout}
        renderItem={data => (
          <Box
            key={data.item.key}
            // minH={200}
            rounded='xl'
            bgColor='muted.50'
            mt={'3'}
            shadow={2}
            ml={'1.5'}
            mr={'1.5'}
            borderWidth={'1'}
            borderColor={'coolGray.300'}
            onLayout={({ nativeEvent }) => {
              const newHeights = [...itemHeights];
              console.log(nativeEvent);
              newHeights.push(nativeEvent.layout.height);
              setItemHeights(newHeights);
            }}
          >
            <Box
              minH={'10'}
              bgColor={takeKey === data.item.key ? 'darkBlue.500' : 'muted.200'}
              roundedTop={'xl'}
            >
              <Stack direction='row' justifyContent={'space-between'}>
                <Text
                  m={'3'}
                  fontWeight='bold'
                  fontSize={'xl'}
                  color={takeKey === data.item.key ? 'muted.50' : 'muted.600'}
                >
                  訂單編號：{data.item.order_id}
                </Text>
                <Center>
                  <Icon
                    as={<Feather name='more-horizontal' />}
                    size={5}
                    color={takeKey === data.item.key ? 'muted.50' : 'muted.600'}
                    mr='5'
                  />
                </Center>
              </Stack>
            </Box>
            <Stack m={'4'} space={3}>
              <Stack direction='row' justifyContent={'space-between'}>
                <Text fontSize='2xl'>{data.item.customer_name}</Text>
                <Text fontWeight='bold' fontSize='xl' color={'darkBlue.500'}>
                  {data.item.time}
                </Text>
              </Stack>
              <Text fontSize='xl'>{data.item.customer_phone}</Text>
              <Text fontSize='xl' fontWeight='600'>
                {data.item.address}
              </Text>
            </Stack>
            <Stack ml={'4'} direction='row' mt={-1} mr={2} mb={3}>
              {data.item.gas_list &&
                data.item.gas_list.map((v, i) => {
                  return (
                    <Badge
                      key={i}
                      mr={2}
                      colorScheme='info'
                      alignSelf='center'
                      variant={'outline'}
                    >
                      <Text
                        color={'darkBlue.600'}
                        fontWeight='bold'
                        fontSize='lg'
                      >
                        {v.kg} KG x{v.num}
                      </Text>
                    </Badge>
                  );
                })}
            </Stack>
          </Box>
        )}
        renderHiddenItem={v => (
          <Stack direction='row' ml={'1.5'} mr={'1.5'} mt={'3'}>
            <VStack>
              <Pressable
                width={Dimensions.get('screen').width * 0.5}
                px={5}
                h={
                  takeKey === v.item.key
                    ? itemHeights[v.index] && itemHeights[v.index] * 0.5
                    : itemHeights[v.index]
                }
                cursor='pointer'
                bg='dark.500'
                roundedLeft={takeKey !== v.item.key && 'xl'}
                roundedTopLeft={'xl'}
                justifyContent='center'
                _pressed={{
                  opacity: 0.5,
                }}
                onPress={() => {
                  setIsOpen(true);
                  setDelKey(v.item.key);
                }}
              >
                <Icon as={<MaterialIcons name='delete' />} color='white' />
              </Pressable>
              <Pressable
                width={Dimensions.get('screen').width * 0.5}
                px={5}
                h={itemHeights[v.index] && itemHeights[v.index] * 0.5}
                cursor='pointer'
                bg='error.600'
                roundedBottomLeft='xl'
                justifyContent='center'
                _pressed={{
                  opacity: 0.5,
                }}
                onPress={() => {
                  setIsOpen(true);
                  setDelKey(v.item.key);
                }}
              >
                <Text
                  color={'muted.50'}
                  size={'2xl'}
                  fontWeight={'bold'}
                  onPress={() => setTakeKey(null)}
                >
                  棄單
                </Text>
              </Pressable>
            </VStack>
            <Pressable
              width={Dimensions.get('screen').width * 0.47}
              cursor='pointer'
              h={itemHeights[v.index]}
              bg='darkBlue.500'
              justifyContent='center'
              roundedRight='xl'
              _pressed={{
                opacity: 0.5,
              }}
              onPress={() => {
                setTakeKey(v.item.key);
              }}
            >
              <Text
                textAlign={'right'}
                mr={6}
                fontSize={'2xl'}
                color={'muted.50'}
                fontWeight={'bold'}
              >
                接取
              </Text>
            </Pressable>
          </Stack>
        )}
        c
        leftOpenValue={70}
        rightOpenValue={-100}
      />
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialog.Content>
          <AlertDialog.Body _text={{ fontSize: 'lg' }} p={5}>
            確定要刪除嗎？
            <View alignItems='flex-end' mt={5}>
              <Button.Group space={2}>
                <Button
                  colorScheme='coolGray'
                  onPress={onClose}
                  ref={cancelRef}
                  size='md'
                  width={65}
                  variant='outline'
                >
                  取消
                </Button>
                <Button
                  colorScheme='danger'
                  onPress={DeleteOrderData}
                  size='md'
                  width={65}
                >
                  刪除
                </Button>
              </Button.Group>
            </View>
          </AlertDialog.Body>
        </AlertDialog.Content>
      </AlertDialog>
    </>
  );
};

export default OrderCard;
