import { create } from "zustand"
import { persist } from "zustand/middleware"

interface ThemePersistStore {
	theme: "dark" | "light"
	toggleTheme: () => void
}

const useThemePersistStore = create(
	persist<ThemePersistStore>(
		(set) => ({
			theme: "light",
			toggleTheme: () => set((prev) => ({ theme: prev.theme === "light" ? "dark" : "light" })),
		}),
		{
			name: "theme",
		}
	)
)

export { useThemePersistStore }
