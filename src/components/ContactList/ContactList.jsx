import Contact from '../Contact/Contact';
import s from './ContactList.module.css'

const ContactList = ({ contacts, onDelete }) => {
return (
    <div>
    {contacts.length > 0 ? (
    <ul className={s.contactsList}>
        {contacts.map(contact => (
        <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={onDelete}
        />
        ))}
    </ul>
    ) : (
    <p>No contacts found</p>
    )}
    </div>
);
};

export default ContactList;