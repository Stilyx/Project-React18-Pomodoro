import {IAutomatic} from '../interfaces/IAutomatic';
import {ICycles} from '../interfaces/ICycles';

export type TSwitchAutoPomodoro = IAutomatic & Pick<ICycles, 'setCompletedCycles'>;
