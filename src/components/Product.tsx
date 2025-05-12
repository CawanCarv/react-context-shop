import { FaMinus, FaPlus } from "react-icons/fa"
import type { ProductType } from "../types"
import { useCart } from "../contexts/CartContext"
import { formatCurrency } from "../utils"

type Props = {
  product: ProductType
}

export const Product = ({ product }: Props) => {
  const { addProduct, removeProduct } = useCart();

  return (
    <li className='flex items-center justify-between bg-gray-300 dark:bg-gray-700 p-4 rounded-lg'>
      <header>
        <h5 className='text-lg'>{product.name}</h5>
        <span className='text-lg'>{formatCurrency(product.price)}</span>
      </header>
      <div className='flex gap-4 items-center justify-center bg-gray-200 dark:bg-gray-800 p-2 text-sm rounded-sm'>
        <button onClick={() => removeProduct(product.id)} className='cursor-pointer' aria-label="Remover 1 unidade" >
          <FaMinus className='text-gray-900 dark:text-gray-100 text-xs' />
        </button>
        {product.quantity}
        <button onClick={() => addProduct(product.id)} className='cursor-pointer' aria-label="Adicionar 1 unidade" >
          <FaPlus className='text-gray-900 dark:text-gray-100 text-xs' />
        </button>
      </div>
    </li>
  )
}
