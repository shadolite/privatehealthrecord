import { Button, Tooltip, Typography } from "@mui/material";
import DangerousOutlinedIcon from "@mui/icons-material/DangerousOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import SyncProblemOutlinedIcon from "@mui/icons-material/SyncProblemOutlined";
import * as React from "react";
import Item from "../../shared/item";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { deleteDatabase } from "../../../store/reducers/dataSlice";

const DeleteRecords: React.FunctionComponent = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleDeleteDatabase = (event: any) => {
    dispatch(deleteDatabase);
  };

  return (
    <Item>
      <Tooltip title={`Delete All Records`}>
        <Button onClick={handleDeleteDatabase}>
          <SyncProblemOutlinedIcon />
          <Typography sx={{ flex: "1 1 100%" }} variant="h6" component="div">
            Reset Data
          </Typography>
        </Button>
      </Tooltip>
    </Item>
  );
};

export default DeleteRecords;
