export interface ISetTimerRadio {
	setPomodoroRadio: (e: React.SetStateAction<boolean>) => void;
	setShortRadio: (e: React.SetStateAction<boolean>) => void;
	setLongRadio: (e: React.SetStateAction<boolean>) => void;
}
