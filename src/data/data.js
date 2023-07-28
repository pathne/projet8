
import rentingsAPI from '../api/rentingsAPI'

const data = {
    rentings:{
        items: null,
        get: async function(){
            if (this.items === null){
                this.items = await rentingsAPI.getRentings()
            }
            return this.items || []
        }
    },
    renting:{
        get: async function(id){
            const items = await data.rentings.get()
            return items.find(item => item.id === id)
        }
    }
}

export default data
