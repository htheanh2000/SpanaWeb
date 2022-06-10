import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Fragment, useState } from 'react';

export default function MenuDropDown({
  data,
  className,
  width,
}: {
  data: { value: number; name: string }[];
  className?: string;
  width?: number;
}) {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <div className={`w-56 text-right ${className}`}>
      <Menu
        as="div"
        className={`relative text-left border-[1px] rounded-md p-1`}
      >
        <div>
          <Menu.Button className={`inline-flex w-full justify-between`}>
            {data[activeTab].name}
            <ChevronDownIcon
              className="h-5 w-5 hover:opacity-75 mt-[2px]"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 z-10 mt-2 px-1 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {data.map((val, index) => (
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? 'bg-light-primary-color-50 text-white'
                          : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 whitespace-nowrap`}
                      onClick={() => setActiveTab(index)}
                    >
                      {val.name}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
