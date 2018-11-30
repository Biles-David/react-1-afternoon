import React, {Component} from 'react';

class Palindrome extends Component {
    constructor(){
        super()
        this.state = {
            userInput:'',
            palindrome:''
        }
    }
    handleChange(val){
        this.setState({userInput: val})
    }
    handleClick(prop){
        let arr1 = prop.split('').reverse().reduce((total,val) => total += val)
        let arr2 = prop
        if(arr1===arr2){
            this.setState({palindrome: 'True'})
        }else{
            this.setState({palindrome: 'False'})
        }
    
    }
    render() { 
        return ( 
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e)=> this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={()=> this.handleClick(this.state.userInput)}>Check</button>
                <span className="resultsBox">Palindrome:{this.state.palindrome}</span>
            </div>
         );
    }
}
 
export default Palindrome;