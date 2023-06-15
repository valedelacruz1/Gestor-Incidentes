export interface CheckTokenResp {
  ok: boolean;
  usuario: UsuarioToken;
  role: string;
  token: string;
}
export interface TiempoTokenResp {
  ok: boolean;
  msg: string;
}

export interface UsuarioToken {
  id: number;
  username: string;
  nombre: string;
  role: string;
  correo: string;
  apellido: string;
}
