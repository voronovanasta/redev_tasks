import React, { useState, useEffect } from 'react'

export class LifecycleComponent extends React.Component {
    state = {
        count: 0
    }

    constructor (props) {
        super(props);
        this.increment = this.increment.bind(this)
    }

    increment () {
       this.setState(prevState => ({count: prevState.count + 1}));
    }
    componentDidMount() {
        async function getAllUsersCount() {
            const response = await fetch('https://todo-redev.herokuapp.com/api/users');
            const data = await response.json();
            return data.length;
        }
        getAllUsersCount().then(console.log)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.count % 2 === 0;
    }

    componentDidUpdate() {
        console.log(this.state.count);
    }

    componentWillUnmount() {
        console.log('This component will be deleted!')
    }

    render () {
        return <div>
              <p> Hello from Class Component!</p>
              <button onClick = {this.increment}>Increase count</button>
        </div>
    }
}

export function FuncComponent () {
    console.log('App')
    const [count, setCount] = useState(0);

    useEffect(() => {
        async function getAllUsersCount() {
            const response = await fetch('https://todo-redev.herokuapp.com/api/users');
            const data = await response.json();
            return data.length;
        }
        getAllUsersCount().then(console.log);
        return () => {
            console.log('This component will be deleted!');
        }
    }, [])

    useEffect(() => {
        console.log(count)
    }, [count])

    function clickhandler () {
        setCount(c => c + 1)
    }

    return  <div>
    <p> Hello from Function Component!</p>
    <button onClick = {clickhandler}>Increase count</button>
    </div>
}