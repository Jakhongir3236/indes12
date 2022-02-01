let delete_user=document.querySelector('#delete')

const usersList = document.querySelector("#usersList")


function renderUsers(users){
    let allUsers = ''
    for (let user of users) {

        allUsers += `
        <tr>
                      <td class="align-middle">
                        <div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                          <input type="checkbox" class="custom-control-input" id="${user.userId}">
                          <label class="custom-control-label" for="${user.userId}"></label>
                        </div>
                      </td>
                      <td class="text-nowrap align-middle">${user.fullName}</td>
                      <td class="text-nowrap align-middle"><span>${user.date}</span></td>
                      <td class="text-center align-middle"><i class="fa fa-fw text-secondary cursor-pointer fa-toggle-on"></i></td>
                      <td class="text-center align-middle">
                        <div class="btn-group align-top">
                            <button class="btn btn-sm btn-outline-secondary badge" type="button" data-toggle="modal" data-target="#user-form-modal">Edit</button>
                            <button class="btn btn-sm btn-outline-secondary badge" data-id="${user.userId}" type="button" onclick="getId(this)"><i class="fa fa-trash"></i></button>
                        </div>
                      </td> 
        </tr>`
    }
    usersList.innerHTML = allUsers
}

renderUsers(users)



function deleteBtn(event){
    const found = users.find(el => el.userId == +event.dataset.id)
    users.splice(users.indexOf(found), 1)
    window.localStorage.setItem("users", JSON.stringify(users))
    renderUsers(users)
}

deleteBtn(users)
