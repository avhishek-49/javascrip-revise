const person = 
{
    firstName:"avhishek",
    lastName:"poudel",
    id:49,

    FullName:function()
    {
        return `${this.firstName} ${this.lastName}`
    }

}

console.log(person.FullName());