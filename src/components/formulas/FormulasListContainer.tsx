import Formula from "./Formula";
import { useFormulas } from "api/queries";
import styles from "./formulas.module.scss";

const FormulasListContainer = () => {
  const { data, isLoading, isFetching, isError } = useFormulas()

  if (isLoading || isFetching) return <div>Loading...</div>
  if (isError) return <div>Error...</div>

  const formulas = data.data;

  return (
    <div className={styles.formulasList}>
      {formulas.map(formula => (
        <Formula formula={formula} key={formula.id}/>
      ))}
    </div>
  )
}

export default FormulasListContainer;