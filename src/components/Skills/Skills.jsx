import { IconsSkills } from "./Skills.styled";
import IconHtml from "./images/html5.svg";
import IconCss from "./images/css3.svg";
import IconSass from "./images/sass.svg";
import IconJavascript from "./images/javascript.svg";
import IconReact from "./images/react.svg";
import IconNode from "./images/nodejs.svg";

export const Skills = () => {
  return (
    <IconsSkills>
      <li>
        <img src={IconHtml} alt="html" />
      </li>
      <li>
        <img src={IconCss} alt="css" />
      </li>
      <li>
        <img src={IconSass} alt="sass" />
      </li>
      <li>
        <img src={IconJavascript} alt="javascript" />
      </li>
      <li>
        <img src={IconReact} alt="react" />
      </li>
      <li>
        <img src={IconNode} alt="nodejs" />
      </li>
    </IconsSkills>
  );
};
