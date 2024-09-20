import { create } from "zustand";
import { Listing } from "./entities";

interface Store {
  // listing state
  listings: Listing[];
  setListings: (listings: Listing[]) => void;
  addListing: (listing: Listing) => void;

  // progress state
  progress: number;
  setProgress: (progress: number) => void;
  resetProgress: () => void;
}

const useStore = create<Store>((set) => ({
  // listing state
  listings: [],
  setListings: (listings: Listing[]) => set({ listings }),
  addListing: (listing: Listing) =>
    set((state) => ({ listings: [...state.listings, listing] })),

  // progress state
  progress: 0,
  setProgress: (progress: number) => set({ progress }),
  resetProgress: () => set({ progress: 0 }),

}));

export default useStore;
