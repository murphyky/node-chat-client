function divEscapedContentElement(message){
	return $('<div></div>').text(message);
}

function divSystemContentElement(message){
	return $('<div></div>').html('<i>' + message + '</i>');
}

function processUserInput(chatApp,socket){
	var message = $('#send-message').val();
	var systemMessage;

	if(message.charAt(0) == '/')
}