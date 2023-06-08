import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingleToy from '../SingleToy/SingleToy';
import './ShpByCategory.css';

const ShopByCategory = () => {
    const [categories, setCategories] = useState([]);
    const [category,setCategory]=useState("Sports Cars");
    const [subcategory,setSubcategory]=useState("Formula 1");
    const [temporarySubcategories, setTemporarySubcategories] = useState([]);
    const [temporarytoys,setTemporarytoys]=useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const [toys,setToys]=useState([]);
    
   
   
        const url = `http://localhost:5000/toysbycategory?category=${category}`;
        useEffect(() => {
            fetch(url)
                .then(res => res.json())
                .then(data => setTemporarytoys(data[0].subcategories))
        }, [url]);
    
        useEffect(() => {
            const cartoys = temporarytoys.find(x => x.subcategoryName === subcategory);
            setToys(cartoys?.carToys);
        }, [temporarytoys, subcategory]);
  
    useEffect(() => {
        fetch(`http://localhost:5000/alltabtoys`)
            .then(res => res.json())
            .then(data => {
                setCategories(data);
              
              
            });
    }, []);
    
    useEffect(() => {
        setSubcategories(temporarySubcategories);
    }, [temporarySubcategories]);
    useEffect(() => {
        if (categories.length > 0) {
            setTemporarySubcategories(categories[0].subcategories);
        }
    }, [categories]);
   
    const handleSubCategories = category => {
        setSubcategories(category.subcategories);
        setCategory(category.categoryName)
        setSubcategory(null);
       
    }
    const handleSubcategory=subcategory=>{

        setSubcategory(subcategory.subcategoryName)
       
    }
    
  console.log(category,subcategory);
  console.log(toys);

    return (
        <div className='container mt-5 mb-5'>
            <h1 className='text-center'>Shop By Category</h1>
<Tabs>
            <Tabs>
                <TabList>
                    {categories.map(category => (
                        <Tab key={category._id} onClick={() => handleSubCategories(category)}>
                            {category.categoryName}
                        </Tab>
                    ))}
                </TabList>
                </Tabs>
                <Tabs>
                
                   
                        <TabList>
                        {
                            subcategories.map(subcategory=><Tab onClick={()=>handleSubcategory(subcategory)}>{subcategory.subcategoryName}</Tab>)
                        }
                        </TabList>
                 
                
                </Tabs>

                <TabPanel>
                  <div className='toys mt-5 mb-5'>
                  {
                        toys&&toys.map(toy=><SingleToy key={toy.id} toy={toy}></SingleToy>)
                    }
                  </div>
                </TabPanel>
                
                </Tabs>
              
            
        </div>
    );
};

export default ShopByCategory;
