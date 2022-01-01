import { gql } from "@apollo/react-hooks";

// export const getLaunchesPast = (order, sort, offset, limit = 10) => {
// let ord = order === true ? "asc" : "desc";

export const getLaunchesPast = gql`
  query LaunchesPast(
    $order: String
    $sort: String
    $offset: Int
    $mission_name: String
  ) {
    launchesPast(
      order: $order
      sort: $sort
      offset: $offset
      find: { mission_name: $mission_name }
      limit: 6
    ) {
      mission_name
      rocket {
        rocket_name
        rocket_type
      }
      launch_year
    }
  }
`;
