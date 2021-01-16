import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "Rank", label: "Rank", align: "center", minWidth: 10 },
  { id: "Crest", label: "Club", align: "left", minWidth: 10 },
  { id: "Club", label: "", align: "left", minWidth: 60 },
  { id: "Played", label: "Played", align: "center", minWidth: 5 },
  {
    id: "Points",
    label: "Points",
    minWidth: 5,
    align: "center",
  },
  { id: "Form", label: "Form", align: "left", minWidth: 10 },

  {
    id: "Difference",
    label: "GD",
    minWidth: 5,
    align: "center",
  },
];

function createData(Rank, Club, Played, Points, Form, Difference, Crest) {
  return { Rank, Club, Played, Points, Form, Difference, Crest };
}

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable({ footzy }) {
  var rows = [];
  if (footzy !== []) {
    footzy.forEach((el) => {
      rows.push(
        createData(
          el.position,
          el.team.name,
          el.playedGames,
          el.points,
          el.form,
          el.goalDifference,
          el.team.crestUrl
        )
      );
    });
  }

  const classes = useStyles();
  const [page] = React.useState(0);
  const [rowsPerPage] = React.useState(10);

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table style={{ display: "table-row" }}>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.club}>
                  {columns.map((column) => {
                    if (column.id === "Club") {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <div>{value}</div>
                        </TableCell>
                      );
                    } else if (column.id === "Crest") {
                      const img = row["Crest"];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <div>
                            <img style={{ width: "100%" }} src={img} alt="" />
                          </div>
                        </TableCell>
                      );
                    } else {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    }
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
