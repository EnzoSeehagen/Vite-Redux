import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { connect } from 'react-redux'

function App({contagem}) {
  return (
    <div className="App">
      <h1>Redux</h1>
      <div className="card">
        <button>
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
}
export default connect(mapStateToProps)(App);