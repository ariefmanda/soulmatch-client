module.exports = {
  auth: (to, from, next) => {
    if (!localStorage.getItem('token')) {
      next({name: "login"})
    } else {
      next()
    }
  },
  auth2:(to,from,next)=>{
    if(localStorage.getItem('token')){
      next({
        name:"profile"
      })
    }else{
      next()
    }
  }
}
