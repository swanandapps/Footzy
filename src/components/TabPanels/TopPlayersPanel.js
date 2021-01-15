import React,{useEffect,useState} from 'react'
import TabPanel from '../mixins/TabPanel'
import TopPlayersTable from '../Tables/TopPlayersTable'

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
  const [footzyCL, setfootzyCL] = useState([])




  //Filter full footzy data by league here
 //Add different league tables

 useEffect(() => {
  const fetchPLData = async () => {
    const response = await axios('http://api.football-data.org//v2/competitions/PL/scorers',{

    headers:{
      'X-Auth-Token':'a12fe71181fb4a09aa1c36d1d3aee52c'
    }

    })
    if (response.status===200) {
      const footzyPL = await response.data.scorers
      console.log('premier LEAGUE', footzyPL)

      setfootzyPL(footzyPL)



    } 

  }
  const fetchSpainData = async () => {
    const response = await axios('http://api.football-data.org//v2/competitions/PD/scorers',{

    headers:{
      'X-Auth-Token':'a12fe71181fb4a09aa1c36d1d3aee52c'
    }

    })
    if (response.status===200) {
      const footzySpain = await response.data.scorers
      setfootzySpain(footzySpain)


    } 

  }
  const fetchItalyData = async () => {
    const response = await axios('http://api.football-data.org//v2/competitions/SA/scorers',{

    headers:{
      'X-Auth-Token':'a12fe71181fb4a09aa1c36d1d3aee52c'
    }

    })
    if (response.status===200) {
      const footzyItaly = await response.data.scorers
      setfootzyItaly(footzyItaly)



    } 

  }
  const fetchGermanyData = async () => {
    const response = await axios('http://api.football-data.org//v2/competitions/BL1/scorers',{

    headers:{
      'X-Auth-Token':'a12fe71181fb4a09aa1c36d1d3aee52c'
    }

    })
    if (response.status===200) {
      const footzyGermany = await response.data.scorers
      setfootzyGermany(footzyGermany)


    }
  }

  const fetchCLData = async () => {
    const response = await axios('http://api.football-data.org//v2/competitions/CL/scorers',{

    headers:{
      'X-Auth-Token':'a12fe71181fb4a09aa1c36d1d3aee52c'
    }

    })
    if (response.status===200) {
      const footzyCL = await response.data.scorers
      setfootzyCL(footzyCL)


    }   

  }

  fetchPLData();
  fetchSpainData()
  fetchItalyData()
  fetchGermanyData()
  fetchCLData()


}, []);

  return (
    <div className="">
      
      
        <TabPanel value={value} index={0} dir='rtl'>

        <div>

          <h3 style={{'text-align':'left', 'margin-left':'3%'}}>Premier League</h3>

        <TopPlayersTable footzy={footzyPL}/>

        </div>
<div>
<h3 style={{'text-align':'left', 'margin-left':'3%'}}>La Liga</h3>


<TopPlayersTable footzy={footzySpain}/>

</div>

<div>
<h3 style={{'text-align':'left', 'margin-left':'3%'}}>Serie A</h3>

<TopPlayersTable footzy={footzyItaly}/>


</div>

<div>
<h3 style={{'text-align':'left', 'margin-left':'3%'}}>Bundesliga</h3>


<TopPlayersTable footzy={footzyGermany}/>

</div>


<div>

<h3 style={{'text-align':'left', 'margin-left':'3%'}}>Champions League</h3>


<TopPlayersTable footzy={footzyCL}/>


</div>






        </TabPanel>

       
    </div>
  );
}


