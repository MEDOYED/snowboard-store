import "./ModalSearchBar.scss";

const ModalSearchBar = ({ className }) => {
  return (
    <>
      <input className={`modal-search-bar  ${className}`} type="text" />
    </>
  );
};

export default ModalSearchBar;
