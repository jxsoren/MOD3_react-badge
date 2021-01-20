import React from 'react'

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            birthPlace: "",
            phone: "",
            favFood: "",
            about: "",
            id: 1,
            minChar: 3  
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit = (e) => {
        this.props.addBadges(this.state)
        
        this.setState(prevState => {
            return {
                ...prevState,
                    firstName: "",
                    lastName: "",
                    email: "",
                    birthPlace: "",
                    phone: "",
                    favFood: "",
                    about: ""
            }
        })
        
        e.preventDefault()
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    render(){
        return(
            <div className="parent">
                    <h1 id="mainTitle">React Name Badge</h1>

                    <div id="formMain">
                        <form id="formTemplate" onSubmit={this.handleSubmit}>
                            <input 
                                type="text"
                                name="firstName"
                                onChange={this.handleChange}
                                value={this.state.firstName}
                                placeholder="First Name"
                                required
                            />

                            <input 
                                type="text"
                                name="lastName"
                                value={this.state.lastName}
                                placeholder="Last Name"
                                onChange={this.handleChange}
                            />

                            <input 
                                type="text"
                                name="email"
                                value={this.state.email}
                                placeholder="Email"
                                onChange={this.handleChange}
                            />

                            <input 
                                type="text"
                                name="birthPlace"
                                value={this.state.birthPlace}
                                placeholder="Place of Birth"
                                onChange={this.handleChange}
                            />

                            <input 
                                type="number"
                                name="phone"
                                value={this.state.phone}
                                placeholder="Phone Number"
                                onChange={this.handleChange}
                            />

                            <input 
                                type="text"
                                name="favFood"
                                value={this.state.favFood}
                                placeholder="Favorite Food"
                                onChange={this.handleChange}
                            />  
                        
                            <textarea 
                                id="textArea"
                                name="about"
                                value={this.state.about}
                                placeholder="Tell Us About Yourself"
                                onChange={this.handleChange} 
                            />

                            <button 
                                id="formButton" 
                                // disabled={this.state.value}
                            >
                            Submit
                        </button>
                    </form>   
                </div>
            </div>
            )
        }
}

export default Form