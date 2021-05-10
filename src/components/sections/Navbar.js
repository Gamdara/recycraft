import { Flex } from '@chakra-ui/layout'
import logo from "../../images/recycraft-logo.png"
import React from 'react'
import { Spacer } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/button'
import { Search, ShoppingCart } from '@material-ui/icons'
import { Image } from '@chakra-ui/image'
import { InputGroup } from '@chakra-ui/input'
import { Input } from '@chakra-ui/input'
import { InputLeftElement } from '@chakra-ui/input'
import { useColorMode } from '@chakra-ui/color-mode'

function Navbar(props) {
    const {toggleColorMode} = useColorMode();
    return (
        <div style={{width : "100%"}}>
            <Flex w="inherit"  h="70px" align="center" px={["20px","20px","70px","150px"]} bg="teal.300" >
                <Image src={logo} h={["30px","35px","40px","40px"]}/>
                <Spacer></Spacer>
                <InputGroup w={["200px","200px","300px"]} variant="filled" rounded="lg">
                    <InputLeftElement>
                        <Search></Search>
                    </InputLeftElement>
                    <Input placeholder="Cari Barang"></Input>
                </InputGroup>
                <IconButton onClick={toggleColorMode} ml="10px">
                    <ShoppingCart></ShoppingCart>
                </IconButton>
            </Flex>  
            {/* <Flex as="nav" align="center" justify="space-between" wrap="wrap" w="100vw" bg="teal.300" {...props}>
                <Image src={logo} h="40px"/>
                <Spacer></Spacer>
                <InputGroup w="300px" variant="filled" rounded="md">
                    <InputLeftElement>
                        <Search></Search>
                    </InputLeftElement>
                    <Input placeholder="Cari Barang"></Input>
                </InputGroup>
                <IconButton onClick={toggleColorMode}>
                    <ShoppingCart></ShoppingCart>
                </IconButton>
            </Flex>  */}
        </div>
    )
}

export default Navbar
