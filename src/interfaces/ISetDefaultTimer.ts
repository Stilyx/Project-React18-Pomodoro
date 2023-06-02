export interface ISetDefaultTimer {
	setDefaultPomodoro: (e: React.SetStateAction<number>) => void;
	setDefaultRestTime: (e: React.SetStateAction<number>) => void;
	setDefaultLongRestTime: (e: React.SetStateAction<number>) => void;
}
