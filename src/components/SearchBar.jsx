import { Button, FormControl, HStack, Input, InputGroup, InputLeftAddon, Text } from '@chakra-ui/react'
import { AiOutlineSearch } from 'react-icons/ai'
import React, { useState } from 'react'
import { COLOR } from '../constant'
import SearchResultBox from './Search/SearchResultBox'
import SearchResultViewModel from './Search/SearchResultViewModel'
import { useNavigate } from 'react-router-dom'
import { BsFillMicFill } from 'react-icons/bs'

const SearchBar = () => {

  const { input, handleInput, visible, getTextToSearch, isLoadingVoice } = SearchResultViewModel()
  const navigate = useNavigate()
  const navigateToResultPage = () => {
    navigate(`/search/${input.search}`)
  }
  console.log()
  return (
    <div>
      <HStack>
        <Button isLoading={isLoadingVoice} loadingText="Loading Voice.." colorScheme={isLoadingVoice ? "red" : "blue"} px={10}  onClick={() => {
          getTextToSearch()}}><BsFillMicFill/></Button>
        <FormControl position={"relative"}>
          <InputGroup>
            <InputLeftAddon children={<AiOutlineSearch />} />
            <Input value={input.search} name={"search"} onChange={handleInput} type={"input"} placeholder={"Search..."} minW="600px"/>
          </InputGroup>
          {visible ? <SearchResultBox /> : ""}
        </FormControl>
        <Button onClick={navigateToResultPage} background={COLOR} color={"white"}>Tìm kiếm</Button>
      </HStack>
    </div>
  )
}

export default SearchBar