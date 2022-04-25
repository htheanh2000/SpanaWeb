import classNames from 'classnames';
import Icon from 'components/icon';
import { useState } from 'react';
import './index.scss';

interface DropdownProps {
  listItems: {
    value: number;
    name: string;
  }[];
  onOpen?: () => void;
}

const Dropdown = (props: DropdownProps) => {
  const { listItems } = props;
  const [active, setActive] = useState(0);
  const [isOpenList, setIsOpenList] = useState(false);
  return (
    <div className="Dropdown" onClick={() => setIsOpenList(!isOpenList)}>
      <div className="HeaderDropdown">
        <p className="Title bold">{listItems[active].name}</p>
        <Icon
          name="arrow-down"
          className={classNames({ Rotate: isOpenList })}
        />
      </div>
      <div className={classNames('List', { Open: isOpenList })}>
        {listItems.map((item, index) => (
          <button key={index} onClick={() => setActive(item.value)}>
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
