// Interfaces

import {IAutomatic} from '../interfaces/IAutomatic';
import {IRestTime} from '../interfaces/IRestTime';

export type TChangePomorodo = Pick<IAutomatic, 'isAutomatic'> & IRestTime;
