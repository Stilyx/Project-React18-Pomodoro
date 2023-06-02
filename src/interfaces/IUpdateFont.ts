export interface IUpdateFont {
	font: string;
	setFontToUpdate: (e: React.SetStateAction<string | null>) => void;
}
