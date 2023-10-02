const subButton = document.getElementById('submit');
const inputVal = document.getElementById('input');
const people = document.getElementById('people')

subButton.addEventListener('click', () => {
    console.log(inputVal.value)
    axios
        .get(`http://localhost:4000/api/submit?input=${inputVal.value}`)
        .then(res => addToView(res.data))
});

function addToView(dataArr) {
    people.innerHTML = null;

    if (dataArr.length === 0) {
        const li = document.createElement('li');
        const t = document.createTextNode("Response came back with no results!");
        li.appendChild(t);
        
        people.appendChild(li)
    } else {
        dataArr.forEach(item => {
            const li = document.createElement('li');
            const t = document.createTextNode(item)
            li.appendChild(t);
    
            people.appendChild(li)
        })
    }
}