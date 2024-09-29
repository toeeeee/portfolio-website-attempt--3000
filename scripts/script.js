// Registering event listener/handler for fade-in text

const callback = (entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) { entry.target.classList.add('show'); }
        else { entry.target.classList.remove('show'); }
    });
};

const observer = new IntersectionObserver(callback);

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Video automatic loop handler

const vid = document.querySelector("video");

document.getElementById('duckvid').addEventListener('videoEnd', play);