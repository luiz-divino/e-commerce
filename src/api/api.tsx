async function api(){
   try {
      const response = await fetch('https://dummyjson.com/products')
      const data = response.json()
      console.log(data)
      return data
   } catch (error) {
      console.log(error)
   }
}

api()

export default api