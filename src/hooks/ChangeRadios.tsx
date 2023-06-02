// Types
import {TAutomaticRadiosChange} from '../types/TAutomaticRadiosChange';

export const automaticRadiosChange = (obj: TAutomaticRadiosChange): void => {
	if (obj.pomodoroRadio) {
		obj.setMainTime(obj.defaultPomodoro);
		obj.setMaxValue(obj.defaultPomodoro);
	}
	if (obj.shortRadio) {
		obj.setMainTime(obj.defaultRestTime);
		obj.setMaxValue(obj.defaultRestTime);
	}
	if (obj.longRadio) {
		obj.setMainTime(obj.defaultLongRestTime);
		obj.setMaxValue(obj.defaultLongRestTime);
	}
};
