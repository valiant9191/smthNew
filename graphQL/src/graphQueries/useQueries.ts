import { useQuery } from "@apollo/client";
import { getCharactersName, GET_CHARACHTER_BY_ID } from "./graphQueries";

interface ICharacterData {
  characters: {
    results: [
      {
        id: string;
        name: string;
        image: string;
        stock: number;
      }
    ];
  };
}

const useApiData = () => {
  const {
    loading: charactersLoading,
    data: charactersData,
    error: characterError
  } = useQuery<ICharacterData, boolean>(getCharactersName);

  return {
    charactersLoading,
    charactersData,
    characterError
  };
};

const useCharacterByID = (id:string) => {
    const {
        loading,
        data, 
        error
    } =  useQuery(GET_CHARACHTER_BY_ID,{variables:{
        id
    }})
    return {
        loading,
        data, 
        error
      };
};

export { useApiData, useCharacterByID };
