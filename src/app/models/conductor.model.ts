export interface ApiResponse {
  dato: Curso_Conductor[];
}

export interface Curso_Conductor {
  ID_CURSO_CONDUCTOR: number;
  F_INICIO: string;
  F_FIN: string;
  ESTADO: string;
  CARNET_C: string;
  F_CADUCIDAD: string;
  F_EMISION: string;
  ID_CURSO: number;
  ID_PERSONA: number;
}
