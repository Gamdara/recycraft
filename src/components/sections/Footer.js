import { HStack, SimpleGrid, Text } from '@chakra-ui/layout'
import { Heading } from '@chakra-ui/layout'
import { Container } from '@chakra-ui/layout'
import { Flex } from '@chakra-ui/layout'
import React from 'react'
import { IconButton, Image, ListItem, UnorderedList } from "@chakra-ui/react"
import { Facebook, Twitter } from '@material-ui/icons'
import logo from "../../images/recycraft-logo1.png"

function Footer(props) {
    return (
        // <div>
            <Flex w="100%" bg="teal.700" color="gray.200" {...props} >
                <SimpleGrid w="inherit" minChildWidth="310px" spacing="50px">
                    <Container gridGap="10px">
                        {/* <Heading size="md" >Text Here</Heading> */}
                        <Image src={logo} w="300px" mb="10px"/>
                        <Text>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio ipsum iste, sit repellat exercitationem libero error nulla, illum earum necessitatibus esse similique voluptates omnis assumenda mollitia non veniam saepe nihil!
                        </Text>
                    </Container>
                    <Container>
                        <Heading size="lg" mb="30px" mt="10px">Kategori Produk</Heading>
                        <UnorderedList>
                            <ListItem>Dekorasi</ListItem>
                            <ListItem>Tas</ListItem>
                            <ListItem>Alat Rumah Tangga</ListItem>
                            <ListItem>Furnitur</ListItem>
                            
                        </UnorderedList>
                    </Container>
                    <Container>
                        <Heading size="lg" mb="30px" mt="10px">Ikuti Kami</Heading>
                        <HStack>
                            <IconButton variant="filled">
                                <Facebook fontSize="large"/>
                            </IconButton>
                            <IconButton variant="filled">
                                <Twitter fontSize="large"/>
                            </IconButton>
                        </HStack>
                    </Container>
                </SimpleGrid>
            </Flex>   
        // </div>
    )
}

export default Footer
