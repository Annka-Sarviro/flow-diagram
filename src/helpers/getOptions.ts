import { initialOptions } from '../data/initialNode';
import { nanoid } from 'nanoid';

import { SelectOption } from '../types/types';

export const getOptions = (str?: string): SelectOption[] => {
  if (!str) {
    return initialOptions;
  }

  const modifiedOptions: SelectOption[] = initialOptions.map((option, index) => {
    return {
      ...option,
      value: `Варіант ${str}-${index + 1}`,
      label: `Варіант ${str}-${index + 1}`,
      id: nanoid(),
    };
  });

  return modifiedOptions;
};
