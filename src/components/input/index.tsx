import { FunctionComponent } from "react"
import './input.scss'
type InputProps = {
    label: string,
    placeholder: string,
    size: 'small' | 'medium' | 'large',
    className?: string,
    type?: string
}

const Input: FunctionComponent<InputProps> = (props) => {
    const { label, placeholder ,size, className ,type} = props
    return (
        <div className={`input flex flex-column ${className}`}>
            <label className='mb-5 headline bold'>{label}</label>
            <input type={type} className={`pl-4 input--${size}`} placeholder={placeholder}/>
        </div>
    )

}

export default Input