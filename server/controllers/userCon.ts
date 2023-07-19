import UserStudent from '../model/UserStudent';

export async function regiserStudent(req , res ){
    try {
        console.log(req.body);

        const {user} = req.body

        const {name ,lastName , password  , grade } = user;
        
        const userExist = await UserStudent.find({ name })
        if (userExist[0]) {
            res.send({ ok: false ,  text :" user exist"})
        }
        // if its not null so it's mean that someone with the same name alredy there
        else {
            const newUser = new UserStudent(user);
            await newUser.save();
            const userInfo = { name , lastName , password , grade}
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
        console.log('edededede;d[e;d[]e;d[];e]d');
        
    } catch (error) {
        console.error(error)
    }      
}


