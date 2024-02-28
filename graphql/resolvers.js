const UserSchema = require('../models/User');
const MessageSchema = require('../models/Message');

const resolvers = {    
        hello: () => {
            return "Hola Mundo!";
        },

        User: async (_, {id}) => {
            try {
                return user = await UserSchema.findById(id);
            }catch(e){
                console.log(encodeURIComponent)
            }
        },
        
        Users: async () => {
            try{
                return await UserSchema.find();
            }
            catch(e){
                console.log(e)
            }
        },  

        Message: async(_,{id},fromId) =>{
       try {
       
            return message = await MessageSchema.findById(id); 
          
       } catch {
              console.log(e)
       }
           
        }, 


        Messages: async () => {
            try{
                
                return await MessageSchema.find();

            }
            catch(e){
                console.log(e)
            }
        },

        UsersByFilter: async (_, {filter}) => {
            try{
                let query = {};

                if(filter){
                    if(filter.name){
                        // {name: "Mar"}
                        query.name = { $regex: filter.name, $options: 'i' } // 'i' se utiliza para hacer una busqueda insesible de mayusculas y minusculas
                    }
                    if(filter.email){
                        // {email: "juan@"}
                        query.email = { $regex: filter.email, $options: 'i'}
                    }
                    if(filter.lastname){
                        // {lastname: "San"}
                        query.lastname = { $regex: filter.lastname, $options: 'i' }
                    }

                    const users = await UserSchema.find(query)
                    return users;
                }

            }catch(e){
                console.log("Error obteniendo el usuario")

            }
        }

}
module.exports = resolvers