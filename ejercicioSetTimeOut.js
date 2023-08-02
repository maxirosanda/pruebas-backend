console.time("contar")
function hacerTarea(num, cb) {
    console.log('haciendo tarea ' + num)
    console.timeLog("contar")
    setTimeout(cb,10000)
}

console.log('inicio de tareas');
hacerTarea(1, () => {
    hacerTarea(2, () => {
        hacerTarea(3, () => {
            hacerTarea(4, () => {
                console.log('fin de tareas')
            })
        })
    })
})
console.log('otras tareas ...')