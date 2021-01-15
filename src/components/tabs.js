import React , {useEffect}from 'react';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';

import axios from 'axios'


//components
import StandingsTab from './Tabs/standings'
import PlayersTab from './Tabs/players'
import ChampionsLeagueTab from './Tabs/championsleague'
import StandingsPanel from './TabPanels/StandingsPanel'
import TopPlayersPanel from './TabPanels/TopPlayersPanel'

import ChampionsLeaguePanel from './TabPanels/ChampionsLeaguePanel'



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


export default function FullWidthTabs() {
  const [value, setValue] = React.useState(0);
 



  const handleChange = (event, newValue) => {
    setValue(newValue);

  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className="">
        <ThemeProvider theme={theme}>
      <AppBar  position="static" color="primary">
        <Tabs 
          value={value}
          onChange={handleChange}
          textColor='secondary'
          
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <StandingsTab  handleChange={handleChange} setValue={setValue} label="Standings"  />
          <PlayersTab handleChange={handleChange} setValue={setValue} label="Top Players"  />
          <ChampionsLeagueTab handleChange={handleChange} setValue={setValue} label="Champions League"  />

        </Tabs>
      </AppBar>
      </ThemeProvider>
      <SwipeableViews
        axis= 'x-reverse'
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <StandingsPanel  value={0} index={0} dir='rtl'/>
        <TopPlayersPanel value={1} index={1} dir='rtl'/>
        <ChampionsLeaguePanel value={2} index={2} dir='rtl'/>


      </SwipeableViews>
    </div>
  );
}


