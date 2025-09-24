import { users } from './users';
import type {user} from './users';

class userStore {
   private  users:user[];


constructor(initialUsers:user[]){
    this.users=initialUsers;
}

list(){
    console.log("Get- mostrando usuarios");
    return this.users
}}



