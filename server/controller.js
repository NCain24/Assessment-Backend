const goals = require('./db.json')
let globalId = 4

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        // console.log(randomCompliment)
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ['If you wish to see the best in others, show the best of yourself.', 'Imagination rules the world.', 'In the end all things will be known.', 'It takes courage to admit fault.', 'Love lights up the world.']

        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let fortune = fortunes[randomIndex]
        // console.log(fortune)
        res.status(200).send(fortune)
    },

    getSomething: (req, res) => {
        const toDo = ['Take a walk', 'Take a nap', 'Read a book', 'Play a game', 'Call a friend', 'Watch a movie']

        let randomIndex = Math.floor(Math.random() * toDo.length)
        let whatToDo = toDo[randomIndex]
        //console.log(whatToDo)
        res.status(200).send(whatToDo)
    },

    getInspiration: (req, res) => {
        const quotes = ['Tomorrow is never promised', 'Nothing is impossible if you try', 'Time flies, and you are the pilot', 'No one writes your life story but you', 'You are never too old to dream']

        let randomIndex = Math.floor(Math.random() * quotes.length)
        let inspireMe = quotes[randomIndex]
        //console.log(inspireMe)
        res.status(200).send(inspireMe)
    },

    beKind: (req, res) => {
        const kindness = ['Say hi to someone', 'Help your neighbor with a chore', 'Give to someone in need', 'Tell someone you love how much they mean to you', 'Donate to charity']

        let randomIndex = Math.floor(Math.random() * kindness.length)
        let kind = kindness[randomIndex]
        //console.log(kind)
        res.status(200).send(kind)
    },




    getAllGoals: (req, res) => {
        res.status(200).send(goals)
    },

    deleteGoal: (req, res) => {
        let index = goals.findIndex((goal) => goal.id === +req.params.id)
        goals.splice(index, 1)
        res.status(200).send(goals)
    },

    createGoal: (req, res) => {
        let {goal, reason, how} = req.body

        let newGoal = {
            id: globalId,
            goal,
            reason,
            how
        }

        goals.push(newGoal)
        res.status(200).send(goals)
        globalId++
    },

    updateGoal: (req, res) => {
        let {id} = req.params
        let {type} = req.body
        let index = goals.findIndex((goal) => goal.id === +id)


    }

}