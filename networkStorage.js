function savetolocalstorage(event){
    event.preventDefault()
      /*const name=event.target.username.value
      const email=event.target.email.value
      const phone=event.target.phone.value
      const time=event.target.time.value
      localStorage.setItem('name',name)
      localStorage.setItem('email',email)
      localStorage.setItem('phone',phone) 
      localStorage.setItem('time',time) */
      //by default all the values are stored in string format and cannot be represented in original input format,so
      let request_details={
          name:event.target.username.value,
          email:event.target.email.value,
          phone:event.target.phone.value,
          time:event.target.time.value
      }
      //to convert the default string format serialization is used-to convert to readable data
    //   let request_details_serialize=JSON.stringify(request_details)
     
      
    //   //this will show the values in string format 
    //   localStorage.setItem(request_details.email,request_details_serialize)
    //   //this will deserialize the prev an convert to original format of input
    //   let request_details_deserialize=JSON.parse(localStorage.getItem("request-details"))
    //   console.log(request_details_deserialize)

      axios.post("https://crudcrud.com/api/1fdbc3c93b4b48a299e5255595d3a0df/appointmentData",request_details)
      .then((response)=>{
          showNewUserOnScreen(response.data)
          console.log(response)
      })
      .catch((err)=>console.log(err))

      //showNewUserOnScreen(request_details)
     
      
  }
//   window.addEventListener("DOMContentLoaded", () => {
//     const localStorageObj = localStorage;
//     const localstoragekeys  = Object.keys(localStorageObj)

//     for(var i =0; i< localstoragekeys.length; i++){
//         const key = localstoragekeys[i]
//         const userDetailsString = localStorageObj[key];
//         const userDetailsObj = JSON.parse(userDetailsString);
//         showNewUserOnScreen(userDetailsObj)
//     }
// })
  function showNewUserOnScreen(user){
       const parentNode=document.getElementById('list of users')
       const childHtml=`<li id=${user.email}>${user.name} - ${user.email} - ${user.phone} -${user.time}
        <button onclick=deleteUser('${user.email}') style="width:15ex;">Delete User</button>                  
        <button onclick=editUser('${user.name}','${user.email}','${user.phone}','${user.time}') style="width:20ex;">Edit User Details</button></li>`
       parentNode.innerHTML+=childHtml

   

  }
  function deleteUser(email){
      localStorage.removeItem(email)
      removeUserFromScreen(email)
       
  }
  function editUser(name,email,phone,time){
      document.getElementById('name').value=name
      document.getElementsById('email').value=email
      document.getElementsById('phone').value=phone
      document.getElementsById('time').value=time
      deleteUser(email)




  }
  function removeUserFromScreen(email){
      const parentNode=document.getElementById('list of users')
      const remove=document.getElementById(email)
      parentNode.removeChild(remove)

  }

//https://crudcrud.com/api/c34b9b7b600d41a0a2f8ab4a4d16cca5