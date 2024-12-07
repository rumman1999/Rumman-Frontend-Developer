import axios from "axios"
import { endPoint } from "../constants/constant"

export const fetchCategories =async () => {
    try{
        const url = `${endPoint}/categories.php`
        const res = await axios.get(url)
        console.log(res.data)
    }
    catch(err){
        return err
    }
}