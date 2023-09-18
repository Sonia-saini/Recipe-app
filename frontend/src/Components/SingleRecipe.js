import { Text,Image, Box } from '@chakra-ui/react'
import React from 'react'

function SingleRecipe({title,summery,image}) {
    // console.log(title)
  return (
    <><Box><Text>{title}</Text>
    <Image src={image}/>
    <Text>{summery}</Text>
    </Box></>
  )
}

export default SingleRecipe