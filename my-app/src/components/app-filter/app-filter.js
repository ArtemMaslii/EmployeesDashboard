

import "./app-filter.css";

const AppFilter = ({filter, onFilterSelected}) => {
    const buttonsData = [
        {name: "all", label: "All employees"},
        {name: "rise", label: "For a Rise"},
        {name: "moreThan1000", label: "Salary more than 1000$"}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const clazz = filter === name ? "btn-light" : "btn-outline-light";
        return (
            <button
                className={`btn ${clazz}`}
                key={name}
                type="button"
                onClick={() => onFilterSelected(name)}>
                {label}
            </button>
        );
    });

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
};

export default AppFilter;