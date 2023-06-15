export interface RespRoles {
    msg:          string;
    totalMYSQL:   number;
    rolesMy:      RolesMy[];
    totalMongoDB: number;
    rolesMo:      RolesMo[];
}

export interface RolesMo {
    rol_nombre:      string;
    rol_descripcion: string;
    rol_estado:      boolean;
    idMYSQL:         number;
    createdAt:       Date;
    updatedAt:       Date;
    id:              string;
}

export interface RolesMy {
    id:              number;
    rol_nombre:      string;
    rol_descripcion: string;
    rol_estado:      boolean;
    createdAt:       Date;
    updatedAt:       Date;
}
export interface Role {
  id:              number;
  rol_nombre:      string;
  rol_descripcion: string;
  rol_estado:      boolean;
  createdAt:       Date;
  updatedAt:       Date;
}


export interface RoleEnvio{
  id:              number;
  rol_nombre:      string;
  rol_descripcion: string;
}
