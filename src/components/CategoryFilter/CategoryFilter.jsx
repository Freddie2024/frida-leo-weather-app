import "./CategoryFilter.css" 
export default function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
    return (
        <div className="category-filter">
            <label htmlFor="category-select">Filter by Category:</label>
            <select 
                id="category-select" 
                value={selectedCategory} 
                onChange={(e) => onCategoryChange(e.target.value)}
            >
                <option value="">All</option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                ))}
            </select>
        </div>
    );
};


