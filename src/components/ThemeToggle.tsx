'use client'

import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const {theme, setTheme} = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700"
    >
      {theme === 'dark' ? '🌙 Dark' : '🌞 Light'}
    </button>
  )
}