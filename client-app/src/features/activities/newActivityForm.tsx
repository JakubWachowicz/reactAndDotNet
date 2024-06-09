import { Box, Button, FormControl, IconButton, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { Dispatch, SetStateAction } from "react";
import { Activity } from "../../app/models/Activity";
import { CreateOrEditActivity } from "../../app/providers/activityProvider";


interface Props {
    closeForm: Dispatch<SetStateAction<boolean>>;
    activity?: Activity
}

export default function NewActivityForm({ closeForm, activity }: Props) {

    useEffect(() => {

        if (activity != null) {
            if (activity.id != null) {
                setId(activity.id)
            }
            if (activity.date != null) {
                setDate(activity.date);
            }
            if (activity.description != null) {
                setDescription(activity.description)
            }
            if (activity.title != null) {
                setTitle(activity.title)
            }
        }

    }, []);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState<string>("");
    const [id,setId] =  useState<string>("")
    let handleCreateActivity = CreateOrEditActivity();

    function handleSubmit() {
         var newActivity:Activity;
        if(id != ""){
             newActivity = {
                id :id,
                title: title,
                date: date,
                description: description,
            };
        }else{
             newActivity = {
            
                title: title,
                date: date,
                description: description,
            };
        }
        


        handleCreateActivity!(newActivity);
        closeForm(false);
    }

    return (
        <>
            <FormControl sx={{ backgroundColor: "white", boxShadow: 1, width: "100%" }}>
                <Box sx={{ marginLeft: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography>New Activity</Typography>
                    <IconButton onClick={() => {
                        closeForm(false);
                    }} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                </Box>
                <TextField
                    sx={{ m: 1 }}
                    variant="outlined"
                    label="Title"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    aria-describedby="my-helper-text"
                />
                <TextField
                    sx={{ m: 1 }}
                    multiline
                    label="Description"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    aria-describedby="my-helper-text"
                />
                <TextField
                    sx={{ m: 1 }}
                    type="date"
                    id="Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <Button sx={{ m: 1 }} onClick={handleSubmit} variant="contained">Create new</Button>
            </FormControl>
        </>
    );
}
