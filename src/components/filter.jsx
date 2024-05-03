const Filter = ({ filter, setFilter, setSorte }) => {
  return (
    <div>
      <h2>Filtrar: </h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incomplete">Imcompletas</option>
          </select>
        </div>
        <div>
          <p>Ordem Alfabética:</p>
          <button onClick={() => setSorte("Asc")}>Asc</button>
          <button onClick={() => setSorte("Desc")}>Desc</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
