import { createSlice } from '@reduxjs/toolkit';

import { applyNodeChanges } from 'reactflow';

import { addNodeReducer } from '../reducers/addNodeReducer';
import { clearBoardReducer } from '../reducers/clearBoardReduser';
import { removeNodeReducer } from '../reducers/removeNodeReducer';
import { valuesListReducer } from '../reducers/valuesListReducer';

import { nodeInitialState } from '../../node/nodeInitialState';

import { IinitialState } from '../../types/types';

const initialState: IinitialState = {
  nodes: [nodeInitialState],
  edges: [],
};

export const nodeSlice = createSlice({
  name: 'nodes',
  initialState,
  reducers: {
    addNode: addNodeReducer,
    clearBoard: clearBoardReducer,
    removeNode: removeNodeReducer,
    valuesList: valuesListReducer,
    nodeChanged(state, action) {
      state.nodes = applyNodeChanges(action.payload, state.nodes);
    },
  },
});

export const { addNode, clearBoard, nodeChanged, removeNode, valuesList } = nodeSlice.actions;

export default nodeSlice.reducer;
