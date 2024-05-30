import { Box, Card, Typography } from "@mui/material";
import User from "./demo";

interface Props{
    user:User
}

export default function ActivityItem({user}:Props){
    return (
         <Box sx={{p:5}} key={user.id}>
            <img src="https://static.sepix24.pl/cms/08708588d86d45abb8a2ec190ff141dc-abb.svg"></img>
            <Typography>{user.id}</Typography>
            <Typography>{user.title}</Typography>
          
        </Box>
    )
}