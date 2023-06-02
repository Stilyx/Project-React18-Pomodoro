// Interfaces

import {IAutomatic} from '../interfaces/IAutomatic';
import {IDefaultTimer} from '../interfaces/IDefaultTimer';
import {IRestTime} from '../interfaces/IRestTime';
import {ISetTimer} from '../interfaces/ISetTimer';
import {ISetTimerRadio} from '../interfaces/ISetTimerRadio';
import {ITimerCounting} from '../interfaces/ITimerCounting';
import {ITimerRadio} from '../interfaces/ITimerRadio';
import {IWork} from '../interfaces/IWork';

export type TChangePomorodo = Pick<IAutomatic, 'isAutomatic'> &
	Pick<ITimerCounting, 'setTimeCounting'> &
	Pick<IWork, 'setWorking'> &
	IRestTime &
	ISetTimerRadio &
	ISetTimer &
	IDefaultTimer &
	ITimerRadio;
