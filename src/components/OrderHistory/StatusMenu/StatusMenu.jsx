import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React from 'react'

const StatusMenu = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Chọn trạng thái
      </MenuButton>
      <MenuList>
        <MenuItem>
          <Text>Đã thanh toán</Text>
        </MenuItem>
        <MenuItem>
          <Text>Chờ xác nhận</Text>
        </MenuItem>
        <MenuItem>
          <Text>Đã giao</Text>
        </MenuItem>
        <MenuItem>
          <Text>Đang vận chuyển</Text>
        </MenuItem>
        <MenuItem>
          <Text>Đã hủy</Text>
        </MenuItem>
        <MenuItem>
          <Text>Đã xác nhận</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default StatusMenu