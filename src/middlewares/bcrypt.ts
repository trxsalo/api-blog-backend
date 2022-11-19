import bcrypt from 'bcryptjs'
/**
 * @param password 
 * 
 * @rerturn el password cifrado
 */
export async function encryptPassword(password:string):Promise<string>{
    const salt  = await bcrypt.genSalt(10);
    return bcrypt.hash(password,salt)
}

/**
 * 
 * @param passwordTexPlano el passaor en texto plano
 * @param hastpassword el hst del pass encrytado
 * @returns boolean devuelve si son iguales
 */
export async function encryptCompareSy(passwordTexPlano:string,hastpassword:any):Promise<boolean> {
    return await bcrypt.compareSync(passwordTexPlano,hastpassword)
}
