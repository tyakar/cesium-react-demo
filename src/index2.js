import { Ion, Viewer, createWorldTerrain, createOsmBuildings, Cartesian3, Math, Color,IonResource } from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import "../src/css/main.css"

// Your access token can be found at: https://cesium.com/ion/tokens.
// This is the default access token
Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0ZDllMmIzNi1kNGMyLTQ5OGUtOGUyYS0wMzU4NjRkMjQyM2YiLCJpZCI6MjA5OTQsImlhdCI6MTY3MzAwNzYwNX0.Nwu2nmACzVQBo8LCv2Gje6dMUHH21ZDGN0ezSecFXzE';

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Viewer('cesiumContainer', {
  
  terrainProvider: createWorldTerrain()
});

// Add Cesium OSM Buildings, a global 3D buildings layer.
viewer.scene.primitives.add(createOsmBuildings());   




// STEP 3 CODE (all points)

// Create a point for each.
for (let i = 0; i < flightData.length; i++) {
  const dataPoint = flightData[i];

  viewer.entities.add({
    description: `Location: (${dataPoint.longitude}, ${dataPoint.latitude}, ${dataPoint.height})`,
    position: Cartesian3.fromDegrees(dataPoint.longitude, dataPoint.latitude, dataPoint.height),
    point: { pixelSize: 10, color: Color.RED }
  });
}

// const tileset = viewer.scene.primitives.add(
//   new Cesium.Cesium3DTileset({
//     url: Cesium.IonResource.fromAssetId(1484187),
//   })
// );

const resource = await IonResource.fromAssetId(1484228);
const entity = viewer.entities.add({
  model: { uri: resource },
  position: Cartesian3.fromDegrees(-122.39053, 37.61779, 0),
});

// Fly the camera to San Francisco at the given longitude, latitude, and height.
viewer.camera.flyTo({
  destination : Cartesian3.fromDegrees(-122.39053, 37.61779, 400),
  orientation : {
    heading : Math.toRadians(0.0),
    pitch : Math.toRadians(-15.0),
  }
});