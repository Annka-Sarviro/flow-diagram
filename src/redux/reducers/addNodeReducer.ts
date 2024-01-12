import { PayloadAction } from '@reduxjs/toolkit';
import { Edge, MarkerType, Position } from 'reactflow';

import { INodes } from '../../types/types';

import { getOptions } from '../../helpers/getOptions';

export const addNodeReducer = (
  state: { nodes: INodes[]; edges: Edge[] },
  actions: PayloadAction<{ value: string[]; id: string; value_id: string[] }>,
) => {
  const nodeValues = actions.payload.value_id;
  const edgesId = nodeValues.map(id => `${state.nodes.length}-${id}`);
  const current = state.nodes.find(node => node.id === actions.payload.id);

  const getSpacing = () => {
    return actions.payload.value.length > 0 ? actions.payload.value.length * 300 : 250;
  };

  const newNode = nodeValues.map((id, index) => ({
    id,
    type: 'custom',
    position: {
      x: current ? current.position.x + getSpacing() : 0,
      y: current ? current.position.y + 250 : 0,
    },
    targetPosition: Position.Top,
    data: {
      options: getOptions(actions.payload.value[index].split(' ')[1]),
      placeholder: 'Вибрати значення',
      selectValue: [],
    },
  }));

  const newEdge = edgesId.map((id, index) => ({
    id,
    source: actions.payload.id,
    target: `${nodeValues[index]}`,
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  }));

  state.nodes = [...state.nodes, ...newNode];
  state.edges = [...state.edges, ...newEdge];
};
