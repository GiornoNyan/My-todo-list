const radio_btn = document.querySelectorAll(".radio-btn");
const mode = document.querySelector('.heading');
const img = document.querySelector('.img-fluid');
const wrap = document.querySelector('.container-fluid');
const main_body = document.querySelectorAll(".main-body");
const inputVal = document.querySelector('input[type="text"]');
const todo_list = document.querySelector('.todo-list');
const list_indicator = document.querySelector('.list-indicator');



let list;
let check_list = [];
let uncheck_list= [];






//Js for changing night mode and Day mode
img.addEventListener('click', () => {
    if(img.classList.contains('moon')) {
        img.src = "/images/icon-sun.svg";
        img.classList.remove('moon');
        img.classList.add('sun');
        wrap.classList.add('dark');
        for(const box of main_body) {
            box.classList.add('dark-todo');
        }
        $('input[type="checkbox"]').addClass("opa");
        $('.footer').addClass('footer-col');
        $('header').addClass('sun-desktop sun-mobile');
        
        $('header').removeClass('moon-desktop moon-mobile');
        $('.mobile-status-container').addClass('dark-todo');
    } else {
        img.src = "/images/icon-moon.svg";
        img.classList.remove('sun');
        img.classList.add('moon');
        wrap.classList.remove('dark');
        
        for(const box of main_body) {
            box.classList.remove('dark-todo');
        }
        $('input[type="checkbox"]').removeClass("opa");
        $('.footer').removeClass('footer-col');
        $('header').addClass('moon-desktop moon-mobile');
        $('header').removeClass('sun-desktop sun-mobile');
        $('.mobile-status-container').removeClass('dark-todo');


    }
});

todo_list.innerHTML = "";
list_indicator.innerHTML = "0 item";




inputVal.addEventListener('keyup', (event) => {
    if(event.keyCode === 13 & inputVal.length !== 0 ) {
        
        let data = inputVal.value.trim();
        creator(data);
        inputVal.value = '';
        deletor();
        checkListener();
        
        
        
    }
});


function deletor() {
        const delete_img = document.querySelectorAll("#delete-img");
        let check = document.querySelectorAll('.list-container');
        
        let check_box = document.querySelectorAll('.list-checkbox')
        let items = check_box.length;
        for(let box of check_box) {
            if(box.checked) {
                items--;
            }
            else {
                items++;
            }
        }
        for(let i = 0; i < delete_img.length; i++) {
            items = check.length;
            // list_indicator.innerHTML = `${i + 1} items left`;
            delete_img[i].addEventListener('click', function() {
                this.parentNode.parentNode.remove();
                
                items--;
                list_indicator.innerHTML = `${items} items left`
                console.log(items);
            });       
            
        }
        
}

function checkListener() {
        let check_boxes = document.querySelectorAll('.list-checkbox');
        let items = check_boxes.length;
        list_indicator.innerHTML = `${items} items left`;
        
        for(let box of check_boxes) {
            box.addEventListener('click',() => {
                if(box.checked) {
                    items--;
                    list_indicator.innerHTML = `${items} left items`

                } else {
                    items++;
                    list_indicator.innerHTML = `${items} left items`
                }
            })
        }
                 
}




function creator(data) {
    const comt = document.createElement('div');
    comt.classList.add('list-container');
    comt.innerHTML = `
        <div class="list-box d-flex align-items-center justify-content-between ">
            <div class="radio-text px-3 d-flex align-items-center">
                <input class="form-check-input list-checkbox" type="checkbox" value="true" id="flexCheckIndeterminate">
                <p class="pt-3 px-3">${data}</p>
            </div>
            <img src="/images/icon-cross.svg" alt="" class="px-2" id="delete-img">
        </div>
    `
    todo_list.appendChild(comt);
}

function clearAll() {
    let container = document.querySelectorAll('.list-container');
    container.forEach(e => e.remove());
    list_indicator.innerHTML = `0 items`;
}


