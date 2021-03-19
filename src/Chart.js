import React,{useRef,useEffect} from 'react'
import {ForceGraph} from './ForceGraph'

function Chart({linksData, nodesData}){
    const containerRef = useRef(null);

    useEffect(() =>{
        let destroyFn;
        if(containerRef.current){
            const {destroy} = ForceGraph(
                containerRef.current,
                linksData,
                nodesData
            );
            destroyFn = destroy;
        }
        return destroyFn;
    },[]);
    return <div ref={containerRef}></div>
}

export default Chart