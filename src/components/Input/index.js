import React from "react";
import "./input.css"
import Output from "../Output";

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state={
            floors:0,
            units:'',
            flag:0
        }

        this.handleChangeFloors=this.handleChangeFloors.bind(this);
        this.handleChangeUnits=this.handleChangeUnits.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    set=function(){
        var str=document.getElementById('unit');
        var splits=str.split(',');
        this.setState({
            floors:document.getElementById('floor'),
            units:splits,
            flag:1
        })

    }

    check=function(){
        if(this.state.flag===1) return(
            <Output floors={this.state.floors} units={this.state.units} />
        );
    }
    handleChangeFloors(event){
        this.setState({
            floors:event.target.value
        });
    }
    handleChangeUnits(event){
        this.setState({
            units:event.target.value
        });
    }
    handleSubmit(event){
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <h1 id="heading">Building Details</h1>
                <p id="desc">Enter the following details to know the real-time occupancy of flats in the building.</p>
                <form onSubmit={this.handleSubmit}>
                    <table>
                        <tr>
                            <td>No. of floors </td><td><input id="floor" type="textbox" placeholder="e.g. 3" value={this.state.floors} onChange={this.handleChangeFloors}></input></td>
                        </tr>
                        <tr>
                            <td>Units on each floor </td><td><input id="unit" type="textbox" placeholder="e.g. 8,10,10" value={this.state.units} onChange={this.handleChangeUnits}></input></td>
                        </tr>
                        <tr>
                            <td><button type="submit" id='submit'>Submit</button></td>
                        </tr>
                    </table>
                </form>

                <div className="output">

                    <Output floors={this.state.floors} units={this.state.units} />
                </div>
            </div>
        );
    }
}

export default Input;
