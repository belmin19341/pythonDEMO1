import { Grid } from "@chakra-ui/react"
import UserCard from "./UserCard"
import { USERS } from "@/dummy/dummy"

const UserGrid = () => {
  return (
    <Grid border={"2px solid black"} templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
    }} >

        {USERS.map((user) => (
            <UserCard key={user.id} user={user} />
        )) }
    </Grid>
  )
}

export default UserGrid
