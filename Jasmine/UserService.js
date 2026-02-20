export class UserService{
    constructor(adapter) {
        this.adapter = adapter
    }

    //Create
    registerUser(user){
        if(!user.name || !user.email) throw new Error("Invalid user information");
        return this.adapter.addUser(user);
    }
    //Read
    getUserById(id){
        const user = this.adapter.get(id);
        if(!user) throw new Error("User not found");
        return user;
    }
    //Update
    updateUser(id, name, email){
        const user = this.adapter.get(id);
        if(user){
            user.name = name;
            user.email = email;
            return this.adapter.update(user)
        }
        throw new Error("User not found to update");
    }
    //Delete
    unRegister(id){
        return this.adapter.delete(id);
    }
}


