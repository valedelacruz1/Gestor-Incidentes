export interface RespEstadoIncidentes {
  estadoIncidentesMy: EstadoIncidentesMy[];
  totalMongoDB:       number;
  estadoIncidentesMo: EstadoIncidentesMo[];
}

export interface EstadoIncidentesMo {
  est_nombre:      string;
  est_descripcion: string;
  est_estado:      boolean;
  idMYSQL:         number;
  createdAt:       Date;
  updatedAt:       Date;
  id:              string;
}

export interface EstadoIncidentesMy {
  id:              number;
  est_nombre:      string;
  est_descripcion: string;
  est_estado:      boolean;
  createdAt:       Date;
  updatedAt:       Date;
}

export interface EstadoIncidente {
  id:              number;
  est_nombre:      string;
  est_descripcion: string;
  est_estado:      boolean;
  createdAt:       Date;
  updatedAt:       Date;
}


