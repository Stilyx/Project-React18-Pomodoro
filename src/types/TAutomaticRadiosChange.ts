import {ITimerRadio} from '../interfaces/ITimerRadio';
import {IDefaultTimer} from '../interfaces/IDefaultTimer';
import {ISetTimer} from '../interfaces/ISetTimer';

export type TAutomaticRadiosChange = ITimerRadio & IDefaultTimer & ISetTimer;
