import toasterInterface from './asset/interface.png'
import toaster from './asset/toaster.jpg'
import persona1 from './asset/personas/Jerry Persona.png'
import persona2 from './asset/personas/Melissa Persona.png'
import sb1 from './asset/storyboard/Frame 6.png'
import sb2 from './asset/storyboard/Frame 9.png'
import sb3 from './asset/storyboard/Frame 10.png'
import sb4 from './asset/storyboard/Frame 11.png'
import sb5 from './asset/storyboard/Frame 12.png'
import sb6 from './asset/storyboard/Frame 13.png'
import sb7 from './asset/storyboard/Frame 14.png'
import sb8 from './asset/storyboard/Frame 15.png'


import './project.css'
function Project() {
    return(
        <div className={"container"}>
            <h1>Personas & Storyboarding</h1>
            <div className={"problem-and-context"}>
                <h2>Problem & Context</h2>
                <p>
                    As the most popular dining hall at Brown University, Sharpe Refectory
                    (otherwise known as the Ratty) is well-equiped with different
                    types of facilities. However, not all of them are equally
                    user-friendly. For example, I recently noticed that the toaster,
                    as something that I use quite frequently, is not that easy to
                    use and I actually did not understand all of its functionality.
                </p>
            </div>

            <div className={"contextual-inquiry"}>
                <h2>Contextual Inquiry</h2>
                <div className={"h3-children"}>
                    <h3>Selecting an Interface</h3>
                    <div className={"text-image"}>
                        <p className={"text-image-text"}>
                            The interface that I decided to investigate was the toaster in
                            the Ratty. It is in a public area, which makes it easier for
                            me to observe how people interact with it without making them
                            feel uncomfortable
                        </p>
                        {/*<img className={"photo"} src={toaster}/>*/}
                    </div>
                </div>

                <div className={"h3-children"}>
                    <h3>Sketch and Description of the Interface</h3>
                    <div className={"interface-text"}>
                        <p>
                            Apart from the conveyor belt where you insert bagels and the tray
                            that catch toasted bagels, there are three interactive elements
                            on the interface: a knob and two buttons. The knob controls the
                            conveyor speed; to slow down, the user needs to turn the knob
                            counter-clockwise, and vice versa. The top button is an on/off
                            switch for the top heat. The bottom button is an on/off switch
                            for the bottom heat, but it also functions as the overall power
                            switch. When the buttom button is switched off, the entire
                            machine shuts down.

                        </p>
                        <img src={toasterInterface} className={"interface"}
                             alt={"An image of the interface of the toaster"}/>
                        <span className={"caption"}>Figure 1: An illustrative version of the toaster interface</span>

                </div>

                </div>

            </div>

            <div className={"observation"}>
                <h2>Observations</h2>

                <h3>Summary on Behaviors</h3>
                    <ul>
                        <li>Some people would toast their bagels multiple times</li>
                        <li>Only a small portion of people adjust the conveyor speed</li>
                        <li>No one touched the two switches</li>
                        <li>Many people bent down to see what was going on inside the toaster</li>
                        <li>There were bagels left in the tray of the toaster for long periods of time</li>
                    </ul>
                <h3>Summary on Interview Responses</h3>
                        <ol>
                            <li>How often do you use the toaster?</li>
                                <p className={"response"}>
                                    People either use the toaster very often (multiple times
                                    a week) or very rarely (once every multiple weeks).
                                </p>
                            <li>What does a perfect bagel look like to you? Does the toaster help you achieve that?</li>
                                <p className={"response"}>
                                    People usually prefer their bagels golden, so oftentimes they need to put the bagel in
                                    the toaster twice.
                                </p>
                            <li>What do you think these knobs do?</li>
                                <p className={"response"}>
                                    No one really fully knows what each knob does. Most people simply read what's
                                    written on the interface. A few people got confused because they weren't sure
                                    how conveyor speed could be "Dark" or "Light." No on mentioned that the bottom
                                    heat button is also an overall power switch.
                                </p>
                            <li>Have you ever run into any problem using the toaster?</li>
                                <p className={"response"}>
                                    Sometimes bagels would get stuck in the toaster, which could lead to fire hazard.
                                </p>

                        </ol>

            </div>
            <div className={"personas"}>
                <h2>Personas</h2>
                <div className={"persona-container"}>
                    <div className={"persona-1"}>
                        <img src={persona1} className={"persona-image"}/>
                        <p className={"caption"}>Figure 2: Jerry is a first year
                            Computer Science student who uses the toaster once
                            every two weeks.
                        </p>
                    </div>
                    <div className={"persona-2"} >
                        <img src={persona2} className={"persona-image"}/>
                        <p className={"caption"}>Figure 3: Melissa is a third year
                            biology student who loves bagels and uses the toaster three
                            times a week.
                        </p>
                    </div>
                </div>
            </div>

            <div className={"storyboards"}>
                <h2 className={"storyboards-text"}>Storyboards</h2>
                <div className={"storyboards-container"}>
                    <img src={sb1} className={"sb1 sb"}/>
                    <img src={sb2} className={"sb2 sb"}/>
                    <img src={sb3} className={"sb3 sb"}/>
                    <img src={sb4} className={"sb4 sb"}/>
                    <img src={sb5} className={"sb5 sb"}/>
                    <img src={sb6} className={"sb6 sb"}/>
                    <img src={sb7} className={"sb7 sb"}/>
                    <img src={sb8} className={"sb8 sb"}/>
                </div>
            </div>

        </div>

    )
}

export default Project