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

}

replaceGPet()

/* 

"browser_action": {
    "default_icon": "icon.png",
    "default_popup": "popup.html"
},

*/
