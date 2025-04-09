import React from "react";
class App extends React.Component{
  constructor(){
    super();
    this.state={count:0};
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
          <button type="button" class="d-grid gap-2 col-2 mx-auto btn btn-outline-danger" onClick={this.increment}>Increment</button>
        </center>
      </>
    )
  }
}

export default App;