import { IoClose } from "react-icons/io5";
import { TbSearch } from "react-icons/tb";

import "./ModalSearchBar.scss";

const ModalSearchBar = ({ className, onCrossClick }) => {
  return (
    <div className="modal-search-bar">
      <input className={`modal-search-bar__input  ${className}`} type="text" />

      <button className="modal-search-bar__close" onClick={onCrossClick}>
        <IoClose />
      </button>

      <button className="modal-search-bar__search">
        <TbSearch />
      </button>
    </div>
  );
};

export default ModalSearchBar;
