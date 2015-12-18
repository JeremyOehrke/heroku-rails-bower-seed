$(document).ready(function(){

    $.validator.addMethod("validEmail", function(value, element)
    {
        if(value == '')
            return true;
        var temp1;
        temp1 = true;
        var ind = value.indexOf('@');
        var str2=value.substr(ind+1);
        var str3=str2.substr(0,str2.indexOf('.'));
        if(str3.lastIndexOf('-')==(str3.length-1)||(str3.indexOf('-')!=str3.lastIndexOf('-')))
            return false;
        var str1=value.substr(0,ind);
        if((str1.lastIndexOf('_')==(str1.length-1))||(str1.lastIndexOf('.')==(str1.length-1))||(str1.lastIndexOf('-')==(str1.length-1)))
            return false;
        str = /(^[a-zA-Z0-9]+[\._-]{0,1})+([a-zA-Z0-9]+[_]{0,1})*@([a-zA-Z0-9]+[-]{0,1})+(\.[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,3})$/;
        temp1 = str.test(value);
        return temp1;
    }, "Please enter a valid email address.");

    $("#messageForm").validate({
        highlight: function(element){
            $(element).parent('div').addClass('has-error').addClass('has-feedback');
        },
        unhighlight: function(element){
            $(element).parent('div').removeClass('has-error').removeClass('has-feedback');
        },
        rules:{
            'message[name]':{
                minlength:2,
                required:true
            },
            'message[email]':{
                required:true,
                validEmail:true
            },
            'message[body]':{
                minlength:5,
                required:true
            }
        }
    });
});



