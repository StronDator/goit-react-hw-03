import css from "./Contact.module.css";

import { FaPhone } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";

export default function Contact({ id, name, number, onDeleteContact }) {
  return (
    <li className={css.item}>
      <div>
        <ContactInfo icon={<IoPersonSharp />}>{name}</ContactInfo>
        <ContactInfo icon={<FaPhone />}>{number}</ContactInfo>
      </div>
      <button className={css.itemButton} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
}

function ContactInfo({ icon, children }) {
  return (
    <p className={css.info}>
      <span className={css.iconWrapper}>{icon}</span>
      <span>{children}</span>
    </p>
  );
}
