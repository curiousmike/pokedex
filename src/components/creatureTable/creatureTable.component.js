import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import TableRow from "@material-ui/core/TableRow";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import "./creatureTable.css";

const rowsPerPageOptions = [5, 8, 25, { label: "All", value: -1 }];

const CreatureTable = (props) => {
  // const [sortDir, setSortDir] = useState("asc");
  const [isSorted, setSorted] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[1]);

  const sortPokemon = () => {
    setSorted(true);
    // if (foundWords) {
    //   if (sortDir === "asc") {
    //     foundWords.sort((a, b) => b.length - a.length); // sort long to short
    //     setSortDir("desc");
    //   } else {
    //     foundWords.sort((a, b) => a.length - b.length); // sort short to long
    //     setSortDir("asc");
    //   }
    // }
    // setWords(
    //   foundWords.map((word) => {
    //     return word;
    //   })
    // );
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer
      className="creature-container"
      // style={{ backgroundColor: "#ffcb05" }}
      component={Paper}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ width: "140px", padding: "8px" }}>
              I.D.
            </TableCell>
            <TableCell style={{ padding: "8px" }}>
              <TableSortLabel
                classes={{
                  root: isSorted ? "activeSortIcon" : "inactiveSortIcon",
                }}
                direction={"asc"}
                hideSortIcon={props.pokemon.length === 0}
                active={props.pokemon.length > 0}
                onClick={sortPokemon}
              >
                Name
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.pokemon &&
            (rowsPerPage > 0
              ? props.pokemon.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : props.pokemon
            ).map((pokemon, index) => (
              <TableRow
                className="tableRow"
                style={
                  index + page * rowsPerPage === props.selectedPokemonIndex - 1
                    ? {
                        backgroundColor: "gray",
                      }
                    : {
                        backgroundColor: "#3B4CCA",
                      }
                }
                key={index}
                onClick={() =>
                  props.onSelectPokemon(index + page * rowsPerPage)
                }
              >
                <TableCell
                  align="left"
                  style={{ width: "10%", padding: "8px" }}
                >
                  {/* Pokemon ID */}
                  {index + page * rowsPerPage + 1}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  style={{
                    width: "140px",
                    fontSize: "24px",
                    padding: "8px",
                    lineHeight: "1",
                  }}
                >
                  {pokemon.name}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TablePagination
              style={{ padding: "0px" }}
              rowsPerPageOptions={rowsPerPageOptions}
              colSpan={2}
              count={props.pokemon.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              labelRowsPerPage={"R/P"}
              className="tableFooter"
            ></TablePagination>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default CreatureTable;
