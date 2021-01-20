import React from 'react'
import Badge from './Badge'
import Form from './Form'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            badges:[]
        }
    }

    addBadges = (userInfo) => {
        this.setState(prevState => {
            return {
                badges: [...prevState.badges, userInfo]
            }
        })
        console.log(this.state.badges)
    }

    render(){
        return (
            <div>
                <Form addBadges={this.addBadges}/>
                {this.state.badges.map((badge, index) => <Badge {...badge}
                key={index}
                />)}
            </div>
        )
    }
}

export default App
