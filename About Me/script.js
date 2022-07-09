//import React from "react"
//import ReactDOM from "react-dom"
//import Header from "./Header"
//import PageBody from "./PageBody"
// import Footer from "./Footer"
function Header(){
    return(
        <header>
            <nav className="nav">
            <img src="antonio-minion.jpeg" alt="casa de mini boss"></img>
            <ul className="nav-items">
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact Me</li>
                </ul>
            </nav>
            <h1 className="title">Hello, I'm Joel</h1>
        </header>
    )
}
function Footer(){
    return(
        <footer>
           <small>© 2022 Joel's Personal Site.</small> 
        </footer>
    )
}
function PageBody(){
    return(
        <div>
        <h2>I'm learning how to design & build software that doesn't suck</h2>
        <ul>
            <li>I am a PM at Microsoft</li>
            <li>Focusing on Full-Stack development (for now)</li>
            <li>Have experience in Growth and Product</li>
            <li>Excited about marketplace, consumer and software businesses that unburden people's lives.</li>
            <li>I'm giving myself 3 years (2025) to apply to grad school, walk-on to the football team, and win a conference championship 🫡</li>
        </ul>
        </div>
    )
}

function PageContent(){
    return(
        <div>
            <Header />
            <PageBody />
            <Footer />
         </div>
)
}

ReactDOM.render(
        <PageContent />
    ,
    document.getElementById("root")
) 