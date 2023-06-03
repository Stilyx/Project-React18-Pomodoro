import {IAutomatic} from '../interfaces/IAutomatic';
import {ICycles} from '../interfaces/ICycles';
import {IDefaultTimer} from '../interfaces/IDefaultTimer';
import {IRest} from '../interfaces/IRest';
import {IRestTime} from '../interfaces/IRestTime';
import {ISetTimer} from '../interfaces/ISetTimer';
import {ISetTimerRadio} from '../interfaces/ISetTimerRadio';
import {ITimer} from '../interfaces/ITimer';
import {ITimerCounting} from '../interfaces/ITimerCounting';
import {IWork} from '../interfaces/IWork';

export type TPomodoroTimer = ITimer &
	Pick<IAutomatic, 'isAutomatic'> &
	ITimerCounting &
	ICycles &
	ISetTimer &
	IWork &
	Pick<IDefaultTimer, 'defaultPomodoro'> &
	ISetTimerRadio &
	IRestTime &
	IRest;
