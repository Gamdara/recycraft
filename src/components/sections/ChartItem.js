import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Input } from '@chakra-ui/input'
import { Box, Flex, Heading, HStack, Spacer, Text} from '@chakra-ui/layout'
import { useNumberInput } from '@chakra-ui/number-input'
// import { useNumberInput } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useDownloadURL } from 'react-firebase-hooks/storage'
import ChartContext from '../../chart-context'
import { storage } from '../../firebase'
// import RatingStars from '../ui/RatingStars'

function ChartItem(props) {
    const {chart,setChart} = useContext(ChartContext)
    const product = chart[props.id]
    const url = product.images ? product.images[0] : "google.com"
    const [imageURL, loading, error] = useDownloadURL(
        storage.ref(`images/${url}`)
    );
    const changeAmount = () => {
        chart[product.id].amount = parseInt(input.value)
        setChart(chart)
    }
    const {
        getInputProps,
        getIncrementButtonProps,
        getDecrementButtonProps,
      } = useNumberInput({
        step: 1,
        defaultValue: product.amount,
        min: 0,
        max: 99,
      })
      const inc = getIncrementButtonProps()
      const dec = getDecrementButtonProps()
      const input = getInputProps({ isReadOnly: true })
    
    return (
        <Box w="inherit" p={5} >
            <Flex gridGap="10px">
                <Image flexGrow='0' src={imageURL} w="100px"></Image>
                <Flex gridGap="2px" direction="column">
                    <Text fontSize="md">{product.name || "Judul"}</Text>
                    <HStack>

                    <Heading size="sm">{"Rp. "+product.price || 15000}</Heading>
                    <Text fontSize="md" >(Rp. {product.price * product.amount || 0})</Text>
                    </HStack>
                    <Spacer></Spacer>
                    <HStack w="fit-content">
                        <Button {...dec} size="sm" onClick={changeAmount}>-</Button>
                        <Input {...input} size="sm" maxW="55px" textAlign="center" />
                        <Button {...inc} size="sm" onClick={changeAmount}>+</Button>
                    </HStack>
                </Flex>
                <Spacer/>
            </Flex>
        </Box>
    )
}

export default ChartItem
