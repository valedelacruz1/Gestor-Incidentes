//Obtener Usuarios
export interface RespUsuarios {
  msg:          string;
  totalMYSQL:   number;
  usuariosMy:   UsuarioMy[];
  totalMongoDB: number;
  usuariosMo:   UsuarioMo[];
}
//Obtener Usuarios

//obtener Usuario
export interface ObtenerUsuarioResp {
  msg:      string;
  usuario:  UsuarioMy;
  usuarioM: UsuarioMo;
}
//obtener Usuario

// Registro Usuario
export interface UsuarioRegist {
  msg: string;
  usuario: UsuarioMy;
  role:string;
}
// Registro Usuario


export interface UsuarioMo {
  username:      string;
  correo:        string;
  nombre:        string;
  apellido:      string;
  numDocumento:  string;
  telefono:      string;
  role:          UsuarioMoRole;
  dependencia:   UsuarioMoDependencia;
  tipoDocumento: UsuarioMoTipoDocumento;
  idMYSQL:       number;
  estado:        boolean;
  createdAt:     Date;
  updatedAt:     Date;
  id:            string;
}


export interface UsuarioMoDependencia {
  _id:             string;
  dep_nombre:      string;
  dep_descripcion: string;
  idMYSQL:         number;
}

export interface UsuarioMoRole {
  _id:        string;
  rol_nombre: string;
  idMYSQL:    number;
}

export interface UsuarioMoTipoDocumento {
  _id:              string;
  tdoc_nombre:      string;
  tdoc_descripcion: string;
  idMYSQL:          number;
}


export interface UsuarioMy {
  id:              number;
  username:        string;
  password:        string;
  nombre:          string;
  apellido:        string;
  numDocumento:    string;
  correo:          string;
  telefono:        string;
  estado:          boolean;
  createdAt:       Date;
  updatedAt:       Date;
  roleId:          number;
  dependenciaId:   number;
  tipoDocumentoId: number;
  role:            UsuarioMyRole;
  dependencia:     UsuarioMyDependencia;
  tipoDocumento:   UsuarioMyTipoDocumento;
}


export interface UsuarioMyDependencia {
  id:              number;
  dep_nombre:      string;
  dep_descripcion: string;
}

export interface UsuarioMyRole {
  id:              number;
  rol_nombre:      string;
  rol_descripcion: string;
}

export interface UsuarioMyTipoDocumento {
  id:               number;
  tdoc_nombre:      string;
  tdoc_descripcion: string;
}



export interface UsuarioEnvio{
  username:      string;
  password:      string;
  nombre:        string;
  apellido:      string;
  telefono:      string;
  numDocumento:  string;
  correo:        string;
  role:          number;
  tipoDocumento: number;
  dependencia:   number;
  estado?:        boolean;
}

export interface Usuario{
  id:            number;
  username:      string;
  password:      string;
  nombre:        string;
  apellido:      string;
  telefono:      string;
  numDocumento:  string;
  correo:        string;
  role:          number;
  tipoDocumento: number;
  dependencia:   number;
  estado:        boolean;
}
export interface UsuarioSesion{
  id:            number;
  username:      string;
  nombre:        string;
  role:          string;
  correo:        string;
  apellido:      string;

}
