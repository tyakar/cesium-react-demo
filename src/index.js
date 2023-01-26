import { createRoot } from 'react-dom/client';
import ViewerComponent from './modules/3dViewer/viewerComponent';

const rootElement = document.getElementById('cesiumContainer');
const root = createRoot(rootElement);

root.render(<ViewerComponent/>);