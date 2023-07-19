import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



export default function BasicCard({data, index}) {
  return (
    <Card sx={{ maxWidth: 200,marginLeft: 10,marginRight:10,display:'inline' ,float:'left'}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        
                Date: {data.time[index]}

        </Typography>
        <Typography variant="h5" component="div">
        Temperature: {data.temperature_2m_min[index]}°C  - {data.temperature_2m_max[index]} °C
        </Typography>
       
      </CardContent>
     
    </Card>
  );
}
