import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { searchSelector } from "../../stores/reducers/SearchReducer"
import { searchByNameAsyncThunk } from "../../stores/thunks/SearchThunk"
import { fetchVoiceToTextAsyncThunk } from "../../stores/thunks/VoiceToTextThunk"
import { resetState, voiceToTextSelector } from "../../stores/reducers/VoiceToTextReducer"

const SearchResultViewModel = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isLoadingVoice, setIsLoadingVoice] = useState(false)
  const { isSuccessVoice, textResponse } = useSelector(voiceToTextSelector) 
  const [ input, setInput ] = useState({
    search: ""
  })
  const [ visible, setVisible ] = useState(false)
  const { results } = useSelector(searchSelector)

  const handleInput = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
  }

  useEffect(() => {
    if(isSuccessVoice === true){
      setInput({
        search: textResponse,
      })
      setIsLoadingVoice(false)
    }
    return () => {
      dispatch(resetState())
    }
  },[isSuccessVoice])
  const getTextToSearch = () => {
    setIsLoadingVoice(true)
    dispatch(fetchVoiceToTextAsyncThunk())
  }

  useEffect(() => {
    if (input.search !== "")
    {
      setVisible(true)
    }
    else
    {
      setVisible(false)
    }
  }, [input.search])

  useEffect(() => {
    window.addEventListener("click", () => {
      setVisible(false)
    })
  }, [visible])

  useEffect(() => {
    dispatch(searchByNameAsyncThunk({
      name: input.search || params.keyword,
    }))
  }, [input.search])

  return {
    visible,
    results,
    input,
    handleInput,
    navigate,
    getTextToSearch,
    isLoadingVoice
  }
}

export default SearchResultViewModel