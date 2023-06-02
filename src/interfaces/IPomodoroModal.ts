export interface IPomodoroModal {
	setIsModalOpen: (e: React.SetStateAction<boolean>) => void;
	setMainTime: (e: React.SetStateAction<number>) => void;
	setMaxValue: (e: React.SetStateAction<number>) => void;
}
