import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Gerardo" },
  { meta: "last name", metaInfo: "Garza" },
  { meta: "Age", metaInfo: "27 " },
  { meta: "Country", metaInfo: "United States of America" },
  { meta: "State", metaInfo: "Texas" },
  { meta: "phone", metaInfo: "(956) 207-5198" },
  { meta: "Email", metaInfo: "gjgarza31@gmail.com" },
  { meta: "langages", metaInfo: "English, Spanish" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