function showActive() {

    $('.first .active').removeClass('active');
    $('.first .act').addClass('active'); 
    
    if(uncheck_list.length === 0) {
    
        let list_container = document.querySelectorAll('.list-checkbox');
        list = Array.prototype.slice.call(list_container);
        console.log(list_container);
        console.log(list);
        for(let box of list) {
        
            if(box.checked) {
                check_list.push(box);
                console.log(check_list);
            } else {
                uncheck_list.push(box);
                console.log(uncheck_list);
            }
        } 
         
        todo_list.innerHTML = "";
        for(let i = 0; i < uncheck_list.length;i++) {
            
            const comt = document.createElement('div');
            comt.classList.add('list-container');
            comt.innerHTML = `
                <div class="list-box d-flex align-items-center justify-content-between ">
                    <div class="radio-text px-3 d-flex align-items-center">
                        <input class="form-check-input list-checkbox" type="checkbox" value="true" id="flexCheckIndeterminate">
                        <p class="pt-3 px-3">${uncheck_list[i].nextElementSibling.textContent}</p>
                    </div>
                    <img src="/images/icon-cross.svg" alt="" class="px-2" id="delete-img">
                </div>
            `
            todo_list.appendChild(comt);
            list_indicator.innerHTML = `${uncheck_list.length} items left`
        } 
    
    } else {
        todo_list.innerHTML = "";
        for(let i = 0; i < uncheck_list.length;i++) {
            
            const comt = document.createElement('div');
            comt.classList.add('list-container');
            comt.innerHTML = `
                <div class="list-box d-flex align-items-center justify-content-between ">
                    <div class="radio-text px-3 d-flex align-items-center">
                        <input class="form-check-input list-checkbox" type="checkbox" value="true" id="flexCheckIndeterminate">
                        <p class="pt-3 px-3">${uncheck_list[i].nextElementSibling.textContent}</p>
                    </div>
                    <img src="/images/icon-cross.svg" alt="" class="px-2" id="delete-img">
                </div>
            `
            todo_list.appendChild(comt);
            list_indicator.innerHTML = `${uncheck_list.length} items left`
        } 
    }
    
}
function showComplete() {
    $('.first .active').removeClass('active');
    $('.first .com').addClass('active');
    
    if(check_list.length === 0) {
        let check_boxes = document.querySelectorAll('.list-checkbox');
        list = Array.prototype.slice.call(check_boxes);
        
        for(let box of list) {
    
            if(box.checked) {
                check_list.push(box);
                console.log(check_list);
            } else {
                uncheck_list.push(box);
                console.log(uncheck_list);
            }
        } 
        todo_list.innerHTML = "";
        for(let i = 0; i < check_list.length;i++) {
            
            const comt = document.createElement('div');
            comt.classList.add('list-container');
            comt.innerHTML = `
                <div class="list-box d-flex align-items-center justify-content-between ">
                    <div class="radio-text px-3 d-flex align-items-center">
                        <input class="form-check-input list-checkbox" type="checkbox" value="true" id="flexCheckIndeterminate">
                        <p class="pt-3 px-3">${check_list[i].nextElementSibling.textContent}</p>
                    </div>
                    <img src="/images/icon-cross.svg" alt="" class="px-2" id="delete-img">
                </div>
            `
            todo_list.appendChild(comt);
            list_indicator.innerHTML = `${check_list.length} items left`
        } 
    } else {
        todo_list.innerHTML = "";
        for(let i = 0; i < check_list.length;i++) {
            
            const comt = document.createElement('div');
            comt.classList.add('list-container');
            comt.innerHTML = `
                <div class="list-box d-flex align-items-center justify-content-between ">
                    <div class="radio-text px-3 d-flex align-items-center">
                        <input class="form-check-input list-checkbox" type="checkbox" value="true" id="flexCheckIndeterminate">
                        <p class="pt-3 px-3">${check_list[i].nextElementSibling.textContent}</p>
                    </div>
                    <img src="/images/icon-cross.svg" alt="" class="px-2" id="delete-img">
                </div>
            `
            todo_list.appendChild(comt);
            list_indicator.innerHTML = `${check_list.length} items left`
        }
    }
    
    
}
function showAll() {
    $('.first .active').removeClass('active');
    $('.first .all').addClass('active');
    check_list = [];
    uncheck_list = [];
    todo_list.innerHTML = "";
        for(let i = 0; i < list.length;i++) {
            
            const comt = document.createElement('div');
            comt.classList.add('list-container');
            comt.innerHTML = `
                <div class="list-box d-flex align-items-center justify-content-between ">
                    <div class="radio-text px-3 d-flex align-items-center">
                        <input class="form-check-input list-checkbox" type="checkbox" value="true" id="flexCheckIndeterminate">
                        <p class="pt-3 px-3">${list[i].nextElementSibling.textContent}</p>
                    </div>
                    <img src="/images/icon-cross.svg" alt="" class="px-2" id="delete-img">
                </div>
            `
            todo_list.appendChild(comt);
            list_indicator.innerHTML = `${list.length} items left`
        }
}


