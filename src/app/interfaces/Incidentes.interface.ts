// LISTADO INCIDENTES
export interface RespIncidentes {
  msg:          string;
  totalMYSQL:   number;
  incidentesMy: IncidenteMy[];
  totalMongoDB: number;
  incidentesMo: IncidenteMo[];
}


//OBTENER INCIDENTE
export interface RespIncidente {
  msg:        string;
  incidente:  IncidenteMy;
  incidenteM: IncidenteMo;
}
//AGREGAR INCIDENTE
export interface IncidenteEnvio{
    inc_nombre: string;
    inc_descripcion: string;
    inc_tipoIncidenteId: number;
    inc_estadoIncidenteId:number;
    inc_usuarioId:number;
    inc_usuarioRevisionId:number;
}
//Resultado de AGREGAR INCIDENTE
export interface RespAddIncidente {
  msg:        string;
  incidente:  IncidenteRespAddMy;
  incidenteM: IncidenteRespAddMo;
}

//ACTUALIZAR INCIDENTE
export interface IncidenteActEnvio{
  id:number;
  inc_nombre: string;
  inc_descripcion: string;
  inc_tipoIncidenteId: number;
  inc_estadoIncidenteId:number;
  inc_usuarioId:number;
  inc_usuarioRevisionId:number;
}
//RESP ACTUALIZAR INCIDENTE
export interface RespActIncidente {
  msg:                   string;
  incidenteActualizado:  IncidenteMy;
  incidenteMActualizado: IncidenteMo;
}

//Resp BORRAR INCIDENTE\
export interface RespDelIncidente{
  msg:string;
  incidenteMy:IncidenteMy;
  incidenteMo:IncidenteMo;

}


//MONGO
export interface IncidenteMo {
  inc_nombre:          string;
  inc_descripcion:     string;
  inc_estado:          boolean;
  idMYSQL:             number;
  id:                  string;
  inc_tipoIncidente:   IncidenteMoIncTipoIncidente;
  inc_estadoIncidente: IncidenteMoIncEstadoIncidente;
  inc_usuario:         IncidenteMoIncUsuario;
  inc_usuarioRevision: IncidenteMoIncUsuarioRevision;
  createdAt:           Date;
  updatedAt:           Date;
}

export interface IncidenteMoIncEstadoIncidente {
  _id:             string;
  est_nombre:      string;
  est_descripcion: string;
  idMYSQL:         number;
}

export interface IncidenteMoIncTipoIncidente {
  _id:              string;
  tinc_nombre:      string;
  tinc_descripcion: string;
  idMYSQL:          number;
}

export interface IncidenteMoIncUsuario {
  _id:         string;
  correo:      string;
  nombre:      string;
  telefono:    string;
  role:        string;
  dependencia: string;
  idMYSQL:     number;
}

export interface IncidenteMoIncUsuarioRevision {
  _id:     string;
  correo:  string;
  nombre:  string;
  role:    string;
  idMYSQL: number;
}

//<--MYSQL--->
export interface IncidenteMy {
  id:                    number;
  inc_nombre:            string;
  inc_descripcion:       string;
  inc_estado:            boolean;
  createdAt:             Date;
  updatedAt:             Date;
  inc_usuarioId:         number;
  inc_usuarioRevisionId: number;
  inc_tipoIncidenteId:   number;
  inc_estadoIncidenteId: number;
  inc_usuario:           IncidenteMyIncUsuario;
  inc_usuarioRevision:   IncidenteMyIncUsuarioRevision;
  inc_tipoIncidente:     IncidenteMyIncTipoIncidente;
  inc_estadoIncidente:   IncidenteMyIncEstadoIncidente;
}

export interface IncidenteMyIncEstadoIncidente {
  id:              number;
  est_nombre:      string;
  est_descripcion: string;
}

export interface IncidenteMyIncTipoIncidente {
  id:               number;
  tinc_nombre:      string;
  tinc_descripcion: string;
}

export interface IncidenteMyIncUsuario {
  id:            number;
  nombre:        string;
  correo:        string;
  telefono:      string;
  dependenciaId: number;
  roleId:        number;
}

export interface IncidenteMyIncUsuarioRevision {
  id:     number;
  nombre: string;
  correo: string;
  roleId: number;
}






export interface IncidenteRespAddMy {
  inc_estado:            boolean;
  id:                    number;
  inc_nombre:            string;
  inc_descripcion:       string;
  inc_tipoIncidenteId:   number;
  inc_estadoIncidenteId: number;
  inc_usuarioId:         number;
  inc_usuarioRevisionId: number;
  updatedAt:             Date;
  createdAt:             Date;
}

export interface IncidenteRespAddMo {
  inc_nombre:          string;
  inc_descripcion:     string;
  inc_estado:          boolean;
  inc_tipoIncidente:   string;
  inc_estadoIncidente: string;
  inc_usuario:         string;
  inc_usuarioRevision: string;
  idMYSQL:             number;
  createdAt:           Date;
  updatedAt:           Date;
  id:                  string;
}



// Incidente Seleccionado
export interface IncidenteSeleccionado{
  id:                    number;
  inc_nombre:            string;
  inc_descripcion:       string;
  inc_estado:            boolean;
  createdAt:             Date;
  updatedAt:             Date;
  inc_usuarioId?:         number;
  inc_usuarioRevisionId?: number;
  inc_tipoIncidenteId?:   number;
  inc_estadoIncidenteId?: number;
  inc_tipoIncidente:     IncidenteMyIncTipoIncidente | IncidenteMoIncTipoIncidente;
  inc_estadoIncidente:   IncidenteMyIncEstadoIncidente | IncidenteMoIncEstadoIncidente;
  inc_usuario:           IncidenteMyIncUsuario | IncidenteMoIncUsuario;
  inc_usuarioRevision:   IncidenteMyIncUsuarioRevision | IncidenteMoIncUsuarioRevision;
}




