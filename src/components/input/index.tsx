import { ChangeEvent, FunctionComponent, HTMLInputTypeAttribute } from 'react';
import './input.scss';
type InputProps = {
	label: string;
	placeholder: string;
	size: 'small' | 'medium' | 'large';
	className?: string;
	type?: HTMLInputTypeAttribute;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	value?: string;
};

const Input: FunctionComponent<InputProps> = props => {
	const { label, placeholder, size, className, type, onChange, value } = props;
	return (
		<div className={`input flex flex-column ${className}`}>
			<label className="mb-5 headline bold">{label}</label>
			<input
				type={type}
				className={`pl-4 input--${size}`}
				placeholder={placeholder}
				onChange={onChange}
				value={value}
			/>
		</div>
	);
};

export default Input;
