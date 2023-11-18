
// AppState.ts

import React, { createContext, useReducer, Dispatch, ReactNode, FC } from 'react';

// 定義狀態類型
interface AppState {
  count: number;
}

type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' };

// 初始化狀態
const initialState: AppState = {
  count: 0,
};

// 創建 Context
const AppContext = createContext<{ state: AppState; dispatch: Dispatch<Action> } | undefined>(undefined);

// 定義 Provider，將狀態和 dispatch 提供給所有子組件
export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer((prevState: AppState, action: Action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...prevState, count: prevState.count + 1 };
      case 'DECREMENT':
        return { ...prevState, count: prevState.count - 1 };
      default:
        return prevState;
    }
  }, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// 定義一個自定義 hook，方便在其他地方使用狀態和 dispatch
export const useAppState = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppProvider');
  }
  return context;
};
