import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

export default class Model extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    test(e){
        fetch('https://console.echoAR.xyz/query?key=calm-mud-3261')
        .then(response => response.json())
        .then(data => console.log(data));

        https://console.echoAR.xyz/query?key=calm-mud-3261&file="d93d28cf-fe47-4954-a9f0-052537ed20d1.glb"


    }
    render() {
        return (

            
            <div className={"model"}>
                <Button variant="dark" onClick={()=>this.test()}>Choose something to send to your friend!</Button>{' '}
            </div>
        )
    }
}