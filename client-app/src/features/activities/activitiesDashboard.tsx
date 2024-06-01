import { Box, Grid } from "@mui/material";
import { Activity } from "../../app/models/Activity";
import ActivityItem from "./ActivityItem";
import Details from "./details";
import { useState } from "react";
import NewActivityForm from "./newActivityForm";

interface Props {
    activities: Activity[],
    isFormOpened:Boolean
}

export default function ActivitiesDashboard({ activities,isFormOpened }: Props) {
    const [selectedId, setSelectedId] = useState("");
    return (
        <>
                    
            <Grid container display="flex" justifyContent="center" marginTop="10vh" alignItems="flex-start">
                <Grid item xs={6}>
                    <Box>
                        {activities.map((activity: Activity) => <ActivityItem key={activity.id} onClick={setSelectedId} user={activity} />)}
                    </Box>
                </Grid>
                <Grid item xs={4} sx={{ position: "sticky", top: "10vh" }}>
                    {isFormOpened? <NewActivityForm/>: activities[0] &&  selectedId!="" && <Details onClick={setSelectedId} activity={activities.find((a)=>a.id == selectedId)!} />}
                </Grid>
            </Grid>
        </>
    )
}
