import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Stack, Box } from "@mui/material";
import { useGetTableRowsAndColumns } from "./useGetTableRowsAndColumns";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const DashBoard = () => {
  const { tableRows, createTableColumn, tableColumn, navigateToDetailPage } =
    useGetTableRowsAndColumns();

  return (
    <Stack sx={{ width: "100%" }} direction={"column"}>
      <Box>
        <TableContainer component={Paper} sx={{ width: "80%" }}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                {tableColumn.map((name) => createTableColumn(name))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableRows.map((row) => (
                <StyledTableRow
                  key={row.title}
                  sx={{ cursor: "pointer" }}
                  onClick={() => navigateToDetailPage(row.day)}
                >
                  <StyledTableCell component="th" scope="row">
                    {row.title}
                  </StyledTableCell>
                  <StyledTableCell>{row.day}</StyledTableCell>
                  <StyledTableCell>{row.level}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Stack>
  );
};

export default DashBoard;
