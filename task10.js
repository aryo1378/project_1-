const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (plan) {
        const {languages} = plan.skills;
        return `Мне ${plan.age} и я владею языками: ${languages.join(' ').toUpperCase()}`;
    }
};


function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    const {programmingLangs} = plan.skills;
    const result = [];
    for (let key in programmingLangs) {
        result.push(`Язык ${key} изучен на ${programmingLangs[key]}`);
    }
    return result.join('\n') + '\n';
}