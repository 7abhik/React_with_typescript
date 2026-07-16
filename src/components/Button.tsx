interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

function Button({ children, onClick, color = "primary" }: Props) {
  return (
    <button type="button" onClick={onClick} className={"btn btn-" + color}>
      {children}
    </button>
  );
}

export default Button;
