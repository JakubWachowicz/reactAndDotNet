import {Button, FormControl, TextField } from "@mui/material";
import axios from "axios";
import { Activity } from "../../app/models/Activity";

function CreateNewActivity(){
    axios.post<Activity>("localhost:3000/api/activities/",{
      
    })
}

export default function NewActivityForm() {
    return (
        <>
            <FormControl sx={{position:"fixed",backgroundColor:"white", boxShadow:1,p:1}} >
                <TextField sx={{m:1}} variant="outlined"  label="Tite"  id="title" aria-describedby="my-helper-text" />
                <TextField sx={{m:1}} multiline label="description" id="description" aria-describedby="my-helper-text" />
                <TextField sx={{m:1}}  type="date"/>
                <Button sx={{m:1}} variant="contained">Create new</Button>
            </FormControl>
        </>
    )
}