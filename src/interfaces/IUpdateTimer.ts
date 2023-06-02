export interface IUpdateTimer {
	setDefaultPomodoroToUpdate: (e: React.SetStateAction<number | null>) => void;
	setShortPomodoroToUpdate: (e: React.SetStateAction<number | null>) => void;
	setLongPomodoroToUpdate: (e: React.SetStateAction<number | null>) => void;
}
