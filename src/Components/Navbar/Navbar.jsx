import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <nav className="flex justify-between items-center py-6 shadow-md px-5 text-lg font-bold">
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
      </div>
    </div>
  );
};

export default Navbar;
