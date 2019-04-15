
// Element Class
class Elements {
    constructor(element) {
        this.element = element;
    }
}

// UI Class

class UI {
    static displayElementData() {

        const storedElements = [
            { element: 'Ravi' },
            { element: 'Mukesh' }
        ];

        const datas = storedElements;

        datas.forEach((data) => UI.addBookToList(data));
    }

    // To Add the Book Into The List
    static addBookToList(data) {
        const list = document.querySelector('#element_list');

        const addList = document.createElement('li');

        addList.innerHTML = `${data.element} <button id='#'>X</button>`;

        list.appendChild(addList);
    }

    // To Clear The Input Field
    static clearFields(){
        document.querySelector('#element').value = '';
    }

    // To Delete The Element From the List
    static deleteElementFromList(elementTobeDeleted) {
        elementTobeDeleted.parentElement.remove();

    }
}

//Store Class

// Event: Display
document.addEventListener('DOMContentLoaded', UI.displayElementData);



// Event: Add
document.getElementById('add').addEventListener('click', () => {
    // get the value
    const inputelement = document.querySelector('#element').value;

    //  initialize Elements Class
    const element = new Elements(inputelement);

    // add it to our UI
    UI.addBookToList(element);

    // Used To Clear The Feilds
    UI.clearFields();

    
})

// Event: Remove
document.querySelector('#element_list').addEventListener('click', (targetelement) => {
   // console.log(targetelement.target)

   UI.deleteElementFromList(targetelement.target);
})