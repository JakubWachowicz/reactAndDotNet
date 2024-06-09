import axios from 'axios';
import { useState, useEffect } from 'react';
import ActivityItem from '../../features/activities/ActivityItem';
import { Box, Grid } from '@mui/material';
import { Activity } from '../models/Activity';
import NavBar from '../../features/NavBar';
import ActivitiesDashboard from '../../features/activities/activitiesDashboard';
import ActivityProvider, { GetActivities } from '../providers/activityProvider';


export function App() {
  return (
    <>
      <ActivityProvider>
        <MainContent />
      </ActivityProvider>
    </>
  )
}

function MainContent() {
  const activities = GetActivities();
  const [isFormOpened, setIsFormOpened] = useState<boolean>(false);
  return (
    <>
      <NavBar openForm={setIsFormOpened} />
      <ActivitiesDashboard setIsFormOpened={setIsFormOpened} isFormOpened={isFormOpened} activities={activities} />
    </>
  );
}
export default App
