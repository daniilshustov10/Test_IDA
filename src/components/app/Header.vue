<template>
    <header>
        <div class="navbar navbar__marginBottom">
            <div class="navbar-left">
                <div class="logo">
                    <router-link to='/'><img src="@/assets/img/Logo.png" alt="logo"></router-link>
                    <p class="logo_text logo_text__marginLeft">Pepelane</p>
                </div>
                <p class="navbar-left_description navbar-left_description__marginLeft">World's first affordable airsharing</p>
            </div>
            <div class="navbar-right">
                <div class="theme">
                    <button class="theme_button"><img src="@/assets/img/Theme.png" alt="theme"></button>
                    <p class="theme_text theme_text__marginLeft">Night mod</p>
                </div>
                <div class="icons icons__margin">
                    <button class="icons_message"><img src="@/assets/img/Message.png" alt="message"></button>
                    <button class="icons_notification icons_notification__marginLeft"><img src="@/assets/img/Notification.png" alt="notification"></button>
                </div>
                <div class="user user__marginLeft">
                    <p class="user_text user_text__marginRight">Bessie Cooper</p>
                    <a href="#"><img src="@/assets/img/User.png" alt="User"></a>
                </div>
            </div>                
        </div>
        </header>
</template>

