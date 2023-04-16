//import { SearchIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { HiSearch } from "react-icons/hi";
import { HiOutlineBell } from "react-icons/hi2";
import {useState ,useEffect} from 'react';

function Header() {

  const [isScroll,setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll =()=>{
      if(window.scrollY > 0){
        setIsScroll(true)
      }else{
        setIsScroll(false);
      }
    }
    window.addEventListener("scroll",handleScroll);
    return () =>{
      window.removeEventListener("scroll",handleScroll);
    }
  }, []);

  return (
    <header  className={`${isScroll && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & popular</li>
          <li className="headerLink">My LIST</li>
        </ul>
      </div>
      <div className="flex item-center space-x-4 text-sm font-light" >
        <HiSearch className="hidden sm:inline h-6 w-6"></HiSearch>
        <p className="hiden lg:inline"></p>
        <HiOutlineBell className="h-6 w-6"></HiOutlineBell>
        <Link href="/acount">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
