import { create } from "zustand";
import { Listing } from "./entities";

interface Store {
  listings: Listing[];
  setListings: (listings: Listing[]) => void;
  addListing: (listing: Listing) => void;
}

const useStore = create<Store>((set) => ({
  listings: [],
  setListings: (listings: Listing[]) => set({ listings }),
  addListing: (listing: Listing) =>
    set((state) => ({ listings: [...state.listings, listing] })),
}));

export default useStore;
