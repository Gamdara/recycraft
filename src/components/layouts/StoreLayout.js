import { Flex } from '@chakra-ui/layout'
import React from 'react'
import Footer from '../sections/Footer';
import Navbar from '../sections/Navbar'

function StoreLayout(props) {
    console.log(props.test);
    return (
        <div >
            <Flex direction="column" align="center"  bg="teal.50">
                <Navbar></Navbar>
                <Flex
                    direction="column"
                    align="center"
                    justify="center"
                    w="100%"
                    px={["20px","20px","70px","150px"]}
                    py={["15px","30px","50px","50px"]}
                >
                    
                    {props.children}
                </Flex>
                <Footer></Footer>
            </Flex>
        </div>
    )
}

export default StoreLayout
