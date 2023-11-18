import {createSlice} from '@reduxjs/toolkit';
import type {RootState} from '../redux/store';

//Define a type for the slice state
interface tabItem {
  key: string;
  title: string;
}

const initialState: tabItem[] = [
  {
    key: 'first',
    title: '可接取',
  },
  {
    key: 'second',
    title: '已完成',
  },
  {
    key: 'third',
    title: '其他',
  },
];

export const tabRouteSlice = createSlice({
  name: 'tabRoutes',
  initialState,
  reducers: {},
});

export const selectTabRoutes = (state: RootState) => state.tabRoutes;

export default tabRouteSlice.reducer;
