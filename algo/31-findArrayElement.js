

const findArrayElement = (name) =>{
    let t0 = performance.now();
    const names = ["Alexander", "Benjamin", "Charlotte", "Theodore", "Samantha", "Nathaniel", "Isabella", "Sebastian", "Penelope", "umar", "Maximilian"]
    const large = new Array(10000).fill('Test')
    for (let index = 0; index < large.length; index++) {
        const element = large[index];
        if(element ==name){
            console.log('Found Umar!');
        }        
    }
    let t1 = performance.now();
    console.log("Call to find name took " + (t1 -t0) + 'milliseconds')
}

module.exports = findArrayElement;
