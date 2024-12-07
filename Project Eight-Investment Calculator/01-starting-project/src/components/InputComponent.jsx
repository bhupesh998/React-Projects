import React, { useState } from 'react'

const InputComponent = ({ inputValue, handleChange }) => {


    

    return (
        <section id='user-input'>
            <div className='input-group'>
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required name="initialInvestment" onChange={(e) => handleChange(e.target.value, 'initialInvestment')} value={inputValue.initialInvestment} />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required name="annualInvestment" onChange={(e) => handleChange(e.target.value, 'annualInvestment')} value={inputValue.annualInvestment} />
                </p>
            </div>
            <div className='input-group'>

                <p>
                    <label>Expected Return</label>
                    <input type="number" required name="expectedReturn" onChange={(e) => handleChange(e.target.value, 'expectedReturn')} value={inputValue.expectedReturn} />
                </p>
                <p>
                    <label>Duration (In Years) </label>
                    <input type="number" required name="duration" onChange={(e) => handleChange(e.target.value, 'duration')} value={inputValue.duration} />
                </p>
            </div>

        </section>
    )
}

export default InputComponent
