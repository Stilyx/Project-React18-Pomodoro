import {IAutomatic} from '../interfaces/IAutomatic';
import {ICycles} from '../interfaces/ICycles';
import {IRestTime} from '../interfaces/IRestTime';

export type TPomodoroTimer = Pick<IAutomatic, 'isAutomatic'> & ICycles & IRestTime;
