import { Component } from "react";

import { Form, Label } from './ContactForm.styled'

class ContactInput extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor="name">
          Ім'я
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={name}
            pattern="^[a-zA-Zа-яА-ЯёЁіІїЇєЄ]+([' \-][a-zA-Zа-яА-ЯёЁіІїЇєЄ]+)*$"
            title="Ім'я може містити лише літери. Наприклад: Іван"
            required
          />
        </Label>
        <Label htmlFor="number">
          Номер телефону
          <input
            type="tel"
            name="number"
            onChange={this.handleChange}
            value={number}
            pattern="[0-9+\(\)\-\s]{7,15}"
            title="Номер телефону повинен містити лише цифри та починатися з +"
            required
          />
        </Label>
        <button style={{ backgroundColor: '#1d1c1c', color: '#ffffff', border: '1px solid #777777', borderRadius: '3px', padding: '4px 4px', cursor: 'pointer' }} type="submit">
          Новий Контакт
        </button>
      </Form>
    );
  }
}

export default ContactInput;