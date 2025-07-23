import { useState } from "react";

function Practice(){

    const originalItems = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

    const [items, setItems] = useState( originalItems.map(item => ({ item , isVisible : true})) );

    const[search, setSearch] = useState('');

    const toggleItem = (index) => {
        setItems(prev => prev.map((item, i) => 
            i === index ? { ...item, isVisible: !item.isVisible } : item
        ));
    }

    const filteredItems = items.filter(fruits => fruits.item.toLowerCase().includes(search.toLowerCase()));
    
    const visibleCount = filteredItems.filter(item => item.isVisible).length;

    return(
        <div className="p-4">
            <input 
                type="text"
                placeholder="Search Fruit..." 
                className="px-6 py-2 rounded-xl bg-gray-200 border border-gray-500 mb-4"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <p className="mb-4"> Showing {visibleCount} of {filteredItems.length} items </p>
       
            <div>
                {filteredItems.map((fruit, index) => {
                    
                    const originalIndex = items.findIndex(item => item.item === fruit.item);
                    return (
                        <div key={fruit.item} className="mb-2">
                            <input 
                                type="checkbox"
                                checked={fruit.isVisible}
                                onChange={() => toggleItem(originalIndex)}
                                className="mr-2"
                            />
                            <span 
                            className={fruit.isVisible ? "line-through": ""   }
                            > {fruit.item}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Practice;