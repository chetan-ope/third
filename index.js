const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");
addBtn.addEventListener("click",
    function () {
         
        addNote();
           
    }
)

const addNote = () => {
    const note = document.createElement("div");
    note.classList.add("note");

    note.innerHTML = `
  
    <div class="tool">
        <i class="save fas fa-save"></i>
        <i class="trash fas fa-trash"></i>

    </div>

    <textarea class="textarea" name="textarea" id=""></textarea>

    
    `

    note.querySelector(".trash").addEventListener("click",
        function(){
            note.remove()
        }
    )

    note.querySelector(".save").addEventListener("click",
        function(){
            saveNote();
        }
    )

    main.appendChild(note);
}