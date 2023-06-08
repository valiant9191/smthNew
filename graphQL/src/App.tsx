import { CardList } from 'components/CardList';
import { CharactersDataResultsType } from 'types';
import { useApiData } from './graphQueries';
import './App.css';

function App() {
  const {  charactersData } = useApiData();
  const charactersDataResults = charactersData?.characters.results as CharactersDataResultsType;

  return (
    <div className="App">
      {charactersData&&<CardList listData={charactersDataResults} />}
    </div>
  );
}

export {App};
