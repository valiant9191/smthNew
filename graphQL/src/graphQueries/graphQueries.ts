import { gql } from "@apollo/client";

const getCharactersName = gql`
  {
    characters {
      results {
        name
        image
        id
      }
    }
  }
`;

const GET_CHARACHTER_BY_ID = gql`
 query getCharacterById($id:ID!){
  character(id:$id){
    name,
    status,
    image,
    gender,
    episode
    {
      name, 
      episode
    }
  }
}
`;

export { getCharactersName, GET_CHARACHTER_BY_ID };
