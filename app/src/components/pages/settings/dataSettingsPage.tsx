import { Stack } from "@mui/material";
import * as React from "react";
import Item from "../../shared/item";
import DeleteRecords from "./deleteRecords";

const DataSettingsPage: React.FunctionComponent = (): JSX.Element => {
  return (
    <Item>
      <Stack spacing={2}>
        <DeleteRecords />
      </Stack>
    </Item>
  );
};

export default DataSettingsPage;
