import { Usuario} from "../models/user.model";
import {Roles} from "../models/rol.model";
import {Post} from "../models/post.model";


Roles.hasMany(Usuario,{ //un rol tiene mucho usuario
    foreignKey:'roles_id',
    sourceKey: 'id'
});

Usuario.belongsTo(Roles,{ //varios usuario pertene a un rol
    foreignKey: 'roles_id',
    targetKey:' id'
})


Post.hasMany(Usuario,{ // muchos post pertenece a un usuario
    foreignKey: 'usuario_id',
    sourceKey: 'id'
});

Usuario.belongsTo(Post,{
    foreignKey: 'usuario_id',
    targetKey:'id'
});
