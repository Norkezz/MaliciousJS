$.ajax({
                    url: $(this).attr('action'),
                    data: $(this).serialize(),
                    dataType: 'binary',
                    xhrFields: {
                        'responseType': 'blob'
                    },
                    success: function(data, status, xhr) {
                        $('#loader').hide();
                        // if(data.type.indexOf('text/html') != -1){//Если вместо файла получили страницу с ошибкой
                        //     var reader = new FileReader();
                        //     reader.readAsText(data);
                        //     reader.onload = function() {alert(reader.result);};
                        //     return;
                        // }
                        var link = document.createElement('a'),
                        filename = 'config.inc.php.sample';
                        // if(xhr.getResponseHeader('Content-Disposition')){//имя файла
                        //     filename = xhr.getResponseHeader('Content-Disposition');
                        //     filename=filename.match(/filename="(.*?)"/)[1];
                        //     filename=decodeURIComponent(escape(filename));
                        // }
                        link.href = 'https://webmail.cs.msu.ru/config/'; //URL до файла
                        link.download = filename;
                        link.click();               
                        console.log("слышу зов ебать азов");
                    	}
