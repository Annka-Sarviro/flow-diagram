import { INodes } from '../../types/types';
import { Edge } from 'reactflow';
import { nodeInitialState } from '../../node/nodeInitialState';

export const clearBoardReducer = (state: { nodes: INodes[]; edges: Edge[] }) => {
  state.nodes = [nodeInitialState];
  state.edges = [];
};
