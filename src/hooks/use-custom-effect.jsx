import { useRef } from "react";

function useCustomEffect (effectFunction , deps) {

    const isFirstRender = useRef(true);
    const prevDeps = useRef([]);

    //If First render, run once
    if(isFirstRender.current){
        isFirstRender.current = false;
        effectFunction();
    }

    
    //If deps not there or if deps has changed, run everytime
    if(deps === undefined || JSON.stringify(deps) !== JSON.stringify(prevDeps.current)){
        effectFunction();
    }

    //run cleanup

    //Update prevDeps i.e. prevDeps = current deps
    prevDeps.current = deps;

}

export default useCustomEffect;