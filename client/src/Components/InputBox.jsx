function InputBox(props){
    return(
        <input className='border-2 p-4 rounded-xl my-4' type={props.type} placeholder={props.placeholder}/>
    )
}
export default InputBox