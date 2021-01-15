import React,{useEffect,useState} from 'react'
import TabPanel from '../mixins/TabPanel'
import StandingsTable from '../Tables/StandingsTable'

import axios from 'axios'

/*
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4caf50'
    },
    secondary: {
      main: '#ffffff',
    },
  },
});

*/



export default function FullWidthTabs() {
  const [value, setValue] = React.useState(0);
  const [footzyPL, setfootzyPL] = useState([])
  const [footzyGermany, setfootzyGermany] = useState([])

  const [footzySpain, setfootzySpain] = useState([])

  const [footzyItaly, setfootzyItaly] = useState([])



  //Filter full footzy data by league here
 //Add different league tables

 useEffect(() => {
  const fetchPLData = async () => {
    const response = await axios('http://api.football-data.org/v2/competitions/2021/standings?code=PL',{

    headers:{
      'X-Auth-Token':'a12fe71181fb4a09aa1c36d1d3aee52c'
    }

    })
    if (response.status===200) {
      const footzyPL = await response.data.standings[0].table
      setfootzyPL(footzyPL)


    } 

  }
  const fetchSpainData = async () => {
    const response = await axios('http://api.football-data.org/v2/competitions/PD/standings',{

    headers:{
      'X-Auth-Token':'a12fe71181fb4a09aa1c36d1d3aee52c'
    }

    })
    if (response.status===200) {
      const footzySpain = await response.data.standings[0].table
      setfootzySpain(footzySpain)


    } 

  }
  const fetchItalyData = async () => {
    const response = await axios('http://api.football-data.org/v2/competitions/SA/standings',{

    headers:{
      'X-Auth-Token':'a12fe71181fb4a09aa1c36d1d3aee52c'
    }

    })
    if (response.status===200) {
      const footzyItaly = await response.data.standings[0].table
      setfootzyItaly(footzyItaly)

      console.log('italy', footzyItaly)


    } 

  }
  const fetchGermanyData = async () => {
    const response = await axios('http://api.football-data.org/v2/competitions/BL1/standings',{

    headers:{
      'X-Auth-Token':'a12fe71181fb4a09aa1c36d1d3aee52c'
    }

    })
    if (response.status===200) {
      const footzyGermany = await response.data.standings[0].table
      setfootzyGermany(footzyGermany)
      console.log('Use Effect',response)


    } 

  }

  fetchPLData();
  fetchSpainData()
  fetchItalyData()
  fetchGermanyData()


}, []);

  return (
    <div className="">
      
      
        <TabPanel value={value} index={0} dir='rtl'>

        <div>

          <h3 style={{'text-align':'left', 'margin-left':'3%'}}>Premier League</h3>

        <StandingsTable footzy={footzyPL}/>

        </div>
<div>
<h3 style={{'text-align':'left', 'margin-left':'3%'}}>La Liga</h3>


<StandingsTable footzy={footzySpain}/>

</div>

<div>
<h3 style={{'text-align':'left', 'margin-left':'3%'}}>Serie A</h3>

<StandingsTable footzy={footzyItaly}/>


</div>

<div>
<h3 style={{'text-align':'left', 'margin-left':'3%'}}>Bundesliga</h3>


<StandingsTable footzy={footzyGermany}/>

</div>




        </TabPanel>

       
    </div>
  );
}


