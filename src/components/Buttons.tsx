
interface ButtonProps {
  text: string;
  value: number;
  isHovered: boolean;
  onClick: ()=> void;
  onMouseEnter: ()=> void;
  onMouseLeave: ()=> void;
}

const Button = ({ text, value, isHovered, onClick, onMouseEnter, onMouseLeave }: ButtonProps) => {
  return (
    <button
      className = "w-56 py-3"
      onClick = { onClick }
      onMouseEnter = { onMouseEnter }
      onMouseLeave = { onMouseLeave } >

      { isHovered ? value : text }
    </button>
  )
};

export default Button
