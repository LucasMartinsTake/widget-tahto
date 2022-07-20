(function () {

    // Cria um script que adiciona dinamicamente o blip-chat-widget no header da aplicação

    const blipChatWidgetScript = document.createElement("script");

 

    blipChatWidgetScript.type = "text/javascript";

    blipChatWidgetScript.src = https://unpkg.com/blip-chat-widget;

    blipChatWidgetScript.className = "blipChatWidgetScript";

    document.head.append(blipChatWidgetScript);

 

    // Aguarda um tempo até o elemento unpkg ser carregado antes de iniciar o blipchat

    // esperasse que o arquivo carregue em até no máximo de 1 segundo

    setTimeout(() => {

        const blipChatElement = document.head.getElementsByClassName("blipChatWidgetScript");

        // Verifica se o elemento foi criado corretamente no header

        if(blipChatElement.length) {

            // Inicializa o blipchat

            new BlipChat()

                .withAppKey('Y2hhdG5vc2l0ZXJvdXRlcjpkODhmYzgzZS1kNjVmLTQ5OGUtYjA2Yy0xNzk5Y2UzNmVhMTM=')

                .withButton({ "color": "#009E0B", "icon": https://blipmediastore.blob.core.windows.net/public-medias/Media_acfae018-9432-47a8-8872-c5bde8576d52 })

                .withCustomCommonUrl('https://berlin.chat.blip.ai/')

                .withCustomMessageMetadata({ OiDatalayer: JSON.stringify(document.OiDatalayer) })

                .build();

        }

    }, 1000);

})();
