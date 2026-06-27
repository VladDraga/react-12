import { Component } from "react";

import { Contact, Text } from './ContactList.styled'

class ContactList extends Component {
  render() {
    const { contacts, onDelete, filter } = this.props;

    return (
      <ul>
        {contacts
          .filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase()),
          )
          .map(({ id, name, number }) => (
            <Contact key={id}>
              <Text>
                {name}: {number}
              </Text>
              <button style={{ backgroundColor: '#1d1c1c', color: '#ffffff', border: '1px solid #777777', borderRadius: '3px', padding: '4px 4px', cursor: 'pointer' }} type="button" onClick={() => onDelete(id)}>
                Видалити
              </button>
            </Contact>
          ))}
      </ul>
    );
  }
}

export default ContactList;