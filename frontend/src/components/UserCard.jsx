import { Avatar, Box, Card, CardBody, CardHeader, Flex, Heading, IconButton, Text } from "@chakra-ui/react"
import { BiTrash } from "react-icons/bi"

const UserCard = ({user}) => {
  return (
    <Card border="2px solid #E2E8F0" p={4} mb={4} borderRadius="md" boxShadow="md">
        <CardHeader>
            <Flex gap={4}>
                {/* Left */}
                <Flex flex={"1"} gap = {4} alignItems={"center"}>
                    <Avatar src="https://avatar.iran.liara.run/public"/>

                    <Box>
                        <Heading size='sm'>
                            {user.name}
                        </Heading>
                        <Text>
                            {user.role}
                        </Text>
                    </Box>
                </Flex>



                {/* Right */}
                <Flex>
                    {/*<EditModal user={user}/>*/}
                    <IconButton aria-label="See menu" icon={<BiTrash size={20}/>} colorScheme="red" size={"sm"} variant={'ghost'}/>
                </Flex>
            </Flex>
        </CardHeader>


        <CardBody>
            <Text>
                {user.description}
            </Text>
        </CardBody>
    </Card>
  )
}

export default UserCard
