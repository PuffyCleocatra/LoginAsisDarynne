function ValidateEmail(inputText)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(inputText.value.match(mailformat))
    {
        alert("You're in!");
        document.form.email.focus();
        return true;
    }
    else
    {
        document.form.email.focus();
        return false;
    }
}