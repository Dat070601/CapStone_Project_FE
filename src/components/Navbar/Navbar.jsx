import React from 'react';
import { Flex, Spacer, Text, Button, HStack, Box, List, ListItem, Input, IconButton, Icon, Avatar, Circle } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { COLOR } from '../../constant';
import NavbarViewModel from './NavbarViewModel';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { cartSelector } from '../../stores/reducers/CartReducer';
import SearchBar from '../SearchBar';
import Logo from '../Logo';
import MenuItemComponent from '../MenuItem/MenuItemComponent';

const Navbar = ({ children }) => {

	const { email, signOut, customerFullName, customerId, accessTokenSaved, navigateToCartPage } = NavbarViewModel();
	const { cartAmmount } = useSelector(cartSelector)
	const navigate = useNavigate()

	return (
		<div>
			<Flex
				padding={[5, 5]}
			>
				<Logo fontSize={30}/>
				<Spacer />
				<SearchBar />
				<Spacer />
				<HStack>
					<Box position={"relative"}>
						<Box style={{
								zIndex: 1,
								position: "absolute",
								top: 0, 
								left: 0
							}}>
							<Circle size={"4"} bg="tomato">
								<Text fontSize={"11px"} color={"white"}>{cartAmmount}</Text>
							</Circle>
						</Box>
						<Button 
							rounded="30px" 
							onClick={() => navigateToCartPage(customerId)}
						>
							<Icon as={AiOutlineShoppingCart}/>
						</Button>
					</Box>
					{/* <Input color="" placeholder='Search...' type={"text"} rounded={"20"}/> */}
					{ accessTokenSaved ? 
						<>
							<Text 
								fontWeight={'semibold'}
								cursor="pointer"
								_hover={{
									color: 'blue.400',
								}}
							>
								{customerFullName ? <MenuItemComponent title={customerFullName} method={() => navigate("/order-history")}/> : <Link to="/create-profile">Create your profile</Link>}
							</Text>
							<Button 
								colorScheme={'red'}
								onClick={signOut}
							>
                Log out
							</Button>
						</> : 
						<>
							<Button 
								bg={COLOR} 
								color={'white'}>
								<Link 
									to="/login">
                      Sign in
								</Link>
							</Button>
							<Button>
								<Link 
									to="/register"
								>
                  Sign up
								</Link>
							</Button>
						</>}          
				</HStack>
			</Flex>
			{children}
		</div>
	);
};

export default Navbar;