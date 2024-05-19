import App from '@/Layouts/App';
import React from 'react';

const NewInsciption = ({logo}) => {
    return (
        <div>
            <App logo={logo} />
            <span>FR / EN</span>
            <h1>Ajouter une Pré-Inscription </h1>
            <div className="form-container">
                <p>N.B : les champs marqués d'un astérisque * sont obligatoires</p>
                <div className="progress">
                    <span>1</span>
                    <span>2</span>
                </div>
            </div>
        </div>
    );
};

export default NewInsciption;