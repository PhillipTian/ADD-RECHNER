import React, { Fragment } from 'react'
const Component = React.Component
class App extends Component{
    
    constructor(props){
        
        super(props)
        this.state = {       
            number1:0,
            number2:0,
            sum:0,
        }
    }
    render(){
        return(
            <Fragment>
            <div>
                <input value = {this.state.number1} onChange = {this.inputchange_num1.bind(this)}/>
                +<input value = {this.state.number2} onChange = {this.inputchange_num2.bind(this)}/>
                =<input value = {this.state.sum}/>
            </div> 
            <div>
                <button onClick={this.add2.bind(this)}>intelligent Bryce</button>
            </div> 

            </Fragment>     
          
        )     
    }
    inputchange_num1(e){
        this.setState({
            number1: e.target.value
        })           
    }
    inputchange_num2(e){
        this.setState({
            number2: e.target.value
        })           
    }
    add2(){
        var a = parseFloat(this.state.number1) 
        var b = parseFloat(this.state.number2)
        var c = a+b
        this.setState({
            sum: c
        })           
    }
}
export default App