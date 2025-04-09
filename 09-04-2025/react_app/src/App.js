import React from "react";
class App extends React.Component{
  constructor(){
    super();
    this.state={count:1};
    console.log("Initialization");
  }
  componentWillMount(){
    console.log("Will Mount");
  }
  componentDidMount(){
    console.log("Did Mount");
  }
  componentWillUpdate(){
    console.log("Will Update");
  }
  componentDidUpdate(){
    console.log("Did Update");
  }
  shouldComponentUpdate(nextProps,nextState){
    if(nextState.count%2==0)  return true;
    return false;
  }
  increment=()=>{
    this.setState({count:this.state.count+1});
  }
  render(){
    return(
      <>
        <center>
          <h1>Count:{this.state.count}</h1>
          <button onClick={this.increment}>Increment</button>
        </center>
      </>
    )
  }
}

export default App;