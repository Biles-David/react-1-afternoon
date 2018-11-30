import React, {Component} from 'react';

class FilterStrings extends Component {
    constructor(){
        super()
        this.state = {
            unFilteredArray: ['David','Genesis','Jon','Kelsey','Josh'],
            userInput: '',
            filteredArray: []
        }
    }
    handleChange(val){
        this.setState({userInput: val})
    }
    handleClick(userInput){
        let arr = this.state.unFilteredArray
        let newarr = []
        for(let i=0; i < arr.length; i++)
            if(arr[i].includes(userInput)){
                newarr.push(arr[i])
            }
        return this.setState({filteredArray: newarr})
    }
    render() { 
        return ( 
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Name: {JSON.stringify(this.state.unFilteredArray,null,10)}</span>
                <input className="inputLine" onChange={(e)=> this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={()=> this.handleClick(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered Names: {JSON.stringify(this.state.filteredArray,null,10)}</span>
            </div>
         );
    }
}
 
export default FilterStrings;