import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import useConversation from "../../Zustandstore/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState();
  const{setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();   

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length < 3){
      return toast.error("Search term should be more then 3 characters long");
    }
    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));
    if(conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      return toast.error(`No such user found`);
    }

  }

  return (
    <div>
      <form className="flex items-center gap-2" onSubmit={handleSubmit}> 
        <input type="text" placeholder="Search...." 
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) =>setSearch(e.target.value)}
        /> 
        <button type="submit" className="btn btn-circle bg-green-500 text-white">
            <FaSearch className='w-6 h-6 outline-none border-collapse'/>
        </button>
     </form>
    </div>
  )
}

export default SearchInput

// import { FaSearch } from "react-icons/fa";

// const SearchInput = () => {
//   return (
//     <div>
//       <form className="flex items-center gap-2">
//         <input type="text" placeholder="Search...." className="input input-bordered rounded-full"/> 
//         <button type="submit" className="btn btn-circle bg-green-500 text-white">
//             <FaSearch className='w-6 h-6 outline-none border-collapse'/>
//         </button>
//      </form>
//     </div>
//   )
// }

// export default SearchInput
