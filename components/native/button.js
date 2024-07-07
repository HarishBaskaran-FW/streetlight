import { fontSize, typeColor } from "../configuration/config";
import Logo from "./logo";

const styles = `
px-3 py-2 mr-1 rounded
ease-linear transition-all duration-150 flex gap-2 justify-between align-center 
`;

const Button = (props) => {
  let size = fontSize(props.size);
  let type = typeColor(props.type);

  return (
    <div className="group">
      <button
        type="button"
        className={`${styles} ${size} ${type} ${props.className} ${props.label ? "" : "rounded-full"}`}
        onClick={props.onClick}
      >
        {props.icon && (
          <Logo
            icon={props.icon}
            className={`${props.label ? "mr-2 " : ""} ${type == "primary_inverse" ? "text-sky-400 " : ""}`}
          />
        )}
        {props.label && props.label}
      </button>
    </div>
  );
};

export default Button;
/* 
    props : 
      size
      type
      className
      label
      onClick
      icon
    */
