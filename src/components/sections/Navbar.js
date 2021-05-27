import { Flex} from '@chakra-ui/layout'
import logo from "../../images/recycraft-logo.png"
import React from 'react'
import { Spacer } from '@chakra-ui/layout'

import { Search } from '@material-ui/icons'
import { Image } from '@chakra-ui/image'
import { InputGroup } from '@chakra-ui/input'
import { Input } from '@chakra-ui/input'
import { InputLeftElement } from '@chakra-ui/input'

import { Link, useHistory } from 'react-router-dom'
import ChartDrawer from "./ChartDrawer"

function Navbar(props) {
    const router = useHistory();
    const searchProducts = (e) => {
        if(e.key !== "Enter") return;
        const keyword = e.target.value;
        router.push(`/s/name/${keyword}`);
    }
    return (
        // <div style={{width : "100%"}}>
            <Flex w="full" h="70px" align="center" bg="cyan.200" {...props}>
                <Link to="/">
                    <Image src={logo} h={["30px","35px","40px","40px"]}/>
                </Link>
                <Spacer></Spacer>
                <InputGroup w={["120px","200px","300px"]} variant="filled" rounded="lg">
                    <InputLeftElement>
                        <Search></Search>
                    </InputLeftElement>
                    <Input placeholder="Cari Barang" onKeyPress={searchProducts}></Input>
                </InputGroup>
                <ChartDrawer></ChartDrawer>
            </Flex>  
        // </div>
    )
}

export default Navbar
