# hide_show_div
This code stores status value (hide or show) in one cookie
For use it:
1) include jQuery library,
        js/manCookies.js for update setting in cookie form,
        js/hide_show_lib.js the code for hide and show

2) set div you want to hide-show with showbox class
3) add two button with id = "butUp" and "butDn"
4) in $(document).ready(function () add call to setPageState() and manageButton()

