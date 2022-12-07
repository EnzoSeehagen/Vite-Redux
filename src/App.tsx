import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'



function App() {

 const contagem = useSelector(state => state.counter.value)
 const dispatch = useDispatch()

  function handleOnClick(){
    dispatch({type: "counter/increment"});
  }

  function handleOnClickAmount(){
    dispatch({type: "counter/incrementAmount", payload: 5});
  }

  return (
    <div className="App">
      <h1>Redux</h1>
      <div className="card">
        <button onClick={handleOnClick}>a contagem é {contagem}</button>
        <button onClick={handleOnClickAmount}>a contagem é {contagem}</button>
      </div>
    </div>
  )
}

export default App;

//FORMA ANTIGA DE ACESSAR O ESTADO (FAZENDO O MAPEAMENTO ABAIXO)

//const mapStateToProps = (state) => {
 // return {
  //  contagem: state.counter.value
  //}
//};
//
//const mapDispatchToProps = (dispatch) => {
  //return {
    //increment: () => dispatch({type: "counter/increment"}),
    //incrementAmount: (amount) => dispatch({type: "counter/incrementAmount", payload: amount})
  //}
//};

//export default connect(mapStateToProps, mapDispatchToProps)(App);