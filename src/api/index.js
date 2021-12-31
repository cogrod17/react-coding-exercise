import { gql } from "@apollo/react-hooks";

let keys = {
  "Mission Name": "mission_name",
  "Rocket Name": "rocket_name",
  "Rocket Type": "rocket_type",
  "Launch Year": "launch_year",
};

export const getLaunchesPast = (order, sort, offset, limit = 10) => {
  let ord = order === true ? "asc" : "desc";

  return gql`
    {
      launchesPast(order: "${ord}", sort: "${keys[sort]}", offset: ${offset}, limit: ${limit}) {
        mission_name
        rocket {
          rocket_name
          rocket_type
        }
        launch_year
      }
    }
  `;
};
