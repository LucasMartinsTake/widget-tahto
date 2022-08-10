(function () {


    const blipChatWidgetScript = document.createElement("script");

 

    blipChatWidgetScript.type = "text/javascript";

    blipChatWidgetScript.src = "https://unpkg.com/blip-chat-widget";

    blipChatWidgetScript.className = "blipChatWidgetScript";

    document.head.append(blipChatWidgetScript);


    setTimeout(() => {

        const blipChatElement = document.head.getElementsByClassName("blipChatWidgetScript");


        if(blipChatElement.length) {


            blipClient = new BlipChat()

                .withAppKey('Y2hhdG5vc2l0ZXJvdXRlcjE6Y2EzZGU4MzgtOWMxNC00MzI2LThiN2UtMWFhNjkwMjQ1NGQx')

                .withButton({ "color": "#009E0B", "icon": "https://blipmediastore.blob.core.windows.net/public-medias/Media_acfae018-9432-47a8-8872-c5bde8576d52" })

                .withCustomCommonUrl('https://berlin.chat.blip.ai/')

                .withCustomMessageMetadata({ OiDatalayer: JSON.stringify(document.OiDatalayer) })

                blipClient.build();

                window.setTimeout(function () { blipClient.toogleChat() }, 500);

                const blipChatButton = document.getElementById('blip-chat-open-iframe')
                
                blipChatButton.classList.remove('opened')
        }

    }, 1000);

})();
