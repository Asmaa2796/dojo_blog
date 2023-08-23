import { useState } from "react";

const dataCollection = [
    {
        "q":"1. What are the features of React?",
        "a":"Some features of React include:Declarative UI: React uses a declarative approach to building user interfaces. Declarative means you describe what you want the UI to look like rather than how you want it to be built, making code more readable and maintainable."
    },
    {
        "q":"2. Should I build my React applications in JavaScript or TypeScript?",
        "a":"JavaScript is a popular and well-known language that is easy to learn and use. All web browsers and development tools also support it. However, JavaScript is not a statically typed language, which can lead to errors and unexpected behavior that can only be discovered at run-time."
    },
    {
        "q":"3. Why use React instead of other frameworks like Angular?",
        "a":"React is only a UI library, while Angular is an opinionated UI framework. With React, programmers have more freedom to create a UI application, whereas Angular locks programmers into a more rigid framework."
    }
]
const Accordion = () => {
    const [show,setShow] = useState(0);
    const toggleAccordion = (index) => {
        if(show === index) {setShow(null)}
        else {setShow(index)}
    }
    return (
      <div className="accordion_faq py-5">
        <div className="container">
          <h2 className="text-center text-color">FAQ</h2>
          <span className="line"></span>
          <div className="acc rounded shadow-sm">
            {dataCollection.map((item, index) => (
                <div
                className="accordion-item"
                key={index}
                >
                <div className={`accordion-header ${show === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
                    <h5>{item.q}</h5>
                    {show === index ? (
                    <>
                        <i className="fas fa-minus"></i>
                    </>
                    ) : (
                    <>
                        <i className="fas fa-plus"></i>
                    </>
                    )}
                </div>
                <div className={`accordion-body ${show === index ? 'active': 'inactive'}`}>
                    <p><span></span> {item.a}</p>
                </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Accordion;
