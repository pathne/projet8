
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
    }
}

export default data
