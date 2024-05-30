import axios from 'axios';
import './App.css';
import { useState,useEffect } from 'react';
import React from 'react';
import ActivityItem from './components/userItem';
import { Box, Grid } from '@mui/material';

function App() {
  const [activities, setActivities] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5000/api/activities').then(response=>{setActivities(response.data)})
  },[]);


  return (
      <>
        <Grid  justifyContent="center"
        alignItems="center" container spacing={2} sx={{ minHeight: '100vh' }}> 
         {activities.map((user)=><ActivityItem user={user} />)}
        </Grid> 
      </>
   
  )
}

export default App
