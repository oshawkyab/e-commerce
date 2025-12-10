// import components
import TopHeader from "./components/header/TopHeader";
import BottomHeader from "./components/header/BottomHeader";
import { Link } from "react-router-dom";


// import pages


const App = () => {
  return (
    <>

    {/* =======// responsive navbar //======== */}
    {/* <div className="w-full h-full absolute bg-gray-800/80 flex items-center justify-center">

        <div className={`bg-white w-1/3 h-1/2 rounded navbarResponsive`}>

            <ul className="flex items-center h-full gap-6 flex-col justify-center">
              <Link className="text-xl font-semibold opacity-75 hover:opacity-100 transition hover:scale-110">Home</Link>
              <Link className="text-xl font-semibold opacity-75 hover:opacity-100 transition hover:scale-110">Home</Link>
              <Link className="text-xl font-semibold opacity-75 hover:opacity-100 transition hover:scale-110">Blog</Link>
              <Link className="text-xl font-semibold opacity-75 hover:opacity-100 transition hover:scale-110">Accessories</Link>
              <Link className="text-xl font-semibold opacity-75 hover:opacity-100 transition hover:scale-110">Contact</Link>
            </ul>

        </div>

    </div> */}
    {/* =======// responsive navbar //======== */}



      <header>
        <TopHeader />
        <BottomHeader />
      </header>

     
    </>
  );
};

export default App;
