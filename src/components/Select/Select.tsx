import React, { useState, useRef, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { useAppDispatch } from '../../redux/store';
import { addNode, valuesList, removeNode } from '../../redux/slices/NodeSlice';

import { NodeSelectProps } from '../../types/types';

import styles from './Select.module.scss';

const Select: React.FC<NodeSelectProps> = ({ id, options, selectValue, placeholder }) => {
  const dispatch = useAppDispatch();
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const selectRef = useRef<HTMLUListElement>(null);
  const selectedValuesRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (value: string, value_id: string) => {
    const updated = selectValue.includes(value)
      ? selectValue.filter(a => a !== value)
      : [...selectValue, value];
    dispatch(valuesList({ id, updated }));
    onChange(updated, [value_id]);
  };

  const handleToggleDropdown = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      selectedValuesRef.current &&
      !selectRef.current.contains(event.target as Node) &&
      !selectedValuesRef.current.contains(event.target as Node)
    ) {
      setIsSelectOpen(false);
    }
  };

  const onChange = (value: string[], value_id: string[]) => {
    if (selectValue && selectValue.every((elem, index) => elem === value[index])) {
      dispatch(addNode({ value, id, value_id }));
    } else {
      dispatch(removeNode(value_id[0]));
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, true);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
    };
  }, []);

  return (
    <div className={styles.select_container}>
      <div
        ref={selectedValuesRef}
        className={`${styles.selected_value} ${isSelectOpen ? `${styles.isOpen}` : ''}`}
        onClick={handleToggleDropdown}
      >
        <div className="">{selectValue.length === 0 ? placeholder : selectValue.join(' ')}</div>
      </div>
      {isSelectOpen && (
        <ul ref={selectRef} className={styles.select_list}>
          {options.map(option => (
            <li key={nanoid()}>
              <label className={styles.select_item}>
                <input
                  name="select_option"
                  type="checkbox"
                  value={option.value}
                  checked={selectValue.includes(option.value)}
                  onChange={() => handleOptionClick(option.value, option.id)}
                  placeholder={placeholder}
                />
                {option.label}
                <div></div>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
