
export interface UserPayload{
    id:number;
    rol:number;
};
export interface JwtExpPayload {
    expiresIn: string;
    exp: number;
}