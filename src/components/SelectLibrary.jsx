

import './SelectLibrary.css';

export default function SelectLibrary(handleSelectibrary) {

    return (
        <div className='select-library' >
            <button onClick={() => handleSelectibrary('react-draggable')}>
                react-draggable
            </button>
        </div>
    )
}