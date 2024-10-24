import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemContext'

interface UseThemeResult {
	toggleTheme: () => void
	theme: Theme
}

export function useTheme(): UseThemeResult {
	const { theme, setTheme } = useContext(ThemeContext)

	const toggleTheme = () => {
		let newTheme: Theme
		switch (theme) {
			case Theme.DARK:
				newTheme = Theme.LIGHT
				break
			case Theme.LIGHT:
				newTheme = Theme.RUBY
				break
			case Theme.RUBY:
				newTheme = Theme.DARK
				break
			default:
				newTheme = Theme.DARK
		}

		setTheme?.(newTheme)
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
	}

	return {
		theme: theme || Theme.DARK,
		toggleTheme,
	}
}
