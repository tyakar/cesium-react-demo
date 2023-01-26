import React, {Component, useEffect, useState} from 'react';
import './mapToolbar.css';
import {Sidebar} from 'primereact/sidebar';
import {useStore} from "react-hookstore";
import SidebarController from "../../../templates/SidebarController";

export default function MapToolbar() {


    const [visibleTop,setVisibleTop] = useState(false);
    const [topInfoContent, setTopInfoContent] = useStore("topInfoContent");
    const [type,setType] = useState();
    const [data,setData] = useState();
    const [closeFunction,setCloseFunction] = useState();

    useEffect(()=>{
        if(topInfoContent.visibleTop != undefined){
            setData(topInfoContent.data);
            setType(topInfoContent.component);
            setVisibleTop( topInfoContent.visibleTop);
            setCloseFunction(topInfoContent.closeFunction);

        }else{
            setData(null);
            setType(null);
        }

    },[topInfoContent]);



    return (

        <div>


            <div className="content-section implementation mapToolbar">
                <Sidebar visible={visibleTop}
                         position="top"
                         baseZIndex={1000000}
                         onHide={(e) => {setVisibleTop(false)}}
                         dismissable={false}
                         modal={false}>
                    <SidebarController pComponent={type} pData={data} setCloseFunction={setCloseFunction} pVisible={visibleTop}/>
                </Sidebar>


                {/*<Button className="mapToolbarButton" icon="pi pi-arrow-down" onClick={(e) => {setVisibleTop(true);closeFunction}}  style={{marginRight: '.25em'}}/>*/}
            </div>


        </div>


    )

}
