import React from "react"



export default function HeadSection(props){


    return(
        <div id="top-section">
            <h1 id="title">Expense Tracker</h1>
            
            <div id="balance">
                <h2>YOUR BALANCE</h2>
                <h1 id="balance-display">{props.bal}</h1>
            </div>

            <div id="top-screen">
                <div className="income-expense"><h3>INCOME <br /> <span id="amount1">{props.amt1}</span> </h3></div>
                <div className="income-expense"><h3>EXPENSE <br /><span id="amount2">{props.amt2}</span></h3></div>
            </div>

        </div>
    )
}