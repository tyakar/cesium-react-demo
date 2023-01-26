import React, { Component } from 'react';
import './footer.css'
// import {MapScaleComponent} from "../../harita/MapScale";

export default function Footer() {

    return (
        <>
            <footer className="footer">
                {/*<MapScaleComponent/>*/}
                <div id="coordinateoperations">
                    <div id="active-coordinate-position"></div>
                </div>
            </footer>
        </>
    )
}
