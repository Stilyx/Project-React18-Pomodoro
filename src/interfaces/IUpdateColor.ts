export interface IUpdateColor {
	setColorToUpdate: (e: React.SetStateAction<string | null>) => void;
	color: string;
}
