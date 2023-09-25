import { NavLink } from "react-router-dom";
// import Banner from "./Banner/Banner";

const Navbar = () => {
  return (
    <div>
      <div>
        <nav className="flex justify-between items-center py-6  px-5 text-lg font-bold bg-">
          <div className="w-24">
            <img src="/src/assets/Logo.png" alt="" />
          </div>
          <ul className="flex gap-5">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] underline "
                    : ""
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] underline"
                    : ""
                }
              >
                Donation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] underline"
                    : ""
                }
              >
                Statistics
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* <Banner></Banner> */}
      </div>
    </div>
  );
};

export default Navbar;
