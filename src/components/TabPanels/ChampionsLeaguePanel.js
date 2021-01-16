import React, { useEffect } from "react";

import TabPanel from "../mixins/TabPanel";

import "../../styles/CL.css";

import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import axios from "axios";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4caf50",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

export default function FullWidthTabs() {
  const [value, setValue] = React.useState(2);
  const [footzyCL, setfootzyCL] = React.useState([]);

  useEffect(() => {
    const fetchCLData = async () => {
      const response = await axios(
        "https://api.football-data.org/v2/competitions/CL/matches?status=SCHEDULED",
        {
          headers: {
            "X-Auth-Token": "a12fe71181fb4a09aa1c36d1d3aee52c",
          },
        }
      );
      if (response.status === 200) {
        const data = await response.data.matches;
        setfootzyCL(data);
        console.log("champ laeague", data);
      }
    };

    fetchCLData();
  }, []);

  const getISTTime = (date) => {
    let d = new Date(date);
    d = d.toLocaleString().split(",");
    return d[0];
  };

  return (
    <div className="">
      <TabPanel value={value} index={2} dir="rtl">
        {footzyCL.map((el) => {
          return (
            <div className="CL-Tab">
              <div className="metadata">
                {getISTTime(el.utcDate)} - {el.stage.replaceAll("_", " ")}
              </div>

              <div className="Card">
                <div>
                  {" "}
                  <h3> {el.homeTeam.name}</h3>{" "}
                </div>

                <div>
                  <h3>Vs</h3>
                </div>
                <div>
                  <h3> {el.awayTeam.name} </h3>
                </div>
              </div>
            </div>
          );
        })}
      </TabPanel>
    </div>
  );
}
