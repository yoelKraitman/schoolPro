import UserStudent from '../model/UserStudent';

export async function regiserStudent(req , res ){
    try {

        const {user} = req.body

        const {name ,lastName , password  , classroom } = user;
        
        const userExist = await UserStudent.find({ name })
        if (userExist[0]) {
            res.send({ ok: false ,  text :" user exist"})
        }
        // if its not null so it's mean that someone with the same name alredy there
        else {
            const newUser = new UserStudent(user);
            await newUser.save();
            const userInfo = { name , lastName , password , classroom}
            // to save it in the Mongo 
            res.cookie(
                'userInfo',
                { userInfo },
                { httpOnly: true }
            )
            res.send({ ok: true , userExist })
        }
    } catch (error) {
        console.error(error)
    }
}
export async function signStudent(req , res ){
    try {
        const {student} = req.body;
        const {name , password } = student;

        const username = await UserStudent.find({ name  });
        const userPassword = await UserStudent.find({  password });

        if(username[0] && userPassword[0]){
            res.send({ok:true , message:`Welcome ${name}`})
        }
         else if(username[0] && userPassword[0] === undefined){
            res.send({name:true , message:`the password is not correct`})
        }
        else{
            res.send({ok:false , message:`${name} didn't exist you need to register `})
        }
        

    } catch (error) {
        console.error(error)
    }      
}


