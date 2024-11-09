import s from './SearchBox.module.css'

const SearchBox = ({ value, onChange }) => {
    return (
    <div className={s.searchBox}>
    <label>
        <span>Find contacts by name</span>
        <input type="text" value={value} onChange={onChange} />
    </label>
    </div>
);
};

export default SearchBox