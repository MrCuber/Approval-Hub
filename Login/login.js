function selectRole(role)
{
    document.getElementById('requester-link').classList.remove('active');
    document.getElementById('approver-link').classList.remove('active');
    document.getElementById('administrator-link').classList.remove('active');

    document.getElementById(role + '-link').classList.add('active');
}

function login()
{
    // const roleElements = document.querySelectorAll('.login-header a');
    // let SelectedRole;
    // for(const element of roleElements)
    // {
    //     if(element.classList.contains('active'))
    //     {
    //         SelectedRole = element.textContent.toLowerCase();
    //         break;
    //     }
    // }
    const username = document.getElementsByName('username')[0].value;
    const password = document.getElementsByName('password')[0].value;
    if(!username && !password)
    {
        document.getElementById('warning').style.display = 'block';
    }
    if(username === 'user' && password === 'user@123')
    {
        window.location.href = '../Requests/request.html';
    }
    else if(username === 'admin' && password === 'admin@123')
    {
        window.location.href = '../Administrator/admin.html';
    }
    else if(username === 'approver' && password === 'approver@123')
    {
        window.location.href = '../Approver/approver.html';
    }
    else
    {
        alert('Invalid Credentials');
    }
}