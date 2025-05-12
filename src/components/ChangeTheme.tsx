import { FaMoon, FaSun } from "react-icons/fa"
import { useTheme } from "../contexts/ThemeContext"

export const ChangeTheme = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Change theme to ${theme === 'dark' ? 'light' : 'dark'}`}
      className="fixed top-2 md:top-8 right-2 md:right-8 cursor-pointer border rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-gray-200 dark:bg-gray-800">
      {theme == 'light' ? <FaMoon /> : <FaSun />}
    </button>
  )
}
