export interface IModal {
	children: React.ReactNode;
	isModalOpen: string;
	setIsModalOpen: (e: React.SetStateAction<boolean>) => void;
}
