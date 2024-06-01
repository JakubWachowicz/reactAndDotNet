import axios from 'axios';
import { useState,useEffect } from 'react';
import ActivityItem from '../../features/activities/ActivityItem';
import { Box, Grid } from '@mui/material';
import { Activity } from '../models/Activity';
import NavBar from '../../features/NavBar';
import ActivitiesDashboard from '../../features/activities/activitiesDashboard';
import Details from '../../features/activities/details';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isFormOpened,setIsFormOpened] = useState<Boolean>(false)
  useEffect(()=>{
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(response=>{setActivities(response.data)})
  },[]);


  return (
      <>
        <NavBar openForm={setIsFormOpened}/>
        <ActivitiesDashboard isFormOpened={isFormOpened} activities={activities}/>

      </>
  )
}

export default App
1