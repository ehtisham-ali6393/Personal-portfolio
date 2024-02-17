$(document).ready(function () {

    // Change navbar to toggle to the right side when on mobile
    $('#menu').click(function () {
        // Change the bars icon to times icon
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Navbar on desktop
    $(window).on('scroll', function () {
        // Change the times icon to bars icon
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        // Navigate to each section
        $('section').each(function () {
            // Set positions
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            // Change the navbar color to the corresponding section
            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });
});

// Typing JS Effect Start
var typed = new Typed(".typing-text", {
    strings: ["Ehtisham Ali!"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 40,
    backDelay: 2500,
});
// Typing JS Effect End 


let projects = [
    {
        'img': 'images/portfolio_project.png',
        'name': 'Website',
        'desc': 'My Portfolio Website',
        'link': '',
        'code': ''
    },
  /* {
        'img': '',
        'name': '',
        'desc': '',
        'link': '',
        'code': ''
    },
    {
        'img': '',
        'name': '',
        'desc': '',
        'link': '',
        'code': ''
    } */
] 

function showProjects(projects) {
    const projectContainer = document.querySelector('#project .box-container');
    projectContainer.innerHTML = projects.map(project => `
    <div class="box">
        <img src="${project.img}" alt="${project.name}" />
        <div class="content">
            <div class="tag">
                <h3>${project.name}</h3>
            </div>
            <div class="desc">
                <p>${project.desc}</p>
                <div class="btns">
                    <a href="${project.link}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                    <a href="${project.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
                </div>
            </div>
        </div>
    </div>`).join('');
}

showProjects(projects);
