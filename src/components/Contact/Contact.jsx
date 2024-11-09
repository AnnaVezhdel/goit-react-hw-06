import s from './Contact.module.css'
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Contact = ({ id, name, number, onDelete }) => {
    return (
    <li className={s.contactItem}>
    <p><FaUser />{name}<br /><FaPhoneAlt />{number}</p>
    <button onClick={() => onDelete(id)}>Delete</button>
    </li>
);
};

export default Contact