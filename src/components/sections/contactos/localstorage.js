const LOCAL_STORAGE_KEY = 'agenda_telefonica';

function saveContactsToStorage(contactos) {
 localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contactos));
}

// Verificación de laca llave en localStorage
function checkLocalStorageKey() {
    if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([]));
        console.log("Se creo la llave en localStorage");
        return true;
   }
   return false;
}

function getContactsFromStorage() {
    checkLocalStorageKey();
 return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
}

export { LOCAL_STORAGE_KEY, getContactsFromStorage, saveContactsToStorage };