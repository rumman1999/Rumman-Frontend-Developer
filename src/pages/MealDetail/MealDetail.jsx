/* eslint-disable react/prop-types */
import { useContext } from "react"
import MealDetails from "../../components/MealDetail/MealDetail"
import { AppContext } from "../../context/AppContext"

const MealDetail = ({setModel}) => {
  const {selectedMeal} = useContext(AppContext)
  console.log(selectedMeal)
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
  <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 sm:w-2/3 lg:w-1/2 relative">
    <MealDetails selectedMeal={selectedMeal}/>
    <button
      className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
      onClick={()=>setModel(false)}
    >
      ✕
    </button>
  </div>
</div>

  )
}

export default MealDetail