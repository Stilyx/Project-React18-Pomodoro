import {IAutomatic} from '../interfaces/IAutomatic';
import {ICycles} from '../interfaces/ICycles';
import {IDefaultTimer} from '../interfaces/IDefaultTimer';
import {IRest} from '../interfaces/IRest';
import {ISetTimer} from '../interfaces/ISetTimer';
import {ISetTimerRadio} from '../interfaces/ISetTimerRadio';
import {ITimer} from '../interfaces/ITimer';
import {ITimerCounting} from '../interfaces/ITimerCounting';
import {ITimerRadio} from '../interfaces/ITimerRadio';

export type TSwitchAutoPomodoro = IAutomatic &
	ISetTimer &
	ISetTimerRadio &
	IDefaultTimer &
	Pick<IRest, 'setRest'> &
	Pick<ITimerCounting, 'setTimeCounting'> &
	Pick<ICycles, 'setCompletedCycles'> &
	ITimerRadio &
	Pick<ITimer, 'mainTime'>;
