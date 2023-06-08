import { useCharacterByID } from "graphQueries";
import { useParams } from "react-router-dom";

function CharacterID() {
  const { id } = useParams();
  const { loading, data } = useCharacterByID(id as string);

  if (loading) return <>...loading</>;

  return (
    <div>
      <div>
        <div>
            <h4>{data.character.name}</h4>
            <div>
                <img src={data.character.image} alt={data.character.name}/>
            </div>
        </div>
      </div>
      <div>series description</div>
      {JSON.stringify(data.character)}
    </div>
  );
}

export { CharacterID };
