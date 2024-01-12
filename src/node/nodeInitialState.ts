import { getOptions } from '../helpers/getOptions';

export const nodeInitialState = {
  id: '0',
  type: 'custom',
  position: { x: 30, y: 30 },
  data: {
    options: getOptions(),
    placeholder: 'Вибрати значення',
    selected: false,
    selectValue: [],
  },
};
