export interface RespTipoDocumentos {
  msg:              string;
  totalMYSQL:       number;
  tipoDocumentosMy: TipoDocumentosMy[];
  totalMongoDB:     number;
  tipoDocumentosMo: TipoDocumentosMo[];
}

export interface TipoDocumentosMo {
  tdoc_nombre:      string;
  tdoc_descripcion: string;
  tdoc_estado:      boolean;
  idMYSQL:          number;
  createdAt:        Date;
  updatedAt:        Date;
  id:               string;
}

export interface TipoDocumentosMy {
  id:               number;
  tdoc_nombre:      string;
  tdoc_descripcion: string;
  tdoc_estado:      boolean;
  createdAt:        Date;
  updatedAt:        Date;
}

export interface TipoDocumento{
  id:               number;
  tdoc_nombre:      string;
  tdoc_descripcion: string;
  tdoc_estado:      boolean;
  createdAt:        Date;
  updatedAt:        Date;
}
