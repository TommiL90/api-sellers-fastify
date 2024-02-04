import {
  CreatePurchaseOrderItem,
  PurchaseOrderItem,
} from '@/interfaces/purchase-order-item-interfaces'

export abstract class PurchaseOrderItemRepository {
  abstract create(
    purchaseOrderItem: CreatePurchaseOrderItem,
  ): Promise<PurchaseOrderItem>

  abstract findAll(): Promise<PurchaseOrderItem[] | []>

  abstract findOne(id: string): Promise<PurchaseOrderItem>
}
