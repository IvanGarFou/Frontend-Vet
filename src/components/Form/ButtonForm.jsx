import { Link } from "react-router-dom";

function ButtonForm({ children, disabled, to, style, onClick, active, type }) {
  const baseAction =
    "px-4 py-2 font-semibold hover:ring-offset-2 hover:ring-2  transition rounded-full mt-2 ";

  const styles = {
    selectForm: `flex-1 text-[#4b4b4b] rounded-lg py-1 sm:px-8 sm:mr-2 leading-tight m-1
      ${active ? "bg-[#a8c3a0]" : "bg-white"}`,
    actionGreen:
      baseAction + "bg-[#A8C3A0] hover:ring-[#A8C3A0] text-[#4b4b4b]",
    actionOrange:
      baseAction + "bg-[#D88C66] hover:ring-[#D88C66] text-[#FAF8F3]",
  };

  if (to)
    return (
      <Link to={to} className={styles[style]}>
        {children}
      </Link>
    );

  if (onClick) {
    return (
      <button
        disabled={disabled}
        className={styles[style]}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[style]}>
      {children}
    </button>
  );
}

export default ButtonForm;
