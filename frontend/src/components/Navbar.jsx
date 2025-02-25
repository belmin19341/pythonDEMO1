import { Box, Button, Container, Flex, Text } from "@chakra-ui/react"
import { LuSun} from "react-icons/lu"
import { IoMoon} from "react-icons/io5"
import { useColorMode, useColorModeValue } from "./ui/color-mode";
import CreateUserModal from "./CreateUserModal";


const Navbar = () => {
    const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Container macW={"900px"}>
      <Box
      px={4}
      my={4}
      bg={useColorModeValue("gray.200", "gray.700")}
      borderRadius={5}>
        <Flex h="16" alignItems={"center"} justifyContent={"space-between"}>
            {/* Left side */}
            <Flex alignItems={"center"} justifyContent={"center"} gap={3} display={{base:"none", sm:"flex"}}>
                <img src="/react.png" alt="react logo" width="50" height="50"/>
                <Text fontSize={"40px"}>+</Text>
                <img src="/python.png" alt="python logo" width="50" height="40"/>
                <Text fontSize={"40px"}>=</Text>
                <img src="/explode.png" alt="explode logo" width="45" height="45"/>
            </Flex>
            {/* Right side */}
            <Flex gap={3} alignItems={"center"}>
                <Text fontSize={"lg"} fontWeight={500} display={{base: "none", md:"block"}}> BFFSHIP</Text>
                <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <IoMoon/> : <LuSun size={20}/>} Mode
                </Button>
                <CreateUserModal/>
            </Flex>
        </Flex>
      </Box>
    </Container>
  )
}

export default Navbar
