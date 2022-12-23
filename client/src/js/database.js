import { openDB } from 'idb';
const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });
export const putDb = async (content) => {
  const jate = await openDB('jate', 1)
  const readWrite = jate.readWrite('jate','readwrite')
  const store = readWrite.objectStore('jate')
  const add = store.add({value: content})
}
export const getDb = async () => {
  const jate = await openDB('jate',1)
  const readOnly = jate.readOnly('jate','readonly')
  const store = readOnly.objectStore('jate')
  const pull = store.getAll();
  const endResult = await pull;
  if (endResult.length <1) {
    return null
  }
  return result[result.length -1].value
}

initdb();
