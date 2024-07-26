$dropdownMenu = document.querySelector('.dropdown');
$dropdownLink = document.querySelector('.header-dropdown-link');


function toggleNavbar() {
    if (!$dropdownMenu.getAttribute('style') || $dropdownMenu.getAttribute('style') === 'display: none;') {
        $dropdownMenu.style.display = 'block';
        $dropdownLink.setAttribute('aria-expanded', 'true');
    } else {
        $dropdownMenu.style.display = 'none';
        $dropdownLink.setAttribute('aria-expanded', 'false');
    }
}

$dropdownLink.addEventListener('click', function(e) {
    e.preventDefault();
    toggleNavbar();
});

let intersections = new IntersectionObserver((entries) =>{

    // console.log(entries);

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                console.log(entry.target,'Intesection mamen');

                entry.target.classList.add('triggered');

                document.querySelector('.decorative-aside-image').classList.add('go-bat');
                
                document.querySelector('.decorative-aside').style.setProperty('background','crimson');

        
            } else {

                document.querySelector('.decorative-aside').style.setProperty('background','#FCD530');  
            }

           

        });

        
});


intersections.observe(document.querySelector('.trigger-intersection'),{rootMargin:'20px 20px 20px 20px'});