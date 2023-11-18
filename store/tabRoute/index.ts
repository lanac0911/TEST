// import {createSlice} from '@reduxjs/toolkit';
// import type {RootState} from '../redux/store';

// //Define a type for the slice state
// interface tabItem {
//   key: string;
//   title: string;
// }

// const initialState: tabItem[] = [
//   {
//     key: 'first',
//     title: '可接取',
//   },
//   {
//     key: 'second',
//     title: '已完成',
//   },
//   {
//     key: 'third',
//     title: '其他',
//   },
// ];

// export const tabRouteSlice = createSlice({
//   name: 'tabRoutes',
//   initialState,
//   reducers: {},
// });

// export const selectTabRoutes = (state: RootState) => state.tabRoutes;

// /// index ////

// interface tabIndexState {
//   index: number;
// }

// const tabIndexInitialState: tabIndexState = {
//   index: 0,
// };

// // Create the tabIndex slice
// export const tabIndexSlice = createSlice({
//   name: 'tabIndex',
//   initialState: tabIndexInitialState,
//   reducers: {
//     setTabIndex: (state, action) => {
//       state.index = action.payload;
//     },
//   },
// });

// export const selectTabIndex = (state: RootState) => state.tabIndex;

// export const { setTabIndex } = tabIndexSlice.actions;

// export default {
//   tabRouteReducer: tabRouteSlice.reducer,
//   tabIndexReducer: tabIndexSlice.reducer,
// };

