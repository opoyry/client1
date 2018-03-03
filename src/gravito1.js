
window.addEventListener("load", function () {
    window.cookieconsent.initialise({
        "palette": {
            "popup": {
                "background": "#252e39"
            },
            "button": {
                "background": "#14a7d0"
            }
        },
        "position": "bottom-right",
        "type": "opt-in",
        "content": {
            "href": "https://www.gravito.net?l=" + window.location.hostname,
            "link": "Or click here to open privacy preferences page",
            "message": "Enter your email address <input type=\"text\" size=\"40\" name=\"email\" value=\"\"><br/>and press the button below",
            "allow": "Get email<br/>with link to<br/>preferences", // link to<br/>preferences to<br/>your email",
            "dismiss": 'Continue<br/>anonymously'
        },
        "cookie" : {
            "domain": "gravito1.github.io"
        },
        "revokeBtn": "<div class=\"cc-revoke {{classes}}\">Preference settings</div>"
    })
});
