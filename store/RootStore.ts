import { configureStore } from '@reduxjs/toolkit';
import CurrentUserReducer from './CurrentUserReducer';

export const RootStore = configureStore({
    reducer: {
        currentUser: CurrentUserReducer,
    },
});

export type RootDispatch = typeof RootStore.dispatch;