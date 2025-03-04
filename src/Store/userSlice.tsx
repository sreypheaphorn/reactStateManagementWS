import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Name {
    name: string;
}
const initialState: Name = {
    name: "Sreyphea",
};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        changeName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
    },
});
export const { changeName } = userSlice.actions;
export default userSlice.reducer;