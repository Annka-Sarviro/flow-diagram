import { IinitialState } from '../../types/types';

export const valuesListReducer = (
  state: IinitialState,
  action: { payload: { id: string; updated: string[] } },
) => {
  const current = state.nodes.find(node => node.id === action.payload.id);

  if (current) {
    current.data.selectValue = action.payload.updated;

    const rest = state.nodes.filter(node => node.id !== action.payload.id);

    state.nodes = [...rest, current];
  }
};
