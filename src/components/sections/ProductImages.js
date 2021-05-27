import { Image } from '@chakra-ui/image'
import {  VStack } from '@chakra-ui/layout'
import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import sapu from "../../images/sapu.jpeg"
// import bunga from "../../images/bunga-putih.jpg"
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
// import { useState } from 'react';
import { useDownloadURL } from 'react-firebase-hooks/storage';
import { storage } from '../../firebase';

// SwiperCore.use([Navigation]);

function ProductImages(props) {
    // const [images, setImages] = useState([])
    // const [mainImage, setMainImage] = useState(sapu);

    const url = props.images ? props.images[0] : "google.com"
    const [imageURL, loading, error] = useDownloadURL(
        storage.ref(`images/${url}`)
    );

    return (
        <VStack spacing="30px" >
            {/* <button onClick={()=>console.log(images)}>lerolero</button> */}
            <Image w="300px" h="400px" bg="gray.300" objectFit="contain" src={imageURL} rounded="md"/>
            
            <Swiper style={{width:"350px"}} slidesPerView="auto" spaceBetween={5} navigation={true} centerInsufficientSlides={true}>
                {/* {images.map((url,i)=>( */}
                    <SwiperSlide style={{width:"fit-content", cursor:"pointer"}}  >
                        <Image w="60px" h="90px" bg="gray.200" objectFit="contain" src={imageURL} fallbackSrc="https://via.placeholder.com/150"/>
                    </SwiperSlide>
                {/* ))} */}
            </Swiper>
        </VStack>
    )
}

export default ProductImages
