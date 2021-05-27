import { Flex, Text } from '@chakra-ui/layout'
import { EventSeat, Home, LocalFlorist, LocalMall } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

function CategoryItem(props) {
    const Icons = {
        dekorasi: LocalFlorist,
        rumah: Home,
        tas: LocalMall,
        furnitur: EventSeat
    }
    const Icon = Icons[props.icon]
    const link = `/s/category/${props.icon}`
    return (
        <Link to={link}>
            <Flex  p="20px" direction="row" align="center" justify="start" border="2px solid #E2E8F0" rounded="sm" bg="white" style={{gap:"10px"}}>
                <Icon ></Icon>
                <Text fontSize="lg" isTruncated>{props.category}</Text>
            </Flex>
        </Link>
    )
}

export default CategoryItem
