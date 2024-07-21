import { Apartamento } from "./apartamento.interface";

export type ApartamnetoPayload = Omit<Apartamento, 'id' | 'veiculos'>
