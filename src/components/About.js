import React from 'react'

const About = (props) => {

//    const [myStyle, setMyStyle] = useState({
//       color: "white",
//       backgroundColor: "black"
//    })
   
//    const [btnText, setBtnText] = useState("Dark Mode")

//    const toggleClickMode = () => {
//        if(myStyle.color === "black"){
//         setMyStyle({
//             color: "white",
//             backgroundColor: "black"
//         })
//         setBtnText("Light Mode")
//        } else {
//         setMyStyle({
//             color: "black",
//             backgroundColor: "white"
//         })
//         setBtnText("Dark Mode")
//        }
//    }



    return (
        <div className='container' style={{backgroundColor: props.mode==='light'? 'white' : 'black', color: props.mode==='light'? 'black' : 'white' }} >
            <h2>About Us</h2>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" style={{backgroundColor: props.mode==='light'? 'white' : 'black', color: props.mode==='light'? 'black' : 'white' }}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: props.mode==='light'? 'white' : 'black', color: props.mode==='light'? 'black' : 'white' }}>
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={{backgroundColor: props.mode==='light'? 'white' : 'black', color: props.mode==='light'? 'black' : 'white' }} >
                        <div className="accordion-body" >
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{backgroundColor: props.mode==='light'? 'white' : 'black', color: props.mode==='light'? 'black' : 'white' }} >
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: props.mode==='light'? 'white' : 'black', color: props.mode==='light'? 'black' : 'white' }}>
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.mode==='light'? 'white' : 'black', color: props.mode==='light'? 'black' : 'white' }} >
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{backgroundColor: props.mode==='light'? 'white' : 'black', color: props.mode==='light'? 'black' : 'white' }} >
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: props.mode==='light'? 'white' : 'black', color: props.mode==='light'? 'black' : 'white' }}>
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.mode==='light'? 'white' : 'black', color: props.mode==='light'? 'black' : 'white' }} >
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3">
            <button type="button" className="btn btn-primary" onClick={toggleClickMode}>{btnText}</button>
            </div> */}
        </div>
    )
}

export default About;
