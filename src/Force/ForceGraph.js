/** @format */

import React from "react";
import { runForceGraph } from "./ForceGraphGenerator";
import styles from "./forceGraph.module.css";

export function ForceGraph({ linksData, nodesData, nodeHoverTooltip }) {
	const containerRef = React.useRef();

	React.useEffect(() => {
		let destroyFn;

		if (containerRef.current) {
			const { destroy } = runForceGraph(
				containerRef.current,
				linksData,
				nodesData,
				nodeHoverTooltip
			);
			destroyFn = destroy;
		}

		return destroyFn;
	}, []);

	return <div ref={containerRef} className={styles.container} />;
}
