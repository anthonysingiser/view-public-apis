
const ListComponent = (props) => {
    const { options, label } = props;
    return (
      <>
        {label && <label htmlFor="search-select">{options.label}</label>}
        <Select
          options={options}
          onChange={props.onChange}
          id="search-select"
          maxMenuHeight={220}
        />
        <br/>
        <br/>
        {<FetchApp address={props.address}/>}
      </>
    );
  };
