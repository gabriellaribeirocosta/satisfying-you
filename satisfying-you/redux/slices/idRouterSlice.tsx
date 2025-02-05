import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IdRouterState {
  id: string;
}

const initialValues: IdRouterState = {
  id: ""
}

const idRouterSlice = createSlice({
  name: "idRouter",
  initialState: initialValues,
  reducers: {
    reducerSetId: (state, action: PayloadAction<string>) => {
      state.id = action.payload
    }
  }
})

export const {reducerSetId} = idRouterSlice.actions

export default idRouterSlice.reducer