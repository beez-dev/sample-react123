import './App.css';
import React from 'react';

const Builder = (props: any)=>{
  const schema = props.schema;
  const builderStyle = props.builderStyle || "";
  
  const buildFromSchema = (mSchema: any) => {
    const component = Object.keys(mSchema).map((item)=>{
        const sch = mSchema[item];
        return sch[item]();
    });
    
    return component;
  } 
  
  return (
    <div className={`Builder ${builderStyle}`}>
        {buildFromSchema(schema)}
    </div>
  );
}

export default Builder;
