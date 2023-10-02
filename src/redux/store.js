import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import userSlice from './store/user/userSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'


const commonConfig = {
  key: 'shop/user',
  storage
}

const useConfig = {
  ...commonConfig, 
  whitelist: ['isLoggedIn', 'token', 'currentUser']
}

export const store = configureStore({
  reducer: {
    userReducer: persistReducer(useConfig, userSlice),
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

export const persistor = persistStore(store)