/* 
 *  pit - 13 nov 2022  - 15:40:58
 */


            function setPageState() {
                //****************************************************************************************action for page
                var hide_info = Number(getCookie("hide_info"));
                if (hide_info > 0) {
                    $("#butUp").hide();
                    $("#butDn").show();
                    $(".showbox").css('visibility', 'hidden');
                    $(".showbox").css('height', '0px');
                } else {
                    $("#butUp").show();
                    $("#butDn").hide();
                    $(".showbox").css('visibility', 'visible');
                    $(".showbox").css('height', 'auto');
                }

            }
            function manageButton() {
                //************************************************************************button press
                $("#butUp").click(function () {
                    $("#butUp").hide();
                    $("#butDn").show();
                    $(".showbox").css('visibility', 'hidden');
                    $(".showbox").css('height', '0px');
                    setCookie('hide_info', 1, 365);
                });
                $("#butDn").click(function () {
                    $("#butUp").show();
                    $("#butDn").hide();
                    $(".showbox").css('visibility', 'visible');
                    $(".showbox").css('height', 'auto');
                    setCookie('hide_info', 0, 365);
                });

            }
