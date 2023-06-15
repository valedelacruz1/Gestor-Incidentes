import { UsuarioMy, UsuarioMo } from './Usuarios.interface';

export interface AuthResponse {
  msg: string;
  usuarioMy: UsuarioMy;
  usuarioMo: UsuarioMo;
  role: string;
  token: string;
}

export interface UsuarioEncontrado {
  msg: string;
  usuarioMy: UsuarioMy;
  usuarioMo: UsuarioMo;
}
