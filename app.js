let searchText = document.getElementById('cs').value;
let searchBtn = document.getElementById('submithandle').addEventListener('click', search());

fetch('https://api.twitter.com/2/tweets?ids=', {
        method: 'GET'}).then(res => {
        if (res.ok){
            console.log('Success')
        } else{
            console.log('Not Successful')
        }
    });

// var formEl = document.forms.GetTweetForm;
// var formData = new FormData(formEl);
// var name = formData.get('name');