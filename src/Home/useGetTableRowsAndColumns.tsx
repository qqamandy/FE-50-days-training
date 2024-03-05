import { useNavigate } from "react-router-dom";
import { StyledTableCell } from "./DashBoard";
import { Level } from "../model";

export const useGetTableRowsAndColumns = () => {
  const createData = (title: string, day: number, level: Level) => {
    return { title, day, level };
  };

  const tableRows = [createData("手寫 clamp", 1, Level.EASY)];

  const createTableColumn = (title: string) => {
    return <StyledTableCell>{title}</StyledTableCell>;
  };
  const tableColumn = ["Title", "Days", "Level"];

  const navigate = useNavigate();
  const navigateToDetailPage = (id: number) => navigate(`/practice/${id}`);

  return { tableRows, createTableColumn, tableColumn, navigateToDetailPage };
};
