import React from "react"




export default function Bottom(props){


    return (
        <div id="bottom-section">
            <h3 className="history">Add new transaction</h3>
            <hr /> <br />
            <label className="text-label" type="text">Text</label><br />
            <input className="input" name="item" type="text" placeholder="Enter text..." id="input-item" onChange={props.change}/>
            <label className="text-label" type="text">Amount <br /> (negative - expense, positive - income)</label>
            <input className="input" name="amount" type="number" placeholder="0" id="input-amount" onChange={props.change}/>
            <input className="input" type="submit" name="Add-transaction" id="button" value="Add transaction" onClick={props.update} />
        </div>
    )
}