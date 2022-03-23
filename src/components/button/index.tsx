import {FunctionComponent } from "react"
import './button.scss'
type ButtonProps = {
    type?: 'roudned' | 'ellipse',
    state: 'primary' | 'secondary' | 'ghost',
    align?: 'none' | 'left' | 'right' | 'justify' | 'double icon',
    size?: 'small' | 'medium' | 'large',
    body?: 'normal' | 'square' | 'ellipse',
    icon?: boolean,
    className?: string
}

const Button: FunctionComponent<ButtonProps> = (props) => {
    const { children,state,size,className } = props
    return (
        <div className={`button headline bold c-pointer button--${state} button--${size} flex ${className}`}>
            {children}
        </div>
    )

}

export default Button