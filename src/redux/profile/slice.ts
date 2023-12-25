import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthInterface {
  isLoadingAuth: boolean;
  error?: string;
  isAuth: boolean;
  user: IProfile;
}

const initialState: AuthInterface = {
  isLoadingAuth: false,
  isAuth: false,
  user: {
    birthday: "",
    card_code: null,
    city: "",
    email: "",
    id: "",
    mobile: null,
    name: "",
    sex: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoadingAuthSlice: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoadingAuth = payload;
    },
    setErrorAuthSlice: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
    },
    setIsAuthSlice: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuth = payload;
    },
    setUserSlice: (state, { payload }: PayloadAction<IProfile>) => {
      state.user = payload;
    },
    setUserLogoutSlice: () => initialState,
  },
});

export const {
  setLoadingAuthSlice,
  setErrorAuthSlice,
  setIsAuthSlice,
  setUserSlice,
  setUserLogoutSlice,
} = authSlice.actions;

export const { reducer: profileReducer } = authSlice;
