import { Backdrop, Box, Button, Card, Typography } from "@mui/material";
import { Activity } from "../../app/models/Activity";
import { Dispatch, SetStateAction } from "react";

interface Props{
    user:Activity
    onClick:  Dispatch<SetStateAction<string>>
}

export default function ActivityItem({user,onClick}:Props){
    return (
         <Box justifyContent="center" alignContent="center" sx={{p:2,marginBottom:1,boxShadow:2, width: "90%", height:"200px" // Adjust width based on screen size
}} key={user.id}>
            <Typography  marginTop="2"  variant="h4">{user.title}</Typography>
            <Typography  sx={{marginTop:1, marginBottom:1}} >{user.id}</Typography>
            <Typography sx={{marginTop:1, marginBottom:1}} >{user.description}</Typography>
             <Box  display="flex" sx={{justifyContent:"space-between"}}>
             <Typography sx={{border:1,borderRadius:2, padding:1}}> Music</Typography>
              <div> <Button variant="contained" color="error">Delete</Button> <Button onClick={()=>{onClick(user.id)}} variant="contained">View</Button></div>  
             </Box>
             
        </Box>
    )
}