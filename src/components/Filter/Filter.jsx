import { Component } from "react"

class Filter extends Component {
    
    state = {
        filter: "",
    }

    handleChange = (e) => {
        const { name, value } = e.currentTarget;

        this.setState({
            [name]: value
        })
        this.props.onChange(value)
    }

    render() {
        return (
            <div>
                <label style={{ marginRight: '5px', alignItems: 'center', color: '#000000' }} htmlFor="filter">Пошук по імені</label>
                <input title="Впишіть ім'я для пошуку" type="text" value={this.state.filter} name="filter" onChange={this.handleChange}/>
            </div>
        )
    }
}

export default Filter