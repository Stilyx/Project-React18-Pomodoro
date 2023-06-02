export interface ITimerCounting {
	setTimeCounting: (e: React.SetStateAction<boolean>) => void;
	timeCounting: Boolean;
}
