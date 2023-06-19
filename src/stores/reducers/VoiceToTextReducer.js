import { createSlice } from "@reduxjs/toolkit";
import { voiceToTextState } from "../initialState/VoiceToTextState";
import { fetchVoiceToTextAsyncThunk } from "../thunks/VoiceToTextThunk";

const voiceToTextSlice = createSlice({
    name: "voiceToText",
    initialState: voiceToTextState,
    reducers: {
        resetState : (state,action) => {
            return {
                ...state,
                isSuccessVoice: undefined
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchVoiceToTextAsyncThunk.fulfilled, (state, action) => {
            state.isSuccessVoice = action.payload.isSuccess
            console.log(state.isSuccessVoice)
            state.textResponse = action.payload.textResponse
        })
    }
})

export default voiceToTextSlice.reducer;
const voiceToTextSelector = (state) => state.VoiceToTextReducer

export {
    voiceToTextSelector
}

export const { resetState } = voiceToTextSlice.actions