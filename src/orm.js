import { ORM } from 'redux-orm';
import { Game } from './models/Game';
import { Universe } from './models/Universe';
import { World } from './models/World';

const orm = new ORM();
orm.register(Game, Universe, World);

export default orm;