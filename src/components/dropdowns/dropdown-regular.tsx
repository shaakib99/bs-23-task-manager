import { useDispatch } from "react-redux";
import { localStorageKeys } from "../../common/mock/storage-keys.mock";
import { useUser } from "../../hooks/useUser.hook";
import { RESET_REDUX } from "../../redux/action-type";

const DropDownRegular = (props: any) => {
  const { user } = useUser({});
  const dispatch = useDispatch();
  
  const onLogout = () => {
    localStorage.removeItem(localStorageKeys.USER);
    dispatch({
      type: RESET_REDUX,
    });
    window.location.reload();
  };
  return (
    <div className="">
      <div className="dropdown inline-block relative">
        <button className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
          <span className="mr-1">{user?.name || "Guest"}</span>
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
          </svg>
        </button>
        <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
          <li className="">
            <a
              className="rounded bg-slate-50 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              onClick={onLogout}
            >
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDownRegular;
