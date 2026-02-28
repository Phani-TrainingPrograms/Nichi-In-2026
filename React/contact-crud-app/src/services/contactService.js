let contacts = [
    {id : 1, name : "Phaniraj", mobile : 234234234, pic : "Phani.png"},
    {id : 2, name : "Banu Prakash", mobile : 634533535, pic : "pic1.png"},
    {id : 3, name : "Vinod", mobile : 6756578657, pic : "pic2.png"},
    {id : 4, name : "Suma", mobile : 345345345, pic : "pic3.png"},
    {id : 5, name : "Ramnath", mobile : 7746523423, pic : "pic4.png"},
    {id : 6, name : "Murali Setty", mobile : 85678564445, pic : "pic5.png"}
]

export const getContacts = () => contacts;

export const getContact = (id) => contacts.find(c => c.id === id);

export const addContact = (contact) => contacts = [...contacts, contact];

export const deleteContact = (id) => contacts = contacts.filter(c => c.id !== id);

export const updateContact = (id, updatedRec) => 
    contacts = contacts.map(c => c.id === id ? { ...c , ... updatedRec} : c)
