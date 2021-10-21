import {CrudStore} from '../../common/stores/CrudStore';

export type TCharac = {
  _id: string;
  gender: string;
  house: string;
  name: string;
  image: string;
};

export class ListeStore extends CrudStore {
  public licenceChoice: string = '';

  constructor(props: {choice: string}) {
    super();
    this.licenceChoice = props.choice;
    if (this.licenceChoice === 'got') {
      this.apiPath = 'https://api.got.show/api';
    } else if (this.licenceChoice === 'hp') {
      this.apiPath = 'http://hp-api.herokuapp.com/api';
    }
  }

  fetchCharacters(): Promise<T> {
    if (this.licenceChoice === 'got') {
      return this.get('/show/characters');
    } else if (this.licenceChoice === 'hp') {
      return this.get('/characters');
    }
  }
}
