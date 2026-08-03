document.addEventListener('scroll', function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    document.getElementById('progress-bar').style.width = scrolled + '%';
});