function renderExerciseplans() {
    $.ajax({
        url: "/create",
        method: "POST",
    })
    .then (dbData => {
        console.log(dbData)
        dbData.forEach(exercise => {
            const newPlan = $("<li>",{
                text: `Name:${exercise.name}\nReps: ${exercise.reps}\nDuration: ${exercise.duration}`,
            })
            const deleteBtn = $("<button>", {
                text: 'Delete',
                class: 'delete-btn',
                'data-id': exercise._id
            }
        });
    }) Document.findElementbyId(`#${exercise.dayofWeek}-card`).append(newPlan,deleteBtn)
}