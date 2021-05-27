import { Flex, Heading, VStack } from '@chakra-ui/layout'
import React from 'react'

function Reviews(props) {
    return (
        <Flex w="inherit" direction="column" gridGap="20px" {...props.container}>
            <Heading size="sm">Reviews</Heading>
            <VStack spacing="20px">
                {props.children}
            </VStack>
        </Flex>
    )
}

export default Reviews
