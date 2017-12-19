$(document).ready(function(){

    $("#jform").validate({

       rules:{

            fullname:{
                required: true,
                minlength: 4,
                maxlength: 16,
            },

            email:{
                required: true,
                email: true,
            },

            about:{
                required: true,
                minlength: 6,
                maxlength: 100,
            },
       },

       messages:{

            fullname:{
                required: "Это поле обязательно для заполнения",
                minlength: "Имя должно быть минимум из 4 символов",
                maxlength: "Максимальное число символо - 16",
            },

            email:{
                required: "Это поле обязательно для заполнения",
                email: "Не корректный формат email",
            },

            about:{
                required: "Это поле обязательно для заполнения",
                minlength: "Текст должен быть минимум из 6 символов",
                maxlength: "Допускается не больше 100 символов",
            },
        }
    });
});