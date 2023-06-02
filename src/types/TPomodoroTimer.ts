import {IAutomatic} from '../interfaces/IAutomatic';
import {ICycles} from '../interfaces/ICycles';
import {ITimer} from '../interfaces/ITimer';
import {ITimerCounting} from '../interfaces/ITimerCounting';
import {IWorking} from '../interfaces/IWorking';

export type TPomodoroTimer = ITimer &
	IWorking &
	Pick<IAutomatic, 'isAutomatic'> &
	Pick<ITimerCounting, 'timeCounting'> &
	Pick<ICycles, 'completedCycles'>;
