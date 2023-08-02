import { FormulaType } from "../../api/types";

const Formula = ({ formula }: { formula: FormulaType }) => {
  const { title, description, recipe } = formula;

  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>{recipe}</div>
    </div>
  )
}

export default Formula;
