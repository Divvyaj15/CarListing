function Filter(props) {
    let yearOptions = [];
    for (let i = 0; i < props.years.length; i++) {
        yearOptions.push(<option key={props.years[i]} value={props.years[i]}>{props.years[i]}</option>);
    }

    let makeOptions = [];
    for (let i = 0; i < props.makes.length; i++) {
        makeOptions.push(<option key={props.makes[i]} value={props.makes[i]}>{props.makes[i]}</option>);
    }

    let modelOptions = [];
    for (let i = 0; i < props.models.length; i++) {
        modelOptions.push(<option key={props.models[i]} value={props.models[i]}>{props.models[i]}</option>);
    }

    let priceOptions = [];
    for (let i = 0; i < props.prices.length; i++) {
        priceOptions.push(<option key={props.prices[i]} value={props.prices[i]}>{props.prices[i]}</option>);
    }

    return (
        <div className="filter-bar">
            <select value={props.selectedYear} onChange={(e) => props.setSelectedYear(e.target.value)}>
                <option value="">All Years</option>
                {yearOptions}
            </select>

            <select value={props.selectedMake} onChange={(e) => props.setSelectedMake(e.target.value)}>
                <option value="">All Makes</option>
                {makeOptions}
            </select>

            <select value={props.selectedModel} onChange={(e) => props.setSelectedModel(e.target.value)}>
                <option value="">All Models</option>
                {modelOptions}
            </select>

            <select value={props.selectedPrice} onChange={(e) => props.setSelectedPrice(e.target.value)}>
                <option value="">All Prices</option>
                {priceOptions}
            </select>
        </div>
    );
}

export default Filter;