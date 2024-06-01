import { AppBar, Box, Button, IconButton, Menu, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React, { Dispatch, SetStateAction } from "react";

interface Props{
    openForm: Dispatch<SetStateAction<Boolean>>
}
export default function NavBar({openForm}:Props){
    return (
        <AppBar position="fixed" sx={{backgroundColor:"whitesmoke"}}>
            <Toolbar>    
                <Typography color="purple" variant="h6" fontWeight="bold"  sx={{flexGrow:1}}>Reactivities</Typography>
                <Box  sx={{display:"flex", gap:3}} >
                    <Button onClick={()=>openForm(true)} variant="contained" >Add Activity</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}