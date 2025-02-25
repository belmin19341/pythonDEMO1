import { Container, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import UserGrid from './components/UserGrid'

function App() {
  const [count, setCount] = useState(0)
  return (
    <Stack minH={"100vh"}>

      <Navbar/>

      <Container maxW={"1200px"} my={"4"}>
        <Text fontWeight={"bold"} letterSpacing={"2px"} textTransform={"uppercase"} textAlign={"center"} mb={8} fontSize={{base: "3xl", md: "2xl"}}>
          <Text as = {"span"}>
            My BESTIESSS
          </Text>
          🥇
        </Text>

      </Container>
    </Stack>
  )
}

export default App
