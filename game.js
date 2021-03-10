// Create a function that generates the times for you
function getSadInterval() {
    return Date.now() + 1000;
}

function getGoneInterval () {
    // this function is written to get random times which the mole will be gone for
    return Date.now() + Math.floor(Math.random() * 18000) + 2000;
}

function getHungryInterval() {
    return Date.now() + Math.floor(Math.random() * 3000) + 2000;

}

// Create an object that represents each one of the moles
const moles = [
    {
        status: "sad",  //they are starting out like they just missed eating a worm
        next: getSadInterval(), //this represents the next time their status is going to change
        king: false, //if there is going to be a king
        node: document.querySelector('#hole-0') //se;ecting the node
    }, 
    {

    status: "sad", 
    next: getSadInterval(), 
    king: false, 
    node: document.querySelector('#hole-1')
    }, 
    {
        status: "sad", 
        next: getSadInterval(), 
        king: false, 
        node: document.querySelector('#hole-2')
    }, 
    {
        status: "sad", 
        next: getSadInterval(), 
        king: false, 
        node: document.querySelector('#hole-3')
        }, 
        {
        
        status: "sad", 
        next: getSadInterval(), 
        king: false, 
        node: document.querySelector('#hole-4')
        }, 
        {
        status: "sad", 
        next: getSadInterval(), 
        king: false, 
        node: document.querySelector('#hole-5')
        }, 
        {
        status: "sad", 
        next: getSadInterval(), 
        king: false, 
        node: document.querySelector('#hole-6')
        }, 
        {
                    
        status: "sad", 
        next: getSadInterval(), 
        king: false, 
        node: document.querySelector('#hole-7')
        }, 
        {
        status: "sad", 
        next: getSadInterval(), 
        king: false, 
        node: document.querySelector('#hole-8')
        }, 
        {
        status: "sad", 
        next: getSadInterval(), 
        king: false, 
        node: document.querySelector('#hole-9')
        }, 
];

function getNextStatus(mole) {
    switch (mole.status) {
        case "sad":
            mole.next = getSadInterval();
            mole.status = "leaving";
            mole.node.children[0].src = './mole-leaving.png';
            break;
        case "leaving":
            mole.next = getGoneInterval();
            mole.status = 'gone';
            mole.node.children[0].classList.add("gone");
            break;
        case "gone":
            mole.status = 'hungry';
            mole.next = getHungryInterval();
            mole.node.children[0].classList.add("hungry");
            mole.node.children[0].classList.remove("gone");
            mole.node.children[0].src = './mole-hungry.png';
            break;
        case "hungry":
            mole.status = 'sad';
            mole.next = getSadInterval();
            mole.node.children[0].classList.remove("hungry");
            mole.node.children[0].src = './mole-sad.png';
            break;
    }
}

function feed(event) {
    if (event.target.tagName  !== 'IMG' || !event.target.classList.contains("hungry")) {
        return;
    }
    console.log(event.target);
}

// we write a function for the time to make it move at intervals
let runAgainAt = Date.now() + 100;
function nextFrame() {
    const now = Date.now();

    if (runAgainAt <= now) {
        for(let i = 0; i < moles.length; i++) {
            if (moles[i].next <= now) {
                getNextStatus(moles[i]);
            }
        }
        runAgainAt = now + 100;
    }
    requestAnimationFrame(nextFrame);
}

document.querySelector('.bg').addEventListener('click', feed);

nextFrame();
