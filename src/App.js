
import React from "react";
// import { BrowserRouter, Route, Link} from "react-router-dom";
import ViewerComponent from "./modules/3dViewer/viewerComponent";
// import LoginPage from "./modules/page/loginPage";
// import PageNotFound from "./modules/page/pageNotFound";
function App() {
    return (

        // <div>Hello</div>
        <ViewerComponent />
        // <BrowserRouter>
        //         <Link>
        //             <Route exact path="/" component = {ViewerComponent}/>
        //             {/* <Route path="/login" component = {LoginPage} />
        //             <Route component = {PageNotFound} /> */}
        //         </Link>
        // </BrowserRouter>
    );
}

export default App;