import { Dispatch, createContext, useContext, useEffect, useState } from "react";
import { Activity } from "../models/Activity";
import { v4 as uuid } from "uuid";
import agent from "../api/agent";
import { Box, CircularProgress, Typography } from "@mui/material";
type CreateOrEditActivityFunction = (activity: Activity) => void;
const ActivityContext = createContext<Activity[]>([]);
const SetActivitiesContext = createContext<Dispatch<Activity[]> | undefined>(undefined);
const CreateOrEditActivityContext = createContext<CreateOrEditActivityFunction | undefined>(undefined);

const DeleteActivityContext = createContext<CreateOrEditActivityFunction | undefined>(undefined);

export function GetActivities() {
    return useContext(ActivityContext);
}
export function CreateOrEditActivity() {
    return useContext(CreateOrEditActivityContext);
}
export function SetActivities() {
    return useContext(SetActivitiesContext)
}

export function DeleteActivity() {
    return useContext(DeleteActivityContext)
}

export default function ActivityProvider({ children }: any) {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [isLoading,setIsLoading] = useState<boolean>(true);

    function handleDeleteActivity(activity: Activity) {

        agent.Activities.delete(activity.id!).then(()=>{
            setActivities([...activities.filter(a => a.id != activity.id)])
        })
    }
    function handleCreateOrEditActivity(activity: Activity) {

        if(activity.id){
            agent.Activities.update(activity).then(()=>{
                setActivities([...activities.filter(a => a.id != activity.id), activity])
            })
        }else{
            agent.Activities.create(activity).then(()=>{
                setActivities([...activities, { ...activity, id: uuid() }]);
            })
           
        }
        
    }

    useEffect(() => {
        agent.Activities.list().then(response => {
            let activities: Activity[] = [];
            response.forEach((a) => {
                a.date = a.date?.split("T")[0];
                activities.push(a);
            })
            setActivities(activities)
            setIsLoading(false);
        })
    }, []);


   

    if (isLoading) {
        return (
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                >
                    <Typography variant="h2" sx={{p:2, color:"purple",}}>Reactivities</Typography>
                    <CircularProgress color="secondary" />
               
                
        
            </Box>
        );
    }

    return (
        <ActivityContext.Provider value={activities}>
            <SetActivitiesContext.Provider value={setActivities}>
                <CreateOrEditActivityContext.Provider value={handleCreateOrEditActivity}>
                    <DeleteActivityContext.Provider value={handleDeleteActivity}>
                        {children}
                    </DeleteActivityContext.Provider>
                </CreateOrEditActivityContext.Provider>
            </SetActivitiesContext.Provider>
        </ActivityContext.Provider>
    )
}