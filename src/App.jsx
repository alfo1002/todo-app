import { useState } from 'react'
import './App.css'
import StatusTareas from './components/StatusTareas'

function App() {
  const [tareas, setTareas] = useState([
    {
      id: 1,
      nombre: 'Aprender React',
      estado: 'todo', //indev - done
    },
    {
      id: 2,
      nombre: 'Aprender Angular',
      estado: 'todo',
    },
    {
      id: 3,
      nombre: 'Aprender Vue',
      estado: 'indev',
    },
  ])

  const [nuevaTarea, setNuevaTarea] = useState('')

  const registrarTarea = () => {
    if (nuevaTarea.trim() === '') {
      alert('Debes escribir el nombre de la tarea')
      return
    }
    setTareas([
      ...tareas,
      {
        id: tareas.length + 1,
        nombre: nuevaTarea,
        estado: 'todo',
      },
    ])
    setNuevaTarea('')
  }

  // Funciones de Drag and Drop
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('id', id)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (e, newStatus) => {
    const id = e.dataTransfer.getData('id')
    setTareas(tareas.map(tarea => tarea.id === Number(id) ? { ...tarea, estado: newStatus } : tarea))
  }


  return (
    <>
      <div>
        <h2>Nueva Tarea:</h2>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder='Escribe el nombre de la tarea'
          style={{ width: '30%', padding: '10px', borderRadius: '4px' }}
        />
        <button
          onClick={() => registrarTarea()}
          className='btn2'
          style={{
            marginLeft: '10px',
            padding: '5px',
          }}
        >Registrar Tarea</button>
      </div>
      <div>
        <h2>Estado Tareas:</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px',
            width: '100%',
          }}>
          <StatusTareas
            tareas={tareas}
            status='todo'
            color={'#b0b0b0'}
            handleDrop={handleDrop}
            handleDragOver={handleDragOver}
            handleDragStart={handleDragStart}
          />
          <StatusTareas
            tareas={tareas}
            status='indev'
            color={'#5653e4'}
            handleDrop={handleDrop}
            handleDragOver={handleDragOver}
            handleDragStart={handleDragStart}
          />
          <StatusTareas
            tareas={tareas}
            status='done'
            color={'#529e2c'}
            handleDrop={handleDrop}
            handleDragOver={handleDragOver}
            handleDragStart={handleDragStart}
          />
        </div>
      </div>
    </>
  )
}

export default App
