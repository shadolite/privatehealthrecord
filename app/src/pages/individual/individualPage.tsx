import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import * as IndividualData from "../../redux/components/individual/individualSlice";
import DetailsItem from "./details";
import { IDetails } from "../../models/individual/IDetails";

const IndividualPage: React.FunctionComponent = (): JSX.Element => {
  const getTestPersonalDetails = () => {
    return {
      id: 0,
      givenName: "Amy",
      familyName: "Howell",
      birthdate: new Date("2001/01/01"),
      height: 1,
      address: "1234 Alley Street",
      phoneNumber: "555-555-5555",
      notes:
        "Vero repudiandae quis laboriosam omnis dolore. Quia reprehenderit soluta nulla facere recusandae qui magnam. Reprehenderit molestias rerum praesentium totam accusamus earum corporis maxime. Qui natus et sed omnis maxime omnis suscipit. Dolore velit error illo delectus. Recusandae saepe eum provident doloribus cum blanditiis. Harum ab illum dolorem. Rerum voluptatem dolores ratione. Et ut quia minus. Velit consectetur praesentium maxime magni eaque possimus asperiores tempore. Rerum quod iure esse ipsa qui sit sed. Fugiat rerum voluptates officiis. Quo dignissimos suscipit praesentium. Aliquam minima eum autem voluptatem. Nostrum et aut pariatur consequatur aperiam rerum et. Enim explicabo est iusto aperiam. Qui cumque dicta in. Quia et distinctio ratione provident voluptas hic distinctio. Ea suscipit quibusdam ut dolorum quasi adipisci.",
    } as IDetails;
  };

  const details = useSelector(getTestPersonalDetails);
  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   dispatch(IndividualData.loadIndividual);
  // }, []);

  return (
    <React.Fragment>
      <Box sx={{ width: "100%" }}>
        <Stack spacing={2}>
          <DetailsItem details={details}></DetailsItem>
        </Stack>
      </Box>
    </React.Fragment>
  );
};

export default IndividualPage;
