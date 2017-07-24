import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            val: 0
        };
        this.update = this.update.bind(this)
    }
    update(){
        this.setState({val: this.state.val + 1})
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    };
    componentDidMount(){
        console.log('componentDidMount');
    };
    componentWillMount(){
        console.log('componentWillMount');
    }

    render() {
        console.log('render');
        return (
            <div>
               <button onclick={this.update}>{this.state.val}</button>
            </div>
        )
    }
}


export default App