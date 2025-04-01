import ButtonFilterTab from "../../UI/buttons/ButtonFilterTab/ButtonFilterTab";

import "./TabSidebar.scss";

const TabSidebar = ({ children, entries, onTabChange, selectedTab }) => {
  return (
    <div className="tab-sidebar">
      <h2 className="tab-sidebar__heading">{children}</h2>

      <menu className="tab-sidebar__tab-menu">
        {entries.map((element) => {
          return (
            <ButtonFilterTab
              className="tab-sidebar__button"
              onClick={() => onTabChange(element)}
              isActive={selectedTab.title === element.title}
              key={element.title}
            >
              {element.title}
            </ButtonFilterTab>
          );
        })}
      </menu>
    </div>
  );
};

export default TabSidebar;
