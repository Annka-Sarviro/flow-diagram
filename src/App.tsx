import { useMemo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import ReactFlow, { OnNodesChange } from 'reactflow';

import CustomNode from './components/CustomNode/CustomNode';
import { nodeChanged } from './redux/slices/NodeSlice';
import { ClearButton } from './components/ClearButton/ClearButton';

import { RootState, useAppDispatch } from './redux/store';

import './App.css';
import 'reactflow/dist/style.css';

function App() {
  const dispatch = useAppDispatch();

  const { nodes, edges } = useSelector((state: RootState) => state.nodes);

  const nodeTypes = useMemo(() => ({ custom: CustomNode }), []);

  const onNodesChange: OnNodesChange = useCallback(
    changes => dispatch(nodeChanged(changes)),
    [dispatch],
  );

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow nodeTypes={nodeTypes} nodes={nodes} edges={edges} onNodesChange={onNodesChange} />
      <ClearButton />
    </div>
  );
}

export default App;
