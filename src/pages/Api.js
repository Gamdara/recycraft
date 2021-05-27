import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Flex, Heading } from '@chakra-ui/layout'
import { Select } from '@chakra-ui/select'
import { useToast } from '@chakra-ui/toast'
import React, { useState } from 'react'
import {firestore,storage} from "../firebase"

function Api() {
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur sunt assumenda ducimus rem laudantium ad facere. Eius nemo inventore similique placeat iusto minima? Expedita, consequuntur. Eveniet delectus consequatur consectetur dicta.")
    const [image, setImage] = useState("")
    const [category, setCategory] = useState("")    
    const [file, setFile] = useState()    
    

    const product = {
        name : name,
        desc : desc,
        images: [
            image
        ],
        stock : Math.floor(Math.random() * 50),
        price : Math.floor(Math.random() * (25 - 15) + 15) * 1000,
        rating :  Math.floor(Math.random() * (5 - 3) + 3),
        category : category,
        id : Math.random().toString(36).substring(7)
    }

    const toast = useToast();
    const tambahProduk = () =>{
        storage.ref("images/").child(image).put(file)
        firestore.collection("products").add(product)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            toast({
                title: "Berhasil.",
                description: "Produk berhasil ditambah",
                status: "success",
                duration: 9000,
                isClosable: true,
              })
            setName("");
            setImage("");
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }
    const processImage = (e) => {
        setFile(e.target.files[0]);
        setImage(e.target.files[0].name)
    }

    return (
        <Flex w="100vw" h="100vh" align="center" justify="center" bg="gray.700">
            <Flex bg="white" rounded="md" boxShadow="md" p="10" direction="column" gridGap="5">
                <Heading>Tambah Produk</Heading>
                     
                <FormControl id="name" isRequired>
                    <FormLabel>Nama Produk</FormLabel>
                    <Input placeholder="First name" value={name} onChange={(e)=>setName(e.target.value)} />
                </FormControl>
                
                <FormControl id="desc" isRequired>
                    <FormLabel>Deskripsi Produk</FormLabel>
                    <Input placeholder="First name" value={desc} onChange={(e)=>setDesc(e.target.value)} />
                </FormControl>
                
                {/* <FormControl id="desc" isRequired>
                    <FormLabel>Gambar</FormLabel>
                    <Input placeholder="First name" value={image} onChange={(e)=>setImage(e.target.value)} />
                </FormControl> */}

                <FormControl id="image" isRequired>
                    <FormLabel>Gambar</FormLabel>
                    <input type="file" name="image" id="photo" onChange={(e)=>processImage(e)}/>
                </FormControl>

                <FormControl id="country">
                    <FormLabel>Kateogori</FormLabel>
                    <Select placeholder="Select country" onChange={(e)=>setCategory(e.target.value)}>
                        <option value="tas">Tas</option>
                        <option value="rumah">Alat Rumah Tangga</option>
                        <option value="furnitur">Furnitur</option>
                        <option value="dekorasi">Dekorasi</option>
                    </Select>
                </FormControl>

                <Button w="full" colorScheme="teal" onClick={tambahProduk}>Tambah</Button>
            </Flex>
        </Flex>
    )
}

export default Api
