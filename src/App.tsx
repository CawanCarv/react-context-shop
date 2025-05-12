import './App.css'
import { ChangeTheme } from './components/ChangeTheme'
import { useTheme } from './contexts/ThemeContext'
import { Product } from './components/Product';
import { useCart } from './contexts/CartContext';
import { formatCurrency } from './utils';

function App() {
  const { theme } = useTheme();
  const { cart, total } = useCart();

  return (
    <main data-theme={theme} className={'flex flex-col items-center justify-start min-h-screen px-4 py-8 bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-100'}>
      <header className='flex flex-col gap-2 items-center justify-start'>
        <h1 className='text-4xl font-semibold'>React Context Shop</h1>
        <h2 className={'italic text-gray-600 dark:text-gray-300'}>Using Vite + React + TypeScript + TailwindCSS</h2>
        <ChangeTheme />
      </header>
      <section className='flex flex-col gap-4 mt-8 w-full max-w-3xl'>
        <article>
          <header className='text-center'>
            <h4 className='italic'>Total: {formatCurrency(total)}</h4>
          </header>
          <ul className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 w-full'>
            {cart.map(product => {
              return (
                <Product key={product.id} product={product} />
              )
            }
            )}
          </ul>
        </article>
      </section>
    </main>
  )
}

export default App
