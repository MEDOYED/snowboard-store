import ButtonTab from "../../UI/buttons/ButtonTab/ButtonTab";

import "./TabSidebar.scss";

const TabSidebar = ({ children, entries, onTabChange }) => {
  return (
    <div className="tab-sidebar">
      <h2 className="tab-sidebar__heading">{children}</h2>

      <menu className="tab-sidebar__tab-menu">
        {/* TODO: FIX "list should have unique key prop" */}
        {entries.map((element) => {
          return (
            <ButtonTab
              onClick={() => onTabChange(element)}
              key={element.titile}
            >
              {element.title}
            </ButtonTab>
          );
        })}
      </menu>
    </div>
  );
};

export default TabSidebar;
