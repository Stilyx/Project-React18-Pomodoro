import {IDefaultTimer} from '../interfaces/IDefaultTimer';
import {IPomodoroModal} from '../interfaces/IPomodoroModal';
import {ISetDefaultTimer} from '../interfaces/ISetDefaultTimer';
import {ITimerRadio} from '../interfaces/ITimerRadio';

export type TPomodoroModal = IDefaultTimer & IPomodoroModal & ISetDefaultTimer & ITimerRadio;
