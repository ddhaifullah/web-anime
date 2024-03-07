import React from 'react'
import {
    InputSearchContainer,
    InputSearchComponents
} from '../../assets/styles/InputSearchStyles'

const InputSearch = () => {
    return (
        <InputSearchContainer>
            <InputSearchComponents type="text" placeholder="Search..." />
        </InputSearchContainer>
    )
}

export default InputSearch