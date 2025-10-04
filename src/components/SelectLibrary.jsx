

import './SelectLibrary.css';

export default function SelectLibrary({handleSelectLibrary}) {

    return (
        <div className='select-library' >
            <button onClick={() => handleSelectLibrary('react-draggable')}>
                react-draggable
            </button>
            <button onClick={() => handleSelectLibrary('react-dnd')}>
                react-dnd
            </button>
        </div>
    )
}