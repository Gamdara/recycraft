import { Image } from '@chakra-ui/image'
import { Heading } from '@chakra-ui/layout'
import { Flex } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import { TagLabel } from '@chakra-ui/tag'
// import { TagLeftIcon } from '@chakra-ui/tag'
import { Tag } from '@chakra-ui/tag'
import { EventSeat, Home, LocalFlorist, LocalMall } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import RatingStars from '../ui/RatingStars'
import { useDownloadURL } from 'react-firebase-hooks/storage';
import {storage} from "../../firebase"

function ProductBox(props) {
    const url = props.product.images ? props.product.images[0] : "google.com"
    const [imageURL, loading, error] = useDownloadURL(
        storage.ref(`images/${url}`)
    );
    // const imageURL = "google.com"
    const Icons = {
        dekorasi: {
            icon: LocalFlorist,
            text: "Dekorasi"
        },
        rumah: {
            icon: Home,
            text: "Alat Rumah Tangga"
        },
        tas: {
            icon: LocalMall,
            text: "Tas"
        },
        furnitur: {
            icon: EventSeat,
            text: "Furnitur"
        },
    }
    const Icon = props.product.category ? Icons[props.product.category].icon : LocalFlorist
    const label = props.product.category ? Icons[props.product.category].text : "dekorasi"
    const link = `/p/${props.product.id}`
    return (
        <Link to={link}>
            <Box minW="185" maxW="185" bg="white" boxShadow="lg" rounded="5px">
                <Flex pos="relative" height="fit-content" maxW="100%" h="180px" bg="gray.300">
                    <Image w="inherit" h="inherit" m="0 auto" roundedTop="5px" bg="gray.200" pos="absolute" src={imageURL} fallbackSrc="https://via.placeholder.com/150" objectFit="center" objectPosition="center" align="center"></Image>
                    <Tag variant="subtle" colorScheme="cyan" pos="absolute" m="2">   
                        <Icon fontSize="small"/>
                        <TagLabel isTruncated maxW="80px">{label}</TagLabel>
                    </Tag>
                </Flex>

                <Flex gridGap="0px" direction="column" px="5" py="3">
                    <Text fontSize="lg" isTruncated>{props.product.name || "Judul"}</Text>
                    <Heading size="sm">{"Rp. "+props.product.price || "13000"}</Heading>
                    <RatingStars initialRating={props.product.rating || 3.5} readonly size="small"></RatingStars>
                </Flex>
            </Box>
        </Link>
    )
}

export default ProductBox
