import { HStack , Switch , Text , useColorMode} from '@chakra-ui/react'
import React from 'react'

const ColorModeSwitch = () => {
    const { colorMode , toggleColorMode } = useColorMode();
  return (
    <HStack>
        <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
        <Text whiteSpace='nowrap'>Dark Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch