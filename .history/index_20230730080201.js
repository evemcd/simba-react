//ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"))
/*
Challenge 1: Display an unordered list with two list items
ReactDOM.render(<ul><li>HTML</li><li>CSS</li></ul>,document.getElementById("root"))

Challenge 2: Create your own custom React component!
Call it "MainContent", and have it return a simple h1 element that says "I'm learning React!"
Afterward, render it below the Navbar (which you can do inside the ReactDOM.render call below)

function MainContent() {
    return (
        <h1>I'm learning React!</h1>
    )
}


ReactDOM.render(
    <div>
        <MainContent />
    </div>,
    document.getElementById("root")
)


Challenge 3 - recreate the below line of code in vanilla JS by creating and appending an h1 to our div#root (without using innerHTML).
ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)
*/
