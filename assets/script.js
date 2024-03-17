const topics = ["HTML", "CSS", "Git", "JavaScript"];

const randomtopics = topics[Math.random() *topics.length];



function listtopics() {
    const topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
for(let x = 0; x < topics.length; x++ ){
    console.log(topics[x]);
}

}

function selecttopics() { 
    if (randomtopics === 'HTML') {
        console.log("lets study HTML!");
    
    } else if (randomtopics === 'CSS') {
        console.log("Let's study CSS");
    
    } else if (randomtopics === 'Git') {
        console.log("Let's study Git");
    
    }else if(randomtopics === 'JavaScript') {
        console.log ("Let's study JavaScript");
    
    } else {
        console.log('Please try again!')
    }

}

console.log('Here are the topics we learned throught Prework');
listtopics();
console.log('Which topic should we learn first?');
selecttopics();

