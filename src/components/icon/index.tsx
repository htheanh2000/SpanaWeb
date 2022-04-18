import {FunctionComponent } from "react"
import ArrowDown from '../../assets/image/icon/arrow-drop-down.svg'
import ArrowUp from '../../assets/image/icon/arrow-up.svg'

const icons = {
    'arrow-down' : ArrowDown,
    'arrow-up' : ArrowUp
}

type IconProps = {
    name: keyof typeof icons,
    size?: 'small' | 'medium' | 'large'
}

const Icon: FunctionComponent<IconProps> = (props) => {
    const { name, size} = props
    return (
        <img src={icons[name]} className={`icon-${size}`}/>
    )

}

export default Icon