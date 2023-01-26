import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    const filterHui = event.target.value;
    props.onChangeFilter(filterHui);
  };
  return (
    <>
      <div className="expenses-filter">
        <div className="expenses-filter__control">
          <label htmlFor="">Filter by year</label>
          <select
            name=""
            value={props.selected}
            onChange={dropdownChangeHandler}
            id=""
          >
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default ExpensesFilter;
