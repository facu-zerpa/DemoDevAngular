export interface Infraccion {
    id: string,
    documento: string,
    fecha: Date,
    codigo: string,
    importe: number,
    fechaPago: Date | null,
}