import React from "react";
import logo from "../../img/logo.png"
class Header extends React.Component{


    render(){
        return(
            <div className="Header_Container">
                <div className="Header_Content">
                    <div className="Header_Logo" >
                        <img src={logo}/>
                    </div>

                    <div className="Header_Nav main_nav">
                        <nav>
                            <ul>
                                <li><a className="Header_li_elem main_li">Home</a></li>
                                <li><a className="Header_li_elem main_li">Product</a></li>
                                <li><a className="Header_li_elem main_li">About</a></li>
                                <li><a className="Header_li_elem main_li">Contact</a></li>
                            </ul>
                        </nav>
                    </div>


                    <div className="Header_Btn">
                        <a className="btn">
                            <span>Login</span>
                        </a>
                    </div>

                    <div className="Header_Btn_Nav_Container">
                        <button onClick={this.handleClick} className="hamburger hamburger--collapse" type="button">
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>

                        <div className="Header_Nav media_nav">
                            <nav>
                                <ul>
                                    <li><a className="Header_li_elem media_li">Home</a></li>
                                    <li><a className="Header_li_elem media_li">Product</a></li>
                                    <li><a className="Header_li_elem media_li">About</a></li>
                                    <li><a className="Header_li_elem media_li">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
    handleClick(){
        let div = document.querySelector('.media_nav')
        let hamburger = document.querySelector(".hamburger");
        hamburger.classList.toggle("is-active");


      div.classList.toggle('active')
      if (div.classList.contains('active')) {
        div.style.display = 'flex'
        div.style.animation = "start 1.5s"
      } else {
       
        div.style.animation = "end 1.5s"
        
        setTimeout(() => {
            div.style.display = "none"
        }, 1500)
      }
    }
}

export default Header