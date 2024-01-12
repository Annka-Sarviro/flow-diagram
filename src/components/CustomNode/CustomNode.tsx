import React from 'react';

import { Handle, NodeProps, Position } from 'reactflow';

import Select from '../Select/Select';

import styles from './CustomNode.module.scss';
import { nanoid } from 'nanoid';

const CustomNode: React.FC<NodeProps> = ({ id, data, isConnectable }) => {
  return (
    <div className={`${styles.node_container} ${data.selected ? 'selected' : ''}`} key={nanoid()}>
      {id !== '0' && (
        <Handle
          type="target"
          position={Position.Top}
          isConnectable={isConnectable}
          style={{ visibility: 'hidden' }}
        />
      )}

      <div className={styles.node_wrapper}>
        <textarea className={styles.node_textarea} name="select_option" />
        <Select
          options={data.options}
          selectValue={data.selectValue}
          placeholder={data.placeholder}
          id={id}
        />
      </div>
      <Handle
        type="source"
        position={id === '0' ? Position.Bottom : Position.Right}
        style={
          id !== '0' ? { top: 120, background: '#ADB5BD' } : { top: 'none', background: '#ADB5BD' }
        }
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default CustomNode;
