export interface ITimerContext {
	defaultPomodoro: number;
	defaultRestTime: number;
	defaultLongRestTime: number;
	mainTime: number;
	maxValue: number;
	timeCounting: boolean;
	setDefaultPomodoro: (e: React.SetStateAction<number>) => void;
	setDefaultRestTime: (e: React.SetStateAction<number>) => void;
	setDefaultLongRestTime: (e: React.SetStateAction<number>) => void;
	setMainTime: (e: React.SetStateAction<number>) => void;
	setMaxValue: (e: React.SetStateAction<number>) => void;
	setTimeCounting: (e: React.SetStateAction<boolean>) => void;
}
