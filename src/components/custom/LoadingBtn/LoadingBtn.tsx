import React from "react";
import Spinner from "../Spinner/Spinner";


interface LoadingBtnType{
    children? : string,
    loading? : boolean,
    style? : object,
    className? : string,
}

export default function LoadingBtn({ children = "", loading = false, style = {}, className = "" }:LoadingBtnType) {

    function doNothing(e:React.MouseEvent<HTMLElement>) {
        e.preventDefault()
        e.stopPropagation()
    }

    return (
        <>
            {loading ? <button className={className} style={style} onClick={doNothing}><Spinner /></button> : children}
        </>
    );
}

