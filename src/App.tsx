import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { connect } from 'react-redux'


function App({contagem, increment}) {
  function handleOnClick(){
    increment();
  }
  return (
    <div className="App">
      <h1>Redux</h1>
      <div className="card">
        <button onClick={handleOnClick}>
          a contagem é {contagem}
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    contagem: state.counter.value
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({type: "counter/increment"}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);