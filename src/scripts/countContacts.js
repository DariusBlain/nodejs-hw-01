import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    let count = 0;
    for (let index = 0; index < contacts.length; index++) {
      count++;
    }
    return count;
  } catch (error) {
    console.error('Помилка читання контактів:', error);
  }
};

console.log(await countContacts());
