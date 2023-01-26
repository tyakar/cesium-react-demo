import React, {Component, useEffect, useState} from 'react';
import './leftSideBar.css'
import {Sidebar} from 'primereact/sidebar';
import {Button} from "primereact/button";
import {useStore} from "react-hookstore";
import SidebarController from "../../templates/SidebarController";
export default function LeftSideBar (){

    const [leftInfoContent, setLeftInfoContent] = useStore("leftInfoContent");
    const [visibleLeft,setVisibleLeft] = useState(false);
    const [type,setType] = useState();
    const [data,setData] = useState();

    useEffect(()=>{

        if(leftInfoContent.visibleLeft  != undefined) {
            setData(leftInfoContent.data);
            setType(leftInfoContent.component);
            if(visibleLeft != leftInfoContent.visibleLeft)
                setVisibleLeft(leftInfoContent.visibleLeft);

        }else{
            setData(null);
            setType(null);
        }

        console.log("left side bar " + leftInfoContent);

    },[leftInfoContent]);

    const onhideLeftSideBar = (e) =>{
        setVisibleLeft(false);
        setData(null);
        setType(null);
    }


    return (


        <div>
            <div className="content-section implementation leftSidebar">
                <Sidebar
                    visible={visibleLeft}
                    baseZIndex={1000000}
                    onHide={onhideLeftSideBar}
                    dismissable={false}
                    modal={false} >
                    <SidebarController pComponent={type} pData={data} pVisible={visibleLeft}/>

                </Sidebar>



                {/*<Button className="openLeftSidebar" icon="pi pi-arrow-right" onClick={(e) => setVisibleLeft(true)} style={{marginRight:'.25em'}} />*/}

            </div>

        </div>


    )
}
