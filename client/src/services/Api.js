import axios from 'axios'

 export default() => {
   return axios.create({
     baseURL: `http://ec2-13-59-44-202.us.east-2.compute.amazonaws.com:3001`
     })
   }

