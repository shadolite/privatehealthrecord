import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

interface Props {
  sx: any;
}

const Copyright: React.FunctionComponent<Props> = (
  props: Props
): JSX.Element => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}>
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://github.com/shadolite/privatehealthrecord">
        shadolite
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
