import React, {useState} from 'react'
import Select from 'react-select'

import Data from '../brochure/Data';
import { Container } from 'react-bootstrap';
import options from './Options';

import chroma from 'chroma-js';



function Filter(props) {

    const [selectedOptions, setSelectedOptions] = useState([]);

    function handleChange(options) {
        setSelectedOptions(options);
        console.log(options, "child");

        props.callback(options);
        
    }

    const customStyles = {
        multiValue: (styles, { data }) => {
            const color = chroma(data.color);
            return {
              ...styles,
              backgroundColor: color.alpha(0.1).css(),
            };
          },
        multiValueLabel: (styles, { data }) => ({
            ...styles,
            color: data.color,
          }),
        multiValueRemove: (styles, { data }) => ({
            ...styles,
            color: data.color,
            ':hover': {
              backgroundColor: data.color,
              color: 'white',
            }
        }),
    }


    return (
        <Container fluid className="mb-4 p-0">
            <Select
             isMulti
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
            value={selectedOptions}
            onChange={handleChange}
            styles={customStyles}
            placeholder='เลือก บริษัท, แบบประกัน'
        />
        </Container>
    )
}

export default Filter
