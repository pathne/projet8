
const rentingsAPI = {
    getRentings: async () => {
        try {
            const response = await fetch('/rentings')
            if (response.ok){
                return await response.json()
            }
        }
        catch (err){
        }
        return null;
    }
}

export default rentingsAPI
