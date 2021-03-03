// Create a function that generates the times for you
function getSadInterval() {
    return Date.now() + 1000;
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
    //paste for the other different holes
    status: "sad", 
    next: getSadInterval(), 
    king: false, 
    node: document.querySelector('#hole-1')
    }, 
    {
        status: "sad", 
        next: getSadInterval(), 
        king: false, 
        node: document.querySelector('#hole-1')
        }, 
        {
            //paste for the other different holes
            status: "sad", 
            next: getSadInterval(), 
            king: false, 
            node: document.querySelector('#hole-1')
            }, 
            {
                //paste for the other different holes
                status: "sad", 
                next: getSadInterval(), 
                king: false, 
                node: document.querySelector('#hole-1')
                }, 
                {
                    //paste for the other different holes
                    status: "sad", 
                    next: getSadInterval(), 
                    king: false, 
                    node: document.querySelector('#hole-1')
                    }, 
                    {
                        //paste for the other different holes
                        status: "sad", 
                        next: getSadInterval(), 
                        king: false, 
                        node: document.querySelector('#hole-1')
                        }, 
                        {
                            //paste for the other different holes
                            status: "sad", 
                            next: getSadInterval(), 
                            king: false, 
                            node: document.querySelector('#hole-1')
                            }, 
                            {
                                //paste for the other different holes
                                status: "sad", 
                                next: getSadInterval(), 
                                king: false, 
                                node: document.querySelector('#hole-1')
                                }, 
                                {
                                    //paste for the other different holes
                                    status: "sad", 
                                    next: getSadInterval(), 
                                    king: false, 
                                    node: document.querySelector('#hole-1')
                                    }, 
]
