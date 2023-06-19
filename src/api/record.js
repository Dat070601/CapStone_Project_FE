import axios from "axios";

const fetchVoiceToTextAsync = async (url) => {
    try {
        const response = await axios.post(`${url}/api/search`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}
export { fetchVoiceToTextAsync }