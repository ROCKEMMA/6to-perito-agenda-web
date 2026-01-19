import { ItemContacto } from "../../common/itemContacto/IntemContacto.js";
import { getContactsFromStorage } from "./localstorage.js";

let Contactos = () => {
    
    let sectionContactos = document.createElement("section");
    sectionContactos.className = "contactos";
    
    sectionContactos.innerHTML = "";
    
    let h2 = document.createElement("h2");
    h2.textContent = "Contactos";
    sectionContactos.appendChild(h2);

    let contactos = getContactsFromStorage();

    contactos.forEach((contact) => {
        sectionContactos.appendChild(ItemContacto("user2.svg", contact.nombre, contact.telefono));
    });

    return sectionContactos;
};

export { Contactos };