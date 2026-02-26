//Statefull components or Class Components are those that store their own state and follows a cycle of events during the rendering process. It uses the Class syntax of JavaScript and extends the React.Component class. It has a render method that returns the JSX to be rendered on the UI. It also has a constructor method that initializes the state of the component. It also has lifecycle methods that are called at different stages of the component's lifecycle. It also has a setState method that is used to update the state of the component and re-render it. Statefull components are used when we need to manage state and lifecycle events in our application. 
//Functional Components use additional capabilities of React called Hooks to manage state and lifecycle events. It is a simpler and more concise way to write components in React. It does not use the Class syntax and does not have a render method. It returns the JSX directly from the function. It uses the useState hook to manage state and the useEffect hook to manage lifecycle events. Functional components are used when we want to write simpler and more concise code in our application.
//It uses a Component to create new Components.
import React, { Component } from 'react'

export default class StatefullComponents extends Component {
    
    constructor(props) {//U can add props thru constructor in Class components. Data that U want to save shall be created under state object...
        super(props)
        this.state ={
            count : 0
        }    
    }
    //Event handlers
    increment = ()=> this.setState({ count : this.state.count + 1})

    decrement = ()=> this.setState({ count : this.state.count - 1})

    //Lifecycle methods are the methods that are called by React during different phases of the Component creation, rendering and closure. 
    componentDidMount(){
        console.log("Component loaded into the browser")
    }
    //State Management of the DOM
    componentDidUpdate(prevProps, prevState){//Async Operation
        if(prevState.count !== this.state.count)
            console.log("Counter has changed")
    }


    //Unlike Functional components, render shall return  the JSX.
    render() {
    return (
      <div>
        <h1>Counter Application</h1>
        <hr />
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}
