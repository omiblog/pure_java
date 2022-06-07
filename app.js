 window.addEventListener("scroll", () => {
     let content = document.querySelector('.row');
     let contentPostion = content.getBoundingClientRect().top;
     let screenPostion = window.innerHeight /1.2;// you can user fixed value but it do not work but it don not work on other devise
     if(contentPostion < screenPostion){
         content.classList.add('active');

     }else{
        content.classList.remove('active'); 
     }
 

 });


