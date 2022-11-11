const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneBtn')
const somethingBtn = document.getElementById('something')
const inspireBtn = document.getElementById('inspire')
const kindBtn = document.getElementById('kind')
const goalsContainer = document.querySelector('#goals-container')
const form = document.querySelector('form')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data
            alert(data)
        })
}

const getSomething = () => {
    axios.get("http://localhost:4000/api/something")
        .then(res => {
            const data = res.data
            alert(data)
        })
}

const getInspiration = () => {
    axios.get("http://localhost:4000/api/inspire")
        .then(res => {
            const data = res.data
            alert(data)
        })
}

const beKind = () => {
    axios.get("http://localhost:4000/api/kind")
        .then(res => {
            const data = res.data
            alert(data)
        })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
somethingBtn.addEventListener('click', getSomething)
inspireBtn.addEventListener('click', getInspiration)
kindBtn.addEventListener('click', beKind)



const baseURL = `http://localhost:4000/api/goals`

const goalsCallback = ({data: goals}) => displayGoals(goals)

const getAllGoals = () => axios.get(baseURL).then(goalsCallback)
const createGoal = body => axios.post(baseURL, body).then(goalsCallback)
const deleteGoal = id => axios.delete(`${baseURL}/${id}`).then(goalsCallback)
const updateGoal = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(goalsCallback)

function submitHandler(e) {
    e.preventDefault()

    let goals = document.querySelector('#goal')
    let reason = document.querySelector('#reason')
    let how = document.querySelector('#how')

    let bodyObj = {
        goal: goals.value,
        reason: reason.value,
        how: how.value
    }

        createGoal(bodyObj)

        goals.value = ''
        reason.value = ''
        how.value = ''
}

function createGoalCard(goal) {
    const goalCard = document.createElement('div')
    goalCard.classList.add('goal-card')

    goalCard.innerHTML = 
    `<h2 class="goal">${goal.goal}</h2>
    <p class="reason">${goal.reason}</p>
    <p class="how">${goal.how}</p>
    <button onclick="deleteGoal(${goal.id})">delete</button>
    `


    goalsContainer.appendChild(goalCard)
}

function displayGoals(arr) {
    goalsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createGoalCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllGoals()
