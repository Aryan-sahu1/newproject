import React from 'react'
import './Title.css'
import PropTypes from 'prop-types';
const Title = (props) => {
  return (
    <>
      <div className="title">
        <p>
           {props.subTitle} 
        </p>
        <h2>{props.title}</h2>
      </div>
    </>
  )
}
Title.propTypes={subTitle:PropTypes.string,
    title:PropTypes.string
    

};
Title.defaultProps = {
    subTitle: 'Default Subtitle'
  };
export default Title
