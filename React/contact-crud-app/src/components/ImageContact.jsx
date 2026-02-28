
const ImageContact = ({ contact }) => {
    return (
        <div>
            <img style={{width:'100px', height :'100px'}} src={import.meta.env.BASE_URL + "images/" + contact.pic} alt={contact.name} width="50" height="50" />
        </div>
    )    
}
export default ImageContact;