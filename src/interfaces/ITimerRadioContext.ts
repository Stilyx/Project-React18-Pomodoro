export interface ITimerRadioContext {
	pomodoroRadio: boolean;
	shortRadio: boolean;
	longRadio: boolean;
	setPomodoroRadio: (e: React.SetStateAction<boolean>) => void;
	setShortRadio: (e: React.SetStateAction<boolean>) => void;
	setLongRadio: (e: React.SetStateAction<boolean>) => void;
}
