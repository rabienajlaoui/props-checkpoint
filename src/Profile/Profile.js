import React from 'react'
import PropTypes from 'prop-types';

const Profile = (props) => {
  return (
    <div style={{backgroundColor:'#befb8f',textAlign:'center',marginLeft:20,marginRight:80}}>
        <h1>Hi there !</h1>
        <p style={{fontWeight:'bold'}}>{props.fullname}</p>
        <p style={{backgroundColor:'orange',marginLeft:550,marginRight:550}}>{props.bio}</p> 
        <p style={{color:'brown', textDecoration:'underline'}}>{props.profession}</p>
        <p>{props.children}</p>
        <button onClick={props.handleName}> Click Me </button>
    </div>
  )
}



Profile.defaultProps={
    fullname:"Foulen Ben Foulen",
    bio:"here is my bio",
    profession:"here is my profession",
    children:"here is my img",
}

Profile.propTypes={
    fullname:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string,
    children:PropTypes.element,
    handleName:PropTypes.func 
    }

export default Profile