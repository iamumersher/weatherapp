import { useState } from 'react';
import { Box, styled } from '@mui/material';
import Sunset from '../assets/images/weather.jpeg';
import Form from '../components/Form';
import Information from '../components/Information';
import Weathercard from '../components/Weathercard';

const Component = styled(Box)({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    width: '100%',
    backgroundColor:'#81c4ff'
})

const Image = styled(Box)({
    backgroundImage: `url(${Sunset})`,
    width: '27%',
    height: '100%',
    backgroundSize: 'cover',
    borderRadius: '20px 0 0 20px'
})

const Home = () => {
    const [result, setResult] = useState({})
    const [weeklyResult, setWeeklyResult] = useState(null)
    console.log('weeklyResult:::',weeklyResult)

    return (
        <Component>
            <Image></Image>
            <Box style={{ width: '100%', height: '100%' }}>
                <Form setResult={setResult} setWeeklyResult={setWeeklyResult}/>
                <Information result={result} />
                {weeklyResult && weeklyResult.daily.time.map((item, index) => <Weathercard data={weeklyResult.daily} index={index} />)}

            </Box>

        </Component>
    )
}

export default Home;