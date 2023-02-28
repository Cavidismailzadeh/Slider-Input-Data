



$(document).ready(function () {


    let btn1 = $(".btn1");

    let btn2 = $(".btn2");

    let users = [];

    if (localStorage.getItem("user") != null) {

        users = JSON.parse(localStorage.getItem("user"))

    }

    btn1.click(function () {


        $("ul").empty();

        let input1 = $("input").eq(0);
        let input2 = $("input").eq(1);
        users.push({
            id: uuidv4(),
            name: input1.val(),
            surname: input2.val(),
        })


        localStorage.setItem("user", JSON.stringify(users));

        users = JSON.parse(localStorage.getItem("user"));


        for (const user of users) {
            $("ul").append(`<li class = "list-group-item item2" data-id"=${user.id}">${user.name + "  " + user.surname}</li>`)
            input1.val("");
            input2.val("");
        }
    })
    for (const user of users) {
        $("ul").append(`<li class = "list-group-item item2" data-id=${user.id}">${user.name + "  " + user.surname}</li>`)
    }


    function uuidv4() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }



    btn2.click(function () {
        $("ul").remove();
        localStorage.clear();
        window.location.reload();
    })
})







