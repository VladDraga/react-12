import { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";


class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  addContact = ({ name, number }) => {
    if (this.state.contacts.some((contact) => contact.name === name)) {
      const message = `${name} is already in contacts!`;
      console.warn(message);
      alert(message);
      return;
    }

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  deleteContact = (id) => {
    const newContacts = this.state.contacts.filter(
      (contact) => contact.id !== id,
    );
    this.setState({
      contacts: newContacts,
    });
  };

  filterChange = (filter) => {
    this.setState({
      filter: filter,
    });
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem("savedContacts"))

    this.setState({
      contacts: savedContacts ?? [],
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const prevContacts = prevState.contacts
    const nextContacts = this.state.contacts
    
    if (prevContacts === nextContacts) return

    localStorage.setItem("savedContacts", JSON.stringify(nextContacts))
  }

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <h1 style={{ fontSize: '25px', color: '#000000', marginBottom: '10px'}}>Пошукова книга</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2 style={{ fontSize: '20px', color: '#000000', marginBottom: '10px'}}>Контакти</h2>
        <Filter onChange={this.filterChange} />
        <ContactList
          contacts={contacts}
          onDelete={this.deleteContact}
          filter={filter}
        />
      </>
    );
  }
}

export default App;