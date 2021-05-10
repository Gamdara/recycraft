import { Image } from '@chakra-ui/image'
import { Heading } from '@chakra-ui/layout'
import { Flex } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import { TagLabel } from '@chakra-ui/tag'
// import { TagLeftIcon } from '@chakra-ui/tag'
import { Tag } from '@chakra-ui/tag'
import { LocalFlorist } from '@material-ui/icons'
import React from 'react'
import RatingStars from '../ui/RatingStars'


function ProductBox(props) {
    return (
        <div>
            <Box minW="200" maxW="200" bg="white" boxShadow="md">
                <Flex pos="relative" height="fit-content" maxW="100%" h="180px" bg="red">
                    <Image w="inherit" h="inherit" m="0 auto" bg="gray.200" pos="absolute" src={props.image} objectFit="cover" align="center"></Image>
                    <Tag variant="subtle" colorScheme="cyan" pos="absolute" m="2">
                        <LocalFlorist fontSize="small"/>
                        <TagLabel >Dekorasi</TagLabel>
                    </Tag>
                </Flex>

                <Flex gridGap="0px" direction="column" px="5" py="3">
                    <Text fontSize="xl">{props.judul}</Text>
                    <Heading size="md">{"Rp. "+props.harga}</Heading>
                    <RatingStars initialRating={props.rating} readonly></RatingStars>
                </Flex>
            </Box>
        </div>
    )
}

export default ProductBox
