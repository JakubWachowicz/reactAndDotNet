import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { Activity } from "../../app/models/Activity";
import CloseIcon from '@mui/icons-material/Close';
import { DeleteActivity } from "../../app/providers/activityProvider";
interface Props{
    activity: Activity
    onClick:  Dispatch<SetStateAction<string>>
    setIsEditOpened:Dispatch<SetStateAction<boolean>>

}

export default function Details({activity,onClick,setIsEditOpened}:Props){

    const deleteActivity = DeleteActivity();
    
    return (
        activity==null?null:
        <>
            <Card sx={{ minHeight: "200px", p: 2 }}>
                <CardHeader 
                title={activity.title}
                action={
                    <IconButton onClick={()=>{
                        setIsEditOpened(false)
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
                    <Button variant="contained" color="error" onClick={()=>{setIsEditOpened(false);deleteActivity!(activity)}}>Delete</Button>
                    <Button variant="contained" onClick={()=>{setIsEditOpened(true)}}>Edit</Button>
                </CardActions>
            </Card>
        </>
    )
}
