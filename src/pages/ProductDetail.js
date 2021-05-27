import { Button } from '@chakra-ui/button'
import { Input } from '@chakra-ui/input'
import { Heading, Text } from '@chakra-ui/layout'
import { HStack } from '@chakra-ui/layout'
import { Flex } from '@chakra-ui/layout'
import { useNumberInput } from '@chakra-ui/number-input'
import { Table, Tbody, Td, Tr } from '@chakra-ui/table'
import { useToast } from '@chakra-ui/toast'
import React, { useContext } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useParams } from 'react-router'
import ChartContext from '../chart-context'
import StoreLayout from '../components/layouts/StoreLayout'
import ProductImages from '../components/sections/ProductImages'
import ReviewItem from '../components/sections/ReviewItem'
import Reviews from '../components/sections/Reviews'
import RatingStars from '../components/ui/RatingStars'
import { firestore } from '../firebase'

function ProductDetail(props) {
    const {chart,setChart} = useContext(ChartContext)
    let {id} = useParams();
    const [value, loading, error] = useCollectionData(
        firestore.collection('products').where("id", "==", id)
      );
    const product = value != undefined ? value[0] : {}
    const {
        getInputProps,
        getIncrementButtonProps,
        getDecrementButtonProps,
      } = useNumberInput({
        step: 1,
        defaultValue: 0,
        min: 0,
        max: product.stock,
      })
      const inc = getIncrementButtonProps()
      const dec = getDecrementButtonProps()
      const input = getInputProps({readOnly:true})

      const toast = useToast();
      const addItem = () => {
        if(chart[product.id]){
            chart[product.id].amount = parseInt(input.value)
            setChart(chart)
        }
        else 
            setChart(
                {
                    ...chart,
                    [product.id]: {
                        ...product, 
                        amount: parseInt(input.value)
                    }
                }
            )
        toast({
            title: "Berhasil.",
            description: "Produk berhasil ditambah",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top"
        })
      }
    return (
        <StoreLayout container={{gap: "20px"}}>
            {/* <button onClick={()=>console.log(value)}>yo</button> */}
            <Flex direction="row" gridGap="50px" flexWrap="wrap" justifyContent="center" >
                <ProductImages images={product.images}/>
                <Flex direction="column" gridGap="15px" minW="300px" maxW={["200px",null,"600px"]} >
                    <Text fontSize="3xl">{product.name || "Nama Produk"}</Text>
                    <RatingStars initialRating={product.rating || "3.5"}/>
                    <Heading size="2xl">Rp. {product.price || "15.000"}</Heading>
                    <Text fontWeight="bold" mb="-2">Deskripsi</Text>
                    <Text textAlign="justify" >{product.desc || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nisi neque doloremque est aliquam magnam vel ad, veniam deleniti fuga. Sunt explicabo omnis, fuga ullam quidem blanditiis pariatur saepe delectus."}</Text>
                    <Text fontWeight="bold" mb="-2">Keterangan</Text>
                    <Table  variant="simple">
                        <Tbody>
                            <Tr>
                                <Td>Stok</Td>
                                <Td fontWeight="bold">{product.stock || "10"}</Td>
                            </Tr>
                            <Tr>
                                <Td>Kategori</Td>
                                <Td fontWeight="bold">{product.category || "Dekorasi"}</Td>
                            </Tr>                        
                        </Tbody>
                    </Table>
                    <Flex w="inherit" gridGap="30px" justifyContent="space-between" direction={["column",null,"row"]}>
                        <HStack textColor="teal.900" >
                            <Button {...dec} fontWeight="black">-</Button>
                            <Input {...input} fontWeight="black" variant="filled" textAlign="center"/>
                            <Button {...inc} fontWeight="black">+</Button>
                        </HStack>
                        <Button disabled={parseInt(input.value) > 0 ? false : true} colorScheme="teal" bg="green.700" onClick={addItem}>Masukkan Keranjang</Button>
                    </Flex>
                </Flex>
            </Flex>
            <Reviews container={{marginTop:"50px"}}>
                <ReviewItem></ReviewItem>
                <ReviewItem></ReviewItem>
            </Reviews>
        </StoreLayout>
    )
}

export default ProductDetail
