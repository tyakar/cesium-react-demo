import React, {Component, useEffect, useState} from 'react';
import './SearchArea.css'
import {Sidebar} from 'primereact/sidebar';
import {Button} from "primereact/button";
import {InputText} from 'primereact/inputtext';
import {ToggleButton} from 'primereact/togglebutton';
import {useStore} from "react-hookstore";

export default function SearchArea () {

    const [visibleFullScreen,setVisibleFullScreen] = useState(false);

    return (

        <div>


            <div className="content-section implementation searchArea">


                <Sidebar
                    visible={visibleFullScreen}
                    fullScreen={true}
                    baseZIndex={1000000}
                    onHide={(e) => setVisibleFullScreen(false)}>


                    <div className="container">

                    </div>


                </Sidebar>


                {/*<Button className="searchAreaButton" icon="pi pi-th-large" onClick={(e) => setVisibleFullScreen(true)}/>*/}
            </div>


        </div>


    )

}
