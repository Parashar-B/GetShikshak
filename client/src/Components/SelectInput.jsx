function SelectInput(props){
    console.log(props.optionArray);
    let options=props.optionArray.map((value)=>{
        return <option className='border-r-[1px] border-black' value={`${value}`}>{value}</option>
    });
    return(
            <select className="p-2 rounded-l border-r-[1px] border-black cursor-pointer bg-white">{options}</select>
    )
}

export default SelectInput;