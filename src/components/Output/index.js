import React from "react";

export default class Output extends React.Component{
    constructor(props){
        super(props);
        this.createTable=this.createTable.bind(this);
    }
    createTable=()=>{
        let table=[];
        for(var i=1;i<=this.props.floors;i++){
            let children=[];
            children.push(<td>{i}</td>)
            for(var j=1;j<=this.props.units[i-1];j++){
                children.push(<td class="room">{i*100+j}</td>)
            }
        table.push(<tr>{children}</tr>)
        }
    return table
    }

    render(){
        return(
            <div>

                <table>
                    <tr>
                        <th>Floor</th><th>Units</th>
                    </tr>
                    {this.createTable()}
                </table>
            </div>
        );
    }
}