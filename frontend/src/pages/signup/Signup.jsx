import { useState } from "react";
import GenderCheckbox from "./GenderCheckbox"
import  {Link} from 'react-router-dom';
import useSignup from "../../hooks/useSignup";


const Signup = () => {
   
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender:"",
    })
    const {loading, signup} = useSignup();
      
    const handleCheckboxChange = (gender) => {
        setInputs({...inputs, gender})
    }
    const handleSubmit = async(e) => {
        e.preventDefault();

       await signup(inputs)
    }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-600"> SignUp
        <span className="text-green-500"> Chatbox </span>
        </h1>
        <form onSubmit={handleSubmit}>
            <div>
            <label className="label p-2">
                <span className="text-base label-text  text-gray-600">Full Name</span>
            </label>
            <input type="text" placeholder="Enter your Full Name..." 
            className="w-full input input-bordered  h-10" 
            value={inputs.fullName}
            onChange={(e) => setInputs({...inputs, fullName:e.target.value})}
            ></input>
            </div>
            <div>
            <label className="label p-2">
                <span className="text-base label-text  text-gray-600">Username</span>
            </label>
            <input type="text" 
            placeholder="Enter username" 
            value={inputs.username}
            onChange={(e) => setInputs({...inputs, username:e.target.value})}
            className="w-full input input-bordered  h-10" ></input> 
            </div>
            <div>
            <label className="label p-2">
                <span className="text-base label-text  text-gray-600">Password</span>
            </label>
            <input 
            type="password" 
            placeholder="Enter password...." 
            value={inputs.password}
            onChange={(e) => setInputs({...inputs, password:e.target.value})}
            className="w-full input input-bordered  h-10"
            >
            </input>
            </div>
            <div>
            <label className="label p-2">
                <span className="text-base label-text  text-gray-600">Confirm Password</span>
            </label>
            <input 
            type="password" 
            placeholder="Confirm password" 
            value={inputs.confirmPassword}
            onChange={(e) =>setInputs({...inputs, confirmPassword:e.target.value})}
            className="w-full input input-bordered  h-10"
            >
            </input>
            </div>
            <GenderCheckbox onChackboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>
            <Link to="/login" className="text-sm  text-gray-600 hover:underline hover:text-green-600 mt-2 inline-block">Already have an Account?</Link>
            <div>
                <button className="btn btn-block btn-sm mt-2" disabled={loading}>
                    {loading ? <span className="loading, loading-spinner"></span> : " Sign up"}
                    </button>
            </div>
         
        </form>
        </div>
          
    </div>
  )
}

export default Signup



// import GenderCheckbox from "./GenderCheckbox"


// const Signup = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-600"> SignUp
//         <span className="text-green-500"> Chatbox </span>
//         </h1>
//         <form>
//             <div>
//             <label className="label p-2">
//                 <span className="text-base label-text  text-gray-600">Full Name</span>
//             </label>
//             <input type="text" placeholder="Enter your Full Name..." className="w-full input input-bordered  h-10" ></input>
//             </div>
//             <div>
//             <label className="label p-2">
//                 <span className="text-base label-text  text-gray-600">Username</span>
//             </label>
//             <input type="text" placeholder="Enter username" className="w-full input input-bordered  h-10" ></input> 
//             </div>
//             <div>
//             <label className="label p-2">
//                 <span className="text-base label-text  text-gray-600">Password</span>
//             </label>
//             <input 
//             type="text" 
//             placeholder="Enter **********" 
//             className="w-full input input-bordered  h-10"
//             >
//             </input>
//             </div>
//             <div>
//             <label className="label p-2">
//                 <span className="text-base label-text  text-gray-600">Confirm Password</span>
//             </label>
//             <input 
//             type="text" 
//             placeholder="Confirm password" 
//             className="w-full input input-bordered  h-10"
//             >
//             </input>
//             </div>
//             <GenderCheckbox />
//             <a href="#" className="text-sm  text-gray-600 hover:underline hover:text-green-600 mt-2 inline-block">Already have an Account?</a>
//             <div>
//                 <button className="btn btn-block btn-sm mt-2">SignUp</button>
//             </div>
         
//         </form>
//         </div>
          
//     </div>
//   )
// }

// export default Signup

