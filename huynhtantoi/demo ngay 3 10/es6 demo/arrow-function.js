console.log("arrow-function")

// arrow function là một hàm khai báo mũi tên hay là hàm ẩn danh có thể dùng khai báo ngắn gọn hơn làm cho code ngắn và đẹp hơn và không có this nó sẽ lấy this từ cha khi nó được tạo bên trong
const showName = (name)=> name 
const showName1 =(name) =>{
    return name
} 

// arrow function giữ this từ cha
function myFunc(){
    this.name = "dư",
    setTimeout(() => { 
        console.log(this.name)
     },1000)
    
}
const db = new myFunc()


// arrow function k giữ this từ cha
function myFunc1(){
    this.name = "dư",
    setTimeout(function(){
        console.log("name",this.name)
    },1000)
    
}
const d = new myFunc1()


////
const profile ={
    name:"Dư",
    handleClick: function() { 
        console.log(this.name)
     }
}

profile.handleClick() 

 // undefind Bởi vì arrow function cần this là scope lobal nên trong object literal thì method handleClick nằm trong phạm vị của profile1 k phải khởi tạo mới nên sẽ bị undefind trường hợp đó nên sử dụng function 



