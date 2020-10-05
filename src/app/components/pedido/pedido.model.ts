export interface Pedido {
    id?: number
    dataPedido: string
    statusPedido: number
    usuario_Id: number
    itemsPedido: ItemsPedido[]
    pagamento: string
    total: string
}

export interface ItemsPedido {
    descricao: string
}