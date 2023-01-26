import React, {Component, useEffect, useState} from 'react';
import './toolbar.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {createStore, useStore} from "react-hookstore";
import SideBar from "../../../../common/helper/hooks/sideBar";
import TemplatesNames from "../../../../common/constants/templates/templatesNames";
import  QuickSearchCategory from "../../../3d/QuickSearch/QuickSearchCategory";
import {ViewerActions} from "../../../../common/viewer/viewerActions";
export default function Toolbar() {

    const NotesNavDropdownTitle = (<i className="fa fa-map-o"></i>);  /*AÇILABİLEN LİNKİN ADI VEYA İKONU*/
    const BookmarkIcon = (<i className="fa fa-bookmark-o"></i>);  /*AÇILABİLEN LİNKİN ADI VEYA İKONU*/
    const LegendIcon = (<i className="fa fa-picture-o"></i>);

    const MeasureIcon = (<i className="fa fa-calculator"></i>);
    const LayerSpyIcon = (<i className="fa fa-bullseye"></i>);
    // const [mapActions, setMapActions] = useStore("mapActions");
    const [showCategoryDiv,setShowCategoryDiv] = useState(false);


    const sideBar = SideBar();


    const mapBack = () => {
        console.log("Mapback");
        //mapActions.mapBack();
    };

    const bikeRide = () => {
        let viewerActions = new ViewerActions();
        viewerActions.bikeRide();
    };

    const embeddedKMZ = () => {
        let viewerActions = new ViewerActions();
        viewerActions.embeddedKMZ();
    };

    const mapForward = () => {

        //mapActions.mapForward();
        console.log("MapFoeward");

    };
    const generalView = () => {
        let viewerActions = new ViewerActions();
        viewerActions.setInitialView();
    };

    const fullScreen = () => {
        let viewerActions = new ViewerActions();
        viewerActions.setFullScreen();
    };

    const drawComponent = () => {
        sideBar.openTop({component: TemplatesNames.drawToolBar, data: "test"});
    }

    const layerControl = () => {
        sideBar.openRight({component: TemplatesNames.layerControl});
    }

    const bookmarkOpen = () => {
        sideBar.openTop({component: TemplatesNames.bookmarkComponent});
    };

    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" className="topbar" fixed="top">
                <Navbar.Brand >
                    <QuickSearchCategory/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">

                        <Nav.Link href=""><i className="fa fa-life-ring" onClick={embeddedKMZ} title='Embedded Kmz'/></Nav.Link> {/*NORMAL Tıklanabilen link ikon*/}
                        <Nav.Link href=""><i className="fa fa-bicycle" onClick={bikeRide} title='Bike Ride'/></Nav.Link> {/*NORMAL Tıklanabilen link ikon*/}
                        <Nav.Link href=""><i className="fa fa-chevron-left" onClick={mapBack} title='Önceki Görünüm'/></Nav.Link> {/*NORMAL Tıklanabilen link ikon*/}
                        <Nav.Link href=""><i className="fa fa-chevron-right" onClick={mapForward} title='Sonraki Görünüm'/></Nav.Link>
                        {/*<Nav.Link href=""><BoxZoomComponent/></Nav.Link>*/}
                        {/*<Nav.Link href=""><BoxZoomOutComponent/></Nav.Link>*/}
                        <Nav.Link href=""><i className="fa fa-eye" title='Genel Görünüm' onClick={generalView}/></Nav.Link>
                        <Nav.Link href=""><i className="fa fa-arrows" title='Tam Ekran' onClick={fullScreen}/></Nav.Link>
                        {/*<Nav.Link href=""><i className="fa fa-hand-paper-o" title='Haritayı Kaydır'></i></Nav.Link>*/}
                        {/*<NavDropdown title={(<i className="fa fa-map-marker"></i>)}*/}
                        {/*             id="collasible-nav-dropdown"><GoToCoordinate/></NavDropdown>*/}
                        {/*<Nav.Link href=""><i className="fa fa-bars" title='Katman Kontrolü'*/}
                        {/*                     onClick={layerControl}></i></Nav.Link>*/}
                        {/*/!*<NavDropdown title={BookmarkIcon} id="collasible-nav-dropdown">*!/*/}
                        {/*/!*    <BookMarkComponent/>*!/*/}
                        {/*/!*</NavDropdown>*!/*/}
                        {/*<Nav.Link href=""><i className="fa fa-bookmark" title='Yer İmi'*/}
                        {/*                     onClick={bookmarkOpen}></i></Nav.Link>*/}
                        {/*<NavDropdown title={LegendIcon} id="collasible-nav-dropdown">*/}
                        {/*    <LegendTool/>*/}
                        {/*</NavDropdown>*/}
                        {/*<NavDropdown title={MeasureIcon} id="collasible-nav-dropdown">*/}
                        {/*    <MeasureToolComponent/>*/}
                        {/*</NavDropdown>*/}
                        {/*<NavDropdown title={LayerSpyIcon} id="collasible-nav-dropdown">*/}
                        {/*    <LayerSpyTool/>*/}
                        {/*</NavDropdown>*/}
                        {/*<Nav.Link href=""><i className="fa fa-pencil" title='Çizim Aracı'*/}
                        {/*                     onClick={drawComponent}></i></Nav.Link>*/}

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

