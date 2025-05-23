import { useLocation } from "react-router-dom";

import "./PathUrl.scss";

const PathUrl = () => {
  const location = useLocation();
  const locationPath = location.pathname;

  // Split by "/", filter out empty strings
  const locationParts = locationPath.split("/").filter(Boolean);

  // Capitalize each word (make the first letter uppercase)
  const locationCapitalized = locationParts.map((word) => {
    const wordToString = String(word);
    return wordToString.charAt(0).toUpperCase() + word.slice(1);
  });

  const [firstWord, secondWord, thirdWord] = locationCapitalized;

  return (
    <p className="banner-categories__path">
      <span>{firstWord}</span>
      {secondWord && (
        <>
          <span>/</span>
          <span>{secondWord}</span>
        </>
      )}

      {thirdWord && (
        <>
          <span>/</span>
          <span>{thirdWord}</span>
        </>
      )}
    </p>
  );
};

export default PathUrl;
