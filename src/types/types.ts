import { Edge, Node } from 'reactflow';

export interface SelectOption {
  value: string;
  label: string;
  id: string;
}

export interface NodeSelectProps {
  id: string;
  options: SelectOption[];
  selectValue: string[];
  placeholder?: string;
}

export interface INodes extends Node {
  data: {
    placeholder: string;
    selectValue: string[];
  };
}

export interface IinitialState {
  nodes: INodes[];
  edges: Edge[];
}
