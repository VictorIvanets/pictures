import { create } from 'zustand'


export interface IRating {
    id: string
    countRating: number
    rating: number[]
}

export interface RatingStore {
    rating: number[]
    id: string
    countRating: number | null
    setRating: (bal: number, id: string)=>void
    getRating: ()=>void
    clearRating: ()=>void
}

export const useRatingStore = create<RatingStore>((set) => ({
    rating: [],
    id: '',
    countRating: 0,
    allRating: [{
        id: '',
        rating: []
    }],
    setRating: (bal: number, getid: string) => 
        set((state) =>({rating: [
            ...state.rating, 
            bal], id: state.id = getid})),

    clearRating: () => 
        set((state) =>({rating: state.rating = [5]})),

    getRating: () => set((state) =>({ countRating: state.rating.reduce((a, b)=>{return a + b},0)/state.rating.length})),
}))
