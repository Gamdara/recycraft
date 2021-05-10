import { Box } from '@chakra-ui/layout'
import { SimpleGrid } from '@chakra-ui/layout'
// import { HStack } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/layout'
// import { Heading } from '@chakra-ui/layout'
import { Flex } from '@chakra-ui/layout'
import { EventSeat } from '@material-ui/icons'
import React from 'react'
import StoreLayout from "../components/layouts/StoreLayout"
import ProductBox from '../components/sections/ProductBox'
import sapu from "../images/sapu.jpeg"
// import bungaputih from "../images/bunga-putih.jpg"
// import kursi from "../images/kursi.jpeg"
// import tas from "../images/tas.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import banner1 from "../images/banner-1.png"
import { Image } from '@chakra-ui/image'

function StoreIndex() {
    
    return (
        <div>
            <StoreLayout >
                
                <Swiper style={{width:"100%",height: "300px", margin:"0 0 50px 0"}} pagination="true">
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
                
                {/* <Flex mb={["20px","30px","40px"]} h="50px">
                    <Heading >Kategori</Heading>
                </Flex> */}

                <SimpleGrid columns={[2,2,3,4]} spacing="15px" mb={["40px","60px","50px"]} w="inherit" >
                    <Flex  px="30px" py="20px" direction="row" align="center" justify="start" border="2px solid #E2E8F0" rounded="sm" bg="white" gridGap={3}>
                        <EventSeat ></EventSeat>
                        <Text fontSize="lg">Kategori</Text>
                    </Flex>
                    <Flex  px="30px" py="20px" direction="row" align="center" justify="start" border="2px solid #E2E8F0" rounded="sm" bg="white" gridGap={3}>
                        <EventSeat ></EventSeat>
                        <Text fontSize="lg">Kategori</Text>
                    </Flex>
                    <Flex  px="30px" py="20px" direction="row" align="center" justify="start" border="2px solid #E2E8F0" rounded="sm" bg="white" gridGap={3}>
                        <EventSeat ></EventSeat>
                        <Text fontSize="lg">Kategori</Text>
                    </Flex>
                    <Flex  px="30px" py="20px" direction="row" align="center" justify="start" border="2px solid #E2E8F0" rounded="sm" bg="white" gridGap={3}>
                        <EventSeat ></EventSeat>
                        <Text fontSize="lg">Kategori</Text>
                    </Flex>
                </SimpleGrid>

                <Swiper style={{width:"100%",margin:"0 0 50px 0"}} slidesPerView={5} spaceBetween={10}>
                    <SwiperSlide style={{width:"fit-content"}}>
                        <ProductBox image={sapu} judul="Judul" harga="25000" rating="3.5"></ProductBox>
                    </SwiperSlide>
                    <SwiperSlide  style={{width:"fit-content"}}>
                        <ProductBox image={sapu} judul="Judul" harga="25000" rating="3.5"></ProductBox>
                    </SwiperSlide>
                    <SwiperSlide  style={{width:"fit-content"}}>
                        <ProductBox image={sapu} judul="Judul" harga="25000" rating="3.5"></ProductBox>
                    </SwiperSlide>
                    <SwiperSlide  style={{width:"fit-content"}}>
                        <ProductBox image={sapu} judul="Judul" harga="25000" rating="3.5"></ProductBox>
                    </SwiperSlide>
                    <SwiperSlide  style={{width:"fit-content"}}>
                        <ProductBox image={sapu} judul="Judul" harga="25000" rating="3.5"></ProductBox>
                    </SwiperSlide>
                    <SwiperSlide  style={{width:"fit-content"}}>
                        <ProductBox image={sapu} judul="Judul" harga="25000" rating="3.5"></ProductBox>
                    </SwiperSlide>
                    <SwiperSlide  style={{width:"fit-content"}}>
                        <ProductBox image={sapu} judul="Judul" harga="25000" rating="3.5"></ProductBox>
                    </SwiperSlide>
                    <SwiperSlide  style={{width:"fit-content"}}>
                        <ProductBox image={sapu} judul="Judul" harga="25000" rating="3.5"></ProductBox>
                    </SwiperSlide>
                    
                    {/* <ProductBox image={bungaputih} judul="Judul" harga="25000" rating="3.5"></ProductBox>
                    <ProductBox image={tas} judul="Judul" harga="25000" rating="3.5"></ProductBox>
                    <ProductBox image={kursi} judul="Judul" harga="25000" rating="3.5"></ProductBox>
                    <ProductBox image={kursi} judul="Judul" harga="25000" rating="3.5"></ProductBox>     */}
                </Swiper>
            </StoreLayout>
        </div>
    )
}

export default StoreIndex
