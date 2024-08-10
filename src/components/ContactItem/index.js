import { deleteContact } from '../../services'
import './style.css'

const ContactItem = (props) => {
  const {
    id,
    full_name,
    phone_number,
    email,
    handleGetContacts,
    handleSetSelected,
  } = props

  // TODO:
  // 1. Buat sebuah fungsi untuk men-dispatch fungsi menghapus kontak yang sudah dibuat sebelumnya di services/index.js dan memanggil fungsi handleGetContacts untuk refresh data kontak
  // 2. Buat button edit dengan properti data-cy nya btn-edit, class nya contact-item__button dan contact-item__edit-button serta menjalankan fungsi handleSetSelected ketika di klik
  // 3. Buat button hapus dengan properti data-cy nya btn-delete, class nya contact-item__button dan contact-item__delete-button serta menjalankan fungsi menghapus kontak yang sudah dibuat sebelumnya ketika di klik
  // 4. Kedua button tersebut dibuat di dalam elemen div dengan class contact-item__button-wrapper

  const handleDeleteContact = async () => {
    await deleteContact(id);
    handleGetContacts();
  }
  const handleEditContact = async () => {
    handleSetSelected(id, full_name, phone_number, email);
  }

  return (
    <div data-cy="item-card" className="contact-item__wrapper">
      <div className="contact-item__first-row">
        <p data-cy="item-name" className="contact-item__name">
          {full_name}
        </p>
        <div className="contact-item__button-wrapper">
          <button data-cy="btn-edit" class="contact-item__button contact-item__edit-button " onClick={handleEditContact}> Edit Contact</button>
          <button data-cy="btn-delete" class="contact-item__button contact-item__delete-button " onClick={handleDeleteContact}> Delete Contact</button>
        </div>
      </div>
      <div className="contact-item__second-row">
        <p className="contact-item__phone-email">
          <span data-cy="item-phone">{phone_number}</span> |&nbsp;
          <span data-cy="item-email">{email}</span>
        </p>
      </div>
    </div>
  )
}

export default ContactItem
