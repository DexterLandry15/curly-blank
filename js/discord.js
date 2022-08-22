const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    const selected =
      document.getSelection().rangeCount > 0
        ? document.getSelection().getRangeAt(0)
        : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
  };


let wayplay = 'WayPlay#9265'
let gelshteyn = 'Гельштейн#8960'
let dexter = 'dexter#5540'


function copy_wayplay() {
    copyToClipboard(wayplay);
    alert('Скопировано');
}

function copy_gelshteyn() {
    copyToClipboard(gelshteyn);
    alert('Скопировано');
}

function copy_dexter() {
    copyToClipboard(dexter);
    alert('Скопировано');
}