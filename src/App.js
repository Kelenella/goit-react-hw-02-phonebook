import React from 'react';
import ContactForm from './components/ContactForm/ContactForm';
class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <ul></ul>
      </>
    );
  }
}
export default App;
