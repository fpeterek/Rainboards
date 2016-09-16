/* This is a function just in case I decide to add more functionality into this extension */

function replaceGPet() {

    var str = '<span class="username" data-bind="text: prefixName($data.prefix),' +
    'style: {color: groupColor}" style="color: rgb(69, 139, 0);">GPet</span>'

    var elements = document.getElementsByClassName("username")

    for (var i = 0; i < elements.length; ++i) {

        if (elements[i].textContent == "GPet") {

            elements[i].className += " rainbow"
            elements[i].style = ""

        }

    }

    elements = document.getElementsByClassName("players-profile-title")

    for (var i = 0; i < elements.length; ++i) {

        if (elements[i].textContent.toLowerCase() == "gpet" || elements[i].textContent.toLowerCase() == "gpet's profile") {

            elements[i].className += " rainbow"
            elements[i].style = ""

        }

    }

}

replaceGPet()
