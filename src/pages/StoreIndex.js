import { SimpleGrid } from '@chakra-ui/layout'
import { Heading } from '@chakra-ui/layout'
import { Flex } from '@chakra-ui/layout'
import React, { useContext, useEffect, useState } from 'react'
import StoreLayout from "../components/layouts/StoreLayout"
import ProductBox from '../components/sections/ProductBox'
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from '@chakra-ui/image'
import { Box } from '@chakra-ui/layout'
import banner1 from "../images/banner-1.png"
import SwiperCore, {
    Autoplay,Pagination,Navigation
} from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import CategoryItem from '../components/ui/CategoryItem'
import { useBreakpointValue } from '@chakra-ui/media-query'
import {firestore}from "../firebase"
import {useCollectionData} from "react-firebase-hooks/firestore"
import { Skeleton } from '@chakra-ui/skeleton'
import ChartContext from "../chart-context";

SwiperCore.use([Autoplay,Pagination,Navigation]);

function StoreIndex() {
    
    const {chart,setChart} = useContext(ChartContext)
    const [value, loading, error] = useCollectionData(
        firestore.collection('products').limit(10)
      );

    const products = value != undefined ? value : []
    const bannerHeight = useBreakpointValue({base:"200px", md:"400px"})
    console.log(chart)
    return (
        <div>
            {/* <button onClick={()=>console.log(value)}>awd</button> */}
            <StoreLayout >
                <Swiper style={{width:"100%",height: bannerHeight, margin:"0 0 15px 0"}} autoplay={{
                "delay": 2500,
                "disableOnInteraction": false
                }} pagination={{
                "clickable": true
                }} navigation={true}
                slidesPerView={1}  >
                    <SwiperSlide>
                        <Box w="100%" h="100%" bgGradient="linear(to-b,yellow.300, blue.100)" rounded="md">
                            <Image h="inherit" w="inherit" src={banner1} objectFit="cover" objectPosition="center"></Image>
                        </Box>    
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box w="100%" h="100%" bgGradient="linear(to-b,yellow.300, blue.100)" rounded="md">
                            <Image h="inherit" w="inherit" src={banner1} objectFit="cover" objectPosition="center"></Image>
                        </Box>    
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box w="100%" h="100%" bgGradient="linear(to-b,yellow.300, blue.100)" rounded="md">
                            <Image h="inherit" w="inherit" src={banner1} objectFit="cover" objectPosition="center"></Image>
                        </Box>    
                    </SwiperSlide>
                </Swiper>
                
                <Flex h="50px" mb={["10px","20px","15px"]} align="center">
                    <Heading size="lg">Kategori</Heading>
                </Flex>

                <SimpleGrid columns={[2,2,3,4]} spacing="15px" mb={["40px","60px","80px"]} w="inherit" >
                    <CategoryItem icon="dekorasi" category="Dekorasi"></CategoryItem>
                    <CategoryItem icon="rumah" category="Alat Rumah Tangga"></CategoryItem>
                    <CategoryItem icon="tas" category="Tas"></CategoryItem>
                    <CategoryItem icon="furnitur" category="Furnitur"></CategoryItem>
                </SimpleGrid>

                <Swiper style={{width:"100%",margin:"0 0 50px 0"}} slidesPerView="auto" spaceBetween={10}>
                        {products.map((product, index) => (
                            <SwiperSlide style={{width:"fit-content"}} key={index}>
                                <Skeleton isLoaded={!loading}>
                                <ProductBox product={product} ></ProductBox>
                                </Skeleton>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </StoreLayout>
        </div>
    )
}

export default StoreIndex
