import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Routes from "./Routes";

function App(){
    return(
        <div className="blog">
            <Header />
            {/* The <Routes /> component contains the <Body /> <Topics /> components */}
            <Routes />
            <Footer />
        </div>
    );
}
export default App;