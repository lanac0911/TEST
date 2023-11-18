import {configureStore} from '@reduxjs/toolkit';
import tabRouteSlice from '../store/tabRouteSlice';

export const store = configureStore({
  reducer: {
    tabRoutes: tabRouteSlice,
  },
});
export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
