import { createAsyncThunk } from "@reduxjs/toolkit";
import { searchByNameAsync } from "../../api/search";
import { URL } from "../../constant";

const searchByNameAsyncThunk = createAsyncThunk("search/search-by-name", async (payload) => {
  try {
    const response = await searchByNameAsync(`https://localhost:7149`, {
      name: payload.name
    })
    return response
  } catch (error) {
    console.log(error)
  }
})

export {
  searchByNameAsyncThunk
}