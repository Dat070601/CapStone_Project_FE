import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchVoiceToTextAsync } from "../../api/record";
import { URL } from "../../constant";

const fetchVoiceToTextAsyncThunk = createAsyncThunk("search/fetch-voice-to-text", async (payload) => {
    try {
        const response = await fetchVoiceToTextAsync(`https://localhost:7149`)
        return response
    } catch (error) {
        console.log(error)
    }
})

export { fetchVoiceToTextAsyncThunk }