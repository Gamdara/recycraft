import { Flex, Heading,  Text } from '@chakra-ui/layout'
import React, { useState } from 'react'
import StoreLayout from '../components/layouts/StoreLayout'
import ProductBox from '../components/sections/ProductBox'
import InfiniteScroll from "react-infinite-scroll-component";
import { CircularProgress, Skeleton, useBreakpointValue} from "@chakra-ui/react"
import {firestore} from "../firebase"
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useParams } from 'react-router';

function StoreSearch(props) {
    const {type,filter} = useParams();
    const operator = type == "category" ? "==" : ">=";

    const [value, loading, error] = useCollectionData(
        firestore.collection('products').where(type, operator, filter)
      );
      
    const products = value != undefined ? value : [{images: ["tas.jpg"]}]
    let  [ items, setItems ] = useState(Array.from({ length: 20 }))
    let [hasMore, sethasMore] = useState(true)

    const fetchMoreData = async () => {
        if (items.length >= 100) {
          sethasMore(false);
          return;
        }
        // a fake async api call like which sends
        // 20 more records in .5 secs
        // const [newvalue, newloading, newerror] = useCollectionData(
        //     firestore.collection('products').limit(2)
        //   );

        setTimeout(() => {
            let newData = items.concat(Array.from({ length: 20 }))
            setItems(newData)
        }, 5000);
      };
    const gap= useBreakpointValue({base:"10px", md:"30px"})

    return (
        // <div>
            <StoreLayout>
                <Flex w="inherit" direction="column">
                    <Heading size="md" mb="20px">Hasil Cari : </Heading>                        
                        <InfiniteScroll
                        dataLength={items.length}
                        next={fetchMoreData}
                        hasMore={hasMore}
                        loader={<CircularProgress mt="20px" w="100%" display="flex" justifyContent="center"isIndeterminate color="green.300" />}    
                        endMessage={
                            <Text>End of Result</Text>
                        }
                        style={{display:"flex", flexWrap:"wrap", overflowY:"hidden", gap:gap, justifyContent: "center"}}
                        >
                            {products.map((product, index) => (
                                <Skeleton isLoaded={!loading}>
                                    <ProductBox product={product} ></ProductBox>
                                </Skeleton>
                            ))}
                        </InfiniteScroll>
                </Flex>
            </StoreLayout>
        // </div>
    )
}

export default StoreSearch
