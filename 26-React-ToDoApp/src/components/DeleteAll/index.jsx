import React from 'react'

const DeleteAll = ({setTodos}) => {
    const deleteAll = () => {
        setTodos([]);
    }
  return (
    <button onClick={() => deleteAll()}> Delete All</button>
)
}

export default DeleteAll