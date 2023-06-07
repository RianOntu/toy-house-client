import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/alltabtoys`)
        .then(res=>res.json())
        .then(data=>setCategories(data[0].carCategories))
    },[])

    return (
        <div className='container mt-5 mb-5'>
         <h1 className='text-center'>Shop By Category</h1>

         <Tabs>
    <TabList>
        {
            categories.map(category=><Tab>{category.categoryName}</Tab>)
        }
    
    
     
  
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
   
  </Tabs>
        </div>
    );
};

export default ShopByCategory;