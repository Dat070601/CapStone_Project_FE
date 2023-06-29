import { MenuItem, MenuButton, MenuList, useDisclosure } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { Menu } from '@chakra-ui/react'
import React from 'react'

const MenuItemComponent = ({ title, method }) => {

  return (
    <Menu>
      <MenuButton  as={Button} rightIcon={<ChevronDownIcon />}>
          {title}
        </MenuButton>        
      <MenuList>
        <MenuItem>
            <MenuItem onClick={() => method()}>Xem lịch sử mua hàng</MenuItem>
        </MenuItem>        
      </MenuList>
    </Menu>
  )
}

export default MenuItemComponent