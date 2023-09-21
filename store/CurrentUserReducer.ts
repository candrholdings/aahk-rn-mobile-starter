import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const CURRENT_USER_STORE = 'CURRENT_USER_STORE';

export interface ICurrentUserState {
    username: string;
}

const currentUserSlice = createSlice({
    name: CURRENT_USER_STORE,
    initialState: {
        username: ''
    },
    reducers: {
        login: (state, action: PayloadAction<any>) => {

        }
    }
});

export const Login = currentUserSlice.actions.login;
export default currentUserSlice.reducer;