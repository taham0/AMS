const {populateUsers} = require('./populateUsers')
const {populateCourses} = require('./populateCourses')
const {populateSections} = require('./populateSections')
const {populateTakes} = require('./populateTakes')
const {populateTeaches} = require('./populateTeaches')

const {createSection} = require('../Create/createSection')
const {createTakes} = require('../Create/createTakes')
const {createTeaches} = require('../Create/createTeaches')
const {createResource} = require('../Create/createResource')
const {createAssignment} = require('../Create/createAssignment')
const {createQuiz} = require('../Create/createQuiz')
const {createAssignmentResponse} = require('../Create/createAssignmentResponse')
const {createQuizResponse} = require('../Create/createQuizResponse')
const {createGradebook} = require('../Create/createGradebook')

async function populate(){
    console.log('\nPopulating database...\n')

    const mongoose = require('mongoose')
    const db = await mongoose.connection.db
    
    await populateUsers();
    await populateCourses();
    await populateSections();
    await populateTakes();
    await populateTeaches();
    
    // console.log(`Making 'sections' entries...`)
    // await createSection(1, 'CS-100', 'Fall', 2021)

    // console.log(`Making 'takes' entries...`)
    // await createTakes(24100002, 1, 'CS-100', 'Fall', 2021)
    // console.log(`Making 'teaches' entries...`)
    // await createTeaches(23100088, 1, 'CS-100', 'Fall', 2021)

    // console.log(`Making 'resources' entries`)
    // const file = await fs.readFile('./dummy.pdf')
    // await createResource('dummy.pdf', 1, 'CS-100', 'Fall', 2021, file)
    // await createResource('dummy.pdf', 2, 'CS-200', 'Fall', 2021, file)
}

module.exports = {populate}

// git commit -m "db-entries" -m "users+courses+sections+takes+teaches" 