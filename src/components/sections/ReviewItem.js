import { Avatar } from '@chakra-ui/avatar'
import { Flex, Text } from '@chakra-ui/layout'
import React from 'react'
import RatingStars from '../ui/RatingStars'

function ReviewItem(props) {
    return (
        <Flex gridGap="20px" bg="white" rounded="md" p={5}>
            <Avatar name={props.user || "Anonymous"}/>
            <Flex gridGap="5px" direction="column">
                <Text>{props.user || "Anonymous"}</Text>
                <RatingStars rating={props.rating || 3.5}/>
                <Text textAlign="justify" >{props.review || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit voluptate ea delectus officiis, eum, blanditiis amet expedita fugit aliquid tempore dolorum asperiores molestiae veniam. Saepe laboriosam iure esse voluptatem repudiandae."}</Text>
            </Flex>
        </Flex>
    )
}

export default ReviewItem
