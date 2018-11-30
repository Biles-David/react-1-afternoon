import React, {Component} from 'react'

class FilterObject extends Component{
    constructor (){
        super()
        this.state = {
            unFilteredArray: [{
                name: 'David',
                hair: 'Brown',
                age: 24
                },{
                name: 'Genesis',
                eyes: 'Brown',
                age: 25
                },{
                name: 'Jon',
                hair: 'Brown',
                age: 24
                }
            ],
            userInput: '',
            filteredArray: []
        }
    }
    handleChange(val){
        this.setState({userInput: val})
    }
    filterArr(prop){
        let arr = this.state.unFilteredArray;
        let newObj = [];
        for(let i=0; i < arr.length; i++)
            if(arr[i].hasOwnProperty(prop)){
                newObj.push(arr[i])
            }
        this.setState({filteredArray: newObj})
    }

    render() { 
        return ( 
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray,null,10)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.filterArr(this.state.userInput)}> Filter </button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray,null,10)}</span>
            </div>
         );
    }
}
 
export default FilterObject
