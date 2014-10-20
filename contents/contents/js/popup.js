window.onload=autoPOP;

function autoPOP()
{
	var x = document.getElementsByTagName('a');
	for (var i=0;i<x.length;i++)
	{
		if (x[i].getAttribute('className') == 'popup' || x[i].getAttribute('class') == 'popup')
		{
			x[i].onclick = function () {
			return winOpen(this.href)
			}
			x[i].title += '•Ê‘‹‚ÅŠJ‚«‚Ü‚·';
		}
	}
};

function winOpen(url) {
	window.open(
		url,
		'popup',
		'width=712,height=1000,scrollbars=1,resizable=1'
	);

	return false;
};

