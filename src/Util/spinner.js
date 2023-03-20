import classes from './spinner.module.css';

function Spinner() {
  return (
    <div className={classes.spinner}>
      <div className={classes.lds_roller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Spinner;
