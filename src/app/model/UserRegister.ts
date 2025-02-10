export interface UserRegister {
  name : string;
  email : string;
  password : string;
  telephone : string;
  address : string;
  role : "collector" | "particular" ;
  create_at : Date;
}
