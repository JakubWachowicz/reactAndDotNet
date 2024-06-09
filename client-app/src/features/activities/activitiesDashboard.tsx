import { Box, Grid } from "@mui/material";
import { Activity } from "../../app/models/Activity";
import ActivityItem from "./ActivityItem";
import Details from "./details";
import { Dispatch, SetStateAction, useState } from "react";
import NewActivityForm from "./newActivityForm";

interface Props {
    activities: Activity[],
    isFormOpened: Boolean,
    setIsFormOpened: Dispatch<SetStateAction<boolean>>
}

export default function ActivitiesDashboard({ activities, isFormOpened, setIsFormOpened }: Props) {
    const [selectedId, setSelectedId] = useState("");
    const [isEditOpened, setIsEditOpened] = useState(false);

    function handleViewClick(newVAl: any) {
        setSelectedId(newVAl);
        setIsFormOpened(false);
    }

    return (
        <>
            <Grid container display="flex" justifyContent="center" marginTop="10vh" alignItems="flex-start">
                <Grid item xs={6}>
                    <Box>
                        {activities.map((activity: Activity) => (
                            <ActivityItem 
                                key={activity.id} 
                                setIsEditOpened={setIsEditOpened} 
                                onClick={handleViewClick} 
                                user={activity} 
                            />
                        ))}
                    </Box>
                </Grid>
                <Grid item xs={4} sx={{ position: "sticky", top: "10vh" }}>
                    <Box sx={{ width: "100%" }}>
                        {isFormOpened ? (
                            <NewActivityForm  closeForm={setIsFormOpened} />
                        ) : (
                            activities[0] && selectedId !== "" && (
                                <Details 
                                    setIsEditOpened={setIsEditOpened} 
                                    onClick={setSelectedId} 
                                    activity={activities.find((a) => a.id === selectedId)!} 
                                />
                            )
                        )}
                        {isEditOpened && (
                            <Box sx={{ width: "100%" }}>
                                <NewActivityForm activity={activities.filter(a=>a.id == selectedId)[0]} closeForm={setIsEditOpened} />
                            </Box>
                        )}
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}
