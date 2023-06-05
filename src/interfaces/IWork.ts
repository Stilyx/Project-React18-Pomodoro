export interface IWork {
	working: boolean;
	rest: boolean;
	setRest: (e: React.SetStateAction<boolean>) => void;
	setWorking: (e: React.SetStateAction<boolean>) => void;
}
