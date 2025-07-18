
export default function StatusTareas({ tareas, status, color, handleDrop, handleDragOver, handleDragStart }) {
    return (
        <>
            <div
                onDrop={(e) => handleDrop(e, status)}
                onDragOver={handleDragOver}
                style={{
                    width: '90%',
                    border: '1px solid #ccc',
                    minHeight: '350px',
                    backgroundColor: '#d3cece',
                    padding: '10px',
                    color: '#4f4c4c',
                    borderRadius: '5px',
                }}
            >
                <p
                    style={{
                        fontWeight: 'bold',
                        fontSize: '15px',
                        margin: '10px',
                        padding: '15px',
                        borderRadius: '5px',
                        color: '#fff',
                        textTransform: 'uppercase',
                        backgroundColor: color
                    }}
                >{status}</p>
                {tareas.filter((tarea) => tarea.estado === status).map((tarea) => (
                    <div
                        key={tarea.id}
                        draggable
                        onDragStart={(e) => handleDragStart(e, tarea.id)}
                        style={{
                            border: '1px solid #ccc',
                            margin: '10px',
                            padding: '10px',
                            borderRadius: '5px',
                            backgroundColor: 'white',
                        }}
                    >
                        <span style={{ fontWeight: 'bold' }}>{tarea.nombre}</span>
                        <p>Status: {tarea.estado}</p>
                    </div>
                ))}
            </div>

        </>
    )
}
