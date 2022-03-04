import React, { Component } from "react"

class Calc extends Component{
  state={
    n1: '',
    n2: '',
    result: 0,
  }
  handleChange = (event) => {
    this.setState({
      n1: Number(event.target.value)
    })
  }
  handleChange2 = (event) => {
    this.setState({
      n2: Number(event.target.value)
    })
  }
mult = () => {
  const {n1, n2} = this.state
  if (n1 !== ''){
this.setState({
  result: n1 * n2
})
  }
}
div= () => {
  const {n1, n2} = this.state
  if (n1 && n2 !== ''){
    this.setState({
      result: n1 / n2
    })
      }
}
subt= () => {
  const {n1, n2} = this.state
  if (n1 && n2 !== ''){
    this.setState({
      result: n1 - n2
    })
      }
}
some= () => {
  const {n1, n2} = this.state
  if (n1 && n2 !== ''){
    this.setState({
      result: n1 + n2
    })
      }
}
clearCalc = () => {
  this.setState({
    result:"",
    n1:"",
    n2:"",
  })
}

render(){
  return(
    <div>
      <h1> react app calc</h1>
      <input value={this.state.n1} onChange={this.handleChange} type="number"/>
      <input value={this.state.n2} onChange={this.handleChange2} type="number"/>
      <button onClick={this.mult}>*</button>
      <button onClick={this.div}>/</button>
      <button onClick={this.subt}>-</button>
      <button onClick={this.some}>+</button>
      <button onClick={this.clearCalc} >⌫</button>
      <h2>{this.state.result}</h2>
    </div>
  )
}

}

export default Calc;