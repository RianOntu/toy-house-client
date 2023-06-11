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
    
   
   
        const url = `https://toy-house-server-rianontu.vercel.app/toysbycategory?category=${category}`;
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
        fetch(`https://toy-house-server-rianontu.vercel.app/alltabtoys`)
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
                <b><h4>Select a category:</h4></b>
                <TabList>
                    {categories.map(category => (
                        <Tab key={category._id} onClick={() => handleSubCategories(category)}>
                            {category.categoryName}
                        </Tab>
                    ))}
                </TabList>
                </Tabs>
                <Tabs>
                
                <b><h4>Select a Sub-category:</h4></b>
                        <TabList>
                        {
                            subcategories.map(subcategory=><Tab onClick={()=>handleSubcategory(subcategory)}>{subcategory.subcategoryName}</Tab>)
                        }
                        </TabList>
                 
                
                </Tabs>

                <TabPanel>

                  <div className='toys mt-5 mb-5'>
                  {     subcategory===null?<p className='text-danger text-center'>Please select a sub-category</p>:
                        toys&&toys.map(toy=><SingleToy key={toy.id} toy={toy}></SingleToy>)
                    }
                  </div>
                </TabPanel>
                
                </Tabs>
              
            
        </div>
    );
};

export default ShopByCategory;
