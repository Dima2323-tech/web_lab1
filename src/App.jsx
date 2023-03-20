import React from "react";
import Header from "./components/Header/Header";
import Header_Banner from "./components/Header_Banner/Header_Banner";
import Features from "./components/Features/Features";
import Contents from "./components/Contents/Contents";
import Gallery from "./components/Gallery/Gallery";
import Parthnes from "./components/Parthners/Parthners"
import Testimonials from "./components/Testimonials/Testimonials";
import VariableFonts from "./components/VariableFonts/VariableFonts";
import Footer from "./components/Footer/Footer";
class App extends React.Component{
    constructor(props){
        super(props);
        this.scrollTop = this.scrollTop.bind(this)
    }
    render(){
        return(
            <div onLoad={this.scrollTop}>
                <Header/>
                <Header_Banner/>
                <Features/>
                <Contents/>
                <Gallery/>
                <Parthnes/>
                <Testimonials/>
                <VariableFonts/>
                <Footer/>
            </div>
        )
    }

    scrollTop(){
            window.scrollTo(0, 0);
    }
}

export default App