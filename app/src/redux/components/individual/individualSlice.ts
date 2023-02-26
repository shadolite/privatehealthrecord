import { createSlice } from "@reduxjs/toolkit";
import { PersonalInformation } from "../../../models/personalInformation";
import { RootState, AppThunk } from "../../../index";

const testPersonalInformation: PersonalInformation = {
  id: 0,
  givenName: "Amy",
  familyName: "Howell",
  birthdate: new Date("2001-01-01"),
  address: "1234 Alley Street",
  phoneNumber: "555-555-5555",
  notes:
    "Vero repudiandae quis laboriosam omnis dolore. Quia reprehenderit soluta nulla facere recusandae qui magnam. Reprehenderit molestias rerum praesentium totam accusamus earum corporis maxime. Qui natus et sed omnis maxime omnis suscipit. Dolore velit error illo delectus. Recusandae saepe eum provident doloribus cum blanditiis. Harum ab illum dolorem. Rerum voluptatem dolores ratione. Et ut quia minus. Velit consectetur praesentium maxime magni eaque possimus asperiores tempore. Rerum quod iure esse ipsa qui sit sed. Fugiat rerum voluptates officiis. Quo dignissimos suscipit praesentium. Aliquam minima eum autem voluptatem. Nostrum et aut pariatur consequatur aperiam rerum et. Enim explicabo est iusto aperiam. Qui cumque dicta in. Quia et distinctio ratione provident voluptas hic distinctio. Ea suscipit quibusdam ut dolorum quasi adipisci.",
};

const individualSlice = createSlice({
  name: "individual",
  initialState: {
    personalInformation: {} as PersonalInformation,
  },
  reducers: {
    loadDefaultIndividual(individual, action) {
      individual.personalInformation = testPersonalInformation;
    },
  },
});

// Selectors
export const getPersonalInformation = (state: RootState) =>
  state.individual.personalInformation;

// Export actions
export const { loadDefaultIndividual } = individualSlice.actions;

// Export reducer
export default individualSlice.reducer;
