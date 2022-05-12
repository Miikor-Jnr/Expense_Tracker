import React from "react"

export default function Middle(props){

    const displayItems = props.arrayItem
    const displayMoney = props.arrayMoney
    const case1 = "list-item negative inside-text"
    const case2 = "list-item positive inside-text"
    const transaction = displayItems.map(item =>(
    <div className={parseFloat(displayMoney[displayItems.indexOf(item)])<0 ? 
    case1 : case2}><p>{item}</p>
    <p>{displayMoney[displayItems.indexOf(item)]}</p></div>))
    
    return (
        <div id="middle-section">
            <h3 className="history">History</h3>
            <hr />
            <div id="history-container">
                {transaction}
            </div>
        </div>
    )
}