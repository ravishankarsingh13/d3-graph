import React,{useRef,useEffect} from 'react'
import * as d3 from 'd3'
import {Chart} from './Chart';


function Force({linksData,nodesData,width, height}) {
    const ref = useRef();
    useEffect(()=>{
        let detroyFn;
        if(ref.current){
            const {destroy} = Chart(
                width,height,
                linksData,
                nodesData
            );
            detroyFn = destroy;
        }
        return detroyFn;
    },[])


    return(
        <div>
            <svg ref={ref}></svg>
        </div>
    )
}

export default Force;
