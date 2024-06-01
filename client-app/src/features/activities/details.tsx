import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { Activity } from "../../app/models/Activity";
import CloseIcon from '@mui/icons-material/Close';
interface Props{
    activity: Activity
    onClick:  Dispatch<SetStateAction<string>>
}

export default function Details({activity,onClick}:Props){
    return (
        <>
            <Card sx={{ minHeight: "200px", p: 2 }}>
                <CardHeader 
                title={activity.title}
                action={
                    <IconButton onClick={()=>{
                        onClick("")
                    }} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                } ></CardHeader>
                <CardMedia
                    component="img"
                    height="140"
                    image= "\vite.svg"
                    alt={activity.title}
                />
                <CardContent>
                    <Typography variant="h4">{activity.title}</Typography>
                    <Typography>{activity.id}</Typography>
                    <Typography>{activity.description}</Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="error">Delete</Button>
                    <Button variant="contained">Edit</Button>
                </CardActions>
            </Card>
        </>
    )
}
