
import React from "react"
import './App.css';
import HeadSection from './head.js';
import Middle from './middle';
import Bottom from './bottom';

function App() {



const [inputData, setInputData] = React.useState({item: '', amount: ''})

function handleChange(e){
    setInputData(prevInputData => {
        return {...prevInputData, [e.target.name] : e.target.value}
    })
}



const [balance, setBalance] = React.useState(0)
const [amount1, setAmount1] = React.useState(0)
const [amount2, setAmount2] = React.useState(0)

function updateUser(){
    setBalance(prevBalance => prevBalance + parseFloat(inputData.amount))
    setAmount1(prevAmount1 => {
      return inputData.amount < 0 ? prevAmount1 : prevAmount1 + parseFloat(inputData.amount)
    })
    setAmount2(prevAmount2 => {
      return inputData.amount < 0 ? prevAmount2 + Math.abs(parseFloat(inputData.amount)) : prevAmount2
    })
    setTrackerArray(prevContent => [...prevContent, inputData.item])
    setTrackerMoney(prevContent => [...prevContent, inputData.amount])
}

const [trackerArray, setTrackerArray] = React.useState([])
const [trackerMoney, setTrackerMoney] = React.useState([])


  return (
    <div id='tracker-body'>
      <HeadSection bal={balance} amt1={amount1} amt2={amount2}/>
      <Middle arrayMoney={trackerMoney} arrayItem={trackerArray} money={inputData.amount} />
      <Bottom bal={balance} amt1={amount1} amt2={amount2} update={updateUser} change={handleChange}/>
    </div>
  );
}

export default App;
