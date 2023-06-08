import Atropos from 'atropos/react';
import { Link } from 'react-router-dom';

import './CardCharacter.scss'

type PropsType = {
  id: string,
  imageUri: string,
  nameCharacter: string,
}

function CardCharacter ({ imageUri, nameCharacter, id }: PropsType) {
  return (
    <Link to={id} className='card' id={id}>
      <Atropos className="card__atropos">
        <div className="card__wrapper">
          <div className='card__image-wrapper'>
            <img className='card__image-content' src={imageUri} alt={`${nameCharacter} from Rick & Morty`} />
          </div>
          <div className='card__title-wrapper' data-atropos-offset="5" data-atropos-opacity="0.7;1.2">
            <h3 className='card__title-content'>
              {nameCharacter}
            </h3>
          </div>
        </div>
      </Atropos>
    </Link>
  )
}

export {CardCharacter};