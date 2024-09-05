import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const emptyContacts = [];
    await writeContacts(emptyContacts);
    console.log('Усі контакти видалено.');
  } catch (error) {
    console.error('Помилка видалення контактів:', error);
  }
};

removeAllContacts();
