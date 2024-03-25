
const GenderCheckbox = ({onChackboxChange, selectedGender}) => {
  return (
    <div className="flex">
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer ${selectedGender === 'male' ? "selected" : ""}`}>
                <span className="label-text  text-gray-600">Male</span>
                <input type="checkbox" className="checkbox boder-slate-900"
                checked={selectedGender === 'male'}
                onChange={() => onChackboxChange('male')}
                />
            </label>
        </div>
        <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender === 'female' ? "selected" : ""} `}>
                <span className="label-text  text-gray-600">Female</span>
                <input type="checkbox" className="checkbox boder-slate-900"
                checked = {selectedGender === 'female'}
                onChange={() => onChackboxChange('female')}
                />
            </label>
        </div>
      
    </div>
  )
}

export default GenderCheckbox


// const GenderCheckbox = () => {
//     return (
//       <div className="flex">
//           <div className="form-control">
//               <label className={`label gap-2 cursor-pointer`}>
//                   <span className="label-text  text-gray-600">Male</span>
//                   <input type="checkbox" className="checkbox boder-slate-900"/>
//               </label>
//           </div>
//           <div className="form-control">
//           <label className={`label gap-2 cursor-pointer`}>
//                   <span className="label-text  text-gray-600">Female</span>
//                   <input type="checkbox" className="checkbox boder-slate-900"/>
//               </label>
//           </div>
        
//       </div>
//     )
//   }
  
//   export default GenderCheckbox
  
