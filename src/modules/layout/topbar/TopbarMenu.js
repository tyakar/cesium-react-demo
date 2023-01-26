import React, { Component, useEffect } from 'react';
import { MapToolbar } from './MapToolbar';
import { Toolbar } from './Toolbar';

export default function TopbarMenu() {
  return (
    <>
      <Toolbar />
      <MapToolbar />
    </>
  );
}
