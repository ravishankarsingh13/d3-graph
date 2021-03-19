import React from 'react'
import './App.css';
import {} from 'd3'
import data from './data.json'
import {ForceGraph} from './Force/ForceGraph'
import Force from './charts/Force'

function App() {
  const nodeHoverTooltip = React.useCallback((node) => {
		return `<div>${node.name}</div>`;
	}, []);
  return (
    <ForceGraph
    linksData = {data.links}
    nodesData = {data.nodes}
    nodeHoverTooltip = {nodeHoverTooltip}
    />
  );
}

export default App;
