console.log("arrow-function")

// arrow function là một hàm khai báo mũi tên hay là hàm ẩn danh có thể dùng khai báo ngắn gọn hơn làm cho code ngắn và đẹp hơn và không có this nó sẽ lấy this từ cha khi nó được tạo bên trong
const showName = (name)=> name // Dư 
const showName1 =(name) =>{
    return name
} // dư

// arrow function giữ this từ cha
function myFunc(){
    this.name = "dư",
    setTimeout(() => { 
        console.log(this.name)
     },1000)
    
}
const db = new myFunc()
console.log(1,db)

// arrow function k giữ this từ cha
function myFunc1(){
    this.name = "dư",
    setTimeout(function(){
        console.log("name",this.name)
    },1000)
    
}
const d = new myFunc1()
console.log(2,d)

////
const profile ={
    name:"Dư",
    handleClick: function() { 
        console.log(this.name)
     }
}

profile.handleClick() // dư

///
const profile1 ={
    name:"Dư",
    handleClick: () => { 
        console.log(this.name)
     }
}

profile.handleClick()
 // undefind Bởi vì arrow function cần this là scope lobal nên trong object literal thì method handleClick nằm trong phạm vị của profile1 k phải khởi tạo mới nên sẽ bị undefind trường hợp đó nên sử dụng function 



