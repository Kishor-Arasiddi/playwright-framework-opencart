import {faker} from '@faker-js/faker';

export class RandomDataUtil{

    static getFirstname(){
      return faker.person.firstName();
    }

     static getLastname(){
      return faker.person.lastName();
    }

     static getEmail(){
      return faker.internet.email();
    }

     static getPhoneNumber(){
      return faker.phone.number();
    }

     static getPassworx(){
      return faker.internet.password();
    }

     static getFullname(){
      return faker.person.fullName()
    }
}