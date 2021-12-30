import { gql } from "@apollo/react-hooks";

export const getLaunchesPast = gql`
  {
    launchesPast(limit: 10) {
      mission_name
      rocket {
        rocket_name
        rocket_type
      }
      launch_year
    }
  }
`;
