const page =(
    <div>
        <h1>Hello, I'm Joel</h1>
        <img src="antonio-minion.jpeg" alt="casa de mini boss" width="90px"></img>
        <h2>I'm learning how to design & build software that doesn't suck</h2>
        <ul>
            <li>I am a PM at Microsoft</li>
            <li>Focusing on Full-Stack development (for now)</li>
            <li>Have experience in Growth and Product</li>
            <li>Excited about EdTech, HealthTech, marketplace, and consumer businesses that unburden people's lives.</li>
            <li>I'm giving myself 3 years (2025) to apply to grad school, walk-on to the football team, and win a conference championship 🫡</li>
        </ul>
    </div>
)

function MainContent(){
    return(
        page
    )
}


// Challenge: Create your own custom React component!
// Call it "MainContent", and have it return a simple
// h1 element that says "I'm learning React!"

// Afterward, render it below the Navbar (which
// you can do inside the ReactDOM.render call below)
ReactDOM.render(
    <div>
        <MainContent />
    </div>,
    document.getElementById("root")
) 