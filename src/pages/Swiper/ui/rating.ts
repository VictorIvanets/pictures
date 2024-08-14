export interface IRatingLocal {
	id: string
	countRating: number
    rating: number[]
}

export const setRatingApi = (in_countRating: number = 0, in_id: string, in_rating: number[])=> {
  
        
        let localRating: IRatingLocal[] = []
    
        const localinit = localStorage.getItem('rating')
        console.log(localinit)
        
        if (!localinit) {
            localStorage.setItem('rating', JSON.stringify([]))
        } else {
            localRating = JSON.parse(localStorage.getItem('rating') || '')
        }
        
    
        // const localRating: IRatingLocal[] = JSON.parse(localStorage.getItem('rating') || '')
    
    
        const checkRating = localRating.filter((i) => {
            if (i.id === in_id && i.id !== '') {
                console.log(i)
                return i
            }
        })
    
        if (checkRating.length && in_countRating) {
            const oldRating = localRating.map((i) => {
                if (i.id === in_id) {
                   i.countRating = in_countRating 
                   i.rating = in_rating
         
                } else { return i} 
                return i
            })
            localStorage.setItem('rating', JSON.stringify(oldRating))
            console.log(oldRating)

        } else {
            const newRating = [...localRating, { id: in_id, countRating: in_countRating, rating: in_rating }]
            console.log(`NEW${newRating}`)
            localStorage.setItem('rating', JSON.stringify(newRating))
        }
    
}



