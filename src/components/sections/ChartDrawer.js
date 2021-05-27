import { Button } from '@chakra-ui/button'
import { IconButton } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { Text } from '@chakra-ui/layout'
import { Spacer } from '@chakra-ui/layout'
import { Heading } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from '@chakra-ui/modal'
import ChartItem from "./ChartItem"
import { ShoppingCart } from '@material-ui/icons'
import React, { useContext, useEffect } from 'react'
import sapu from "../../images/lampu.jpeg"
import ChartContext from '../../chart-context'

function ChartDrawer() {

    const {chart, setChart} = useContext(ChartContext)
    

    const { isOpen, onOpen, onClose } = useDisclosure()
    let total =  0;
    return (
        <div>
            <IconButton ml="10px" onClick={onOpen}>
                <ShoppingCart />
            </IconButton>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                size="md"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Keranjang Belanja</DrawerHeader>

                    <DrawerBody>
                        {
                            Object.entries(chart).map(([key,value])=>{
                                total += value.amount * value.price;
                                return <ChartItem id={key} key={key}></ChartItem>
                            })
                        }
                        
                    </DrawerBody>

                    <DrawerFooter >
                        <Box >
                            <Text>Total</Text>
                            <Heading size="md">Rp. {total}</Heading>
                        </Box>
                        <Spacer/>
                        <Button variant="outline" mr={3} onClick={onClose}>
                        Cancel
                        </Button>
                        <Button colorScheme="teal">Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default ChartDrawer
