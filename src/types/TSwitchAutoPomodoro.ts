import {IAutomatic} from '../interfaces/IAutomatic';
import {ICycles} from '../interfaces/ICycles';
import {IDefaultTimer} from '../interfaces/IDefaultTimer';
import {IRest} from '../interfaces/IRest';
import {ISetTimer} from '../interfaces/ISetTimer';
import {ISetTimerRadio} from '../interfaces/ISetTimerRadio';
import {ITimerCounting} from '../interfaces/ITimerCounting';

export type TSwitchAutoPomodoro = IAutomatic &
	ISetTimer &
	ISetTimerRadio &
	Pick<IDefaultTimer, 'defaultPomodoro'> &
	Pick<IRest, 'setRest'> &
	Pick<ITimerCounting, 'setTimeCounting'> &
	Pick<ICycles, 'setCompletedCycles'>;
