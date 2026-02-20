import { UserService } from "../UserService.js";

describe('User Service CRUD operation testing', () => { 
  //member variables
  let service;
  let mockAdapter;

  //invoked every time before any spec is tested. 
    beforeEach(()=>{
        mockAdapter = jasmine.createSpyObj('DataAdapter', ['addUser', 'get', 'update', 'delete']);
        if(!mockAdapter)
            console.log("Spy not created")
        service = new UserService(mockAdapter)
        console.log("Calling to initialize");
    })
    
    describe('register Operation', () => { 
        it('shall call register method', ()=>{
            const newUser = { id : 123, name : "Phaniraj", email : "phanirajbn@gmail.com" };
            mockAdapter.addUser.and.returnValue({...newUser});

            //act
            const actual = service.registerUser(newUser);

            //assert
            expect(mockAdapter.addUser).toHaveBeenCalledWith(newUser);
            expect(actual.id).toBe(123)
        })

        it('shall throw an error if the name is missing', ()=>{
            //act and assert
            expect(()=> service.registerUser({id : 123, email : "phanirajbn@gmail.com"})).toThrowError('Invalid user information')
        })
        //test for -ve ids
        //test for valid Email address
        //test for emailaddress and name
        //test for 0 id..
     })

     describe('Read operation',()=>{
        it('should return user if exists', ()=>{
            //arrange
            const foundUser = { id : 123, name : "Phaniraj", email : "phanirajbn@gmail.com" };
            mockAdapter.get.and.returnValue(foundUser);

            //act
            const actual = service.getUserById(123);

            //assert
            expect(mockAdapter.get).toHaveBeenCalledWith(123);
            expect(actual.name).toBe(foundUser.name);
        })

     })
})

//Create a EmailService that has fn called sendEmail.
//UserRegistration Business logic and it has EmailService as DI.
//register function => RegisterUser, Send an Email to the User. It shall return true.
//test case: EmailService Injector to send email. Test it with Mock and then with Real emailService.
