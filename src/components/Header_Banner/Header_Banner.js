import React from "react";
import mockup from "../../img/screens.png"
class Header_Banner extends React.Component{
    render(){
        return(
                <div className="Header_Banner_Container">
                    <div className="Header_Banner_Content">
                        <div className="Header_Banner_Label" data-aos="fade-left"  data-aos-duration="1500">
                            <span>Work at the speed of thought</span>
                        </div>

                        <div className="Header_Banner_UnderBannerText" data-aos="fade-right" data-aos-duration="1500">
                            <span>Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</span>
                        </div>

                        <div className="Header_Bunner_BtnS" data-aos="fade-up"  data-aos-duration="1500">
                            <button>
                                <span>Try For Free</span>
                            </button>
                            <button>
                                <span>Learn More</span>
                            </button>
                        </div>

                        <div className="Header_Bunner_Mockup" data-aos="fade-left" data-aos-offset="600" data-aos-duration="1500">
                            
                                <img src={mockup} />
                        </div>
                    </div>
                </div>
        )
    }
}

export default Header_Banner