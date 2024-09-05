import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('Список контактів порожній');
      return;
    }

    const removedContact = contacts.pop();

    await writeContacts(contacts);

    console.log('Останній контак видалено:', removedContact);
  } catch (error) {
    console.log('Помилка видалення останнього контакта', error);
  }
};

removeLastContact();
