import {CardCharacter} from "components/card/CardCharacter";
import './CardList.scss'


type PropsType = {
    listData: [{ name: string, image: string, id: string }]
}

function CardList ({ listData }: PropsType) {
    return (
        <div className="card__list">{listData.map(el => <CardCharacter key={el.id} nameCharacter={el.name} imageUri={el.image} id={el?.id} />)}</div>
    )
}

export {CardList};