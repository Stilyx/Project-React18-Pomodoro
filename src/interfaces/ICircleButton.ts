export interface ICircleButton {
	inputId: string;
	labelClass: string;
	labelText: string;
	inputName: string;
	isChecked?: boolean;
	value?: string;
	handleClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}
