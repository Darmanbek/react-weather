import { cityData } from "src/data"
import type { City } from "src/types"
import { create } from "zustand"

interface CityStore {
	city: City
	setCity: (city: City) => void
}

const useCityStore = create<CityStore>()((set) => ({
	city: cityData[0],
	setCity: (city) => set({ city }),
}))

export { useCityStore }
