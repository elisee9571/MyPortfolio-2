/* section project filter and popup */
const filterContainer = document.querySelector('.project-filter');
const projectItemsContainer = document.querySelector('.project-items');
const projectItems = document.querySelectorAll('.project-item');
const popup = document.querySelector('.project-popup');
const prevBtn = popup.querySelector('.pp-prev');
const nextBtn = popup.querySelector('.pp-next');
const closeBtn = popup.querySelector('.pp-close');
const projectDetailsContainer = document.querySelector('.pp-details');
let itemIndex, slideIndex, screenshots;

// filter project items
filterContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('filter-item') && !event.target.classList.contains("active")) {
        // desactive class active
        filterContainer.querySelector('.active').classList.remove('active');
        //active new filter-item
        event.target.classList.add('active');
        const target = event.target.getAttribute('data-target');
        projectItems.forEach((item) => {
            if (target == item.getAttribute('data-category') || target === 'all') {
                item.classList.remove('hide');
                item.classList.add('show');
            } else {
                item.classList.remove('show');
                item.classList.add('hide');

            }
        });
    }
});

//popup project
projectItemsContainer.addEventListener('click', (event) => {
    if (event.target.closest('.project-item-inner')) {
        const projectItem = event.target.closest('.project-item-inner').parentElement;
        //get the projectItem index
        itemIndex = Array.from(projectItem.parentElement.children).indexOf(projectItem);
        screenshots = projectItems[itemIndex].querySelector('.project-item-img img').getAttribute('data-screenshots');
        //convert screenshots into array
        screenshots = screenshots.split(',');
        if (screenshots.length === 1) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        } else {

            prevBtn.style.display = 'block';
            nextBtn.style.display = 'block';
        }

        slideIndex = 0;
        popupToggle();
        popupSlideshow();
        popupDetails();
    }
});

//body stop scrolling
function bodyScrollingToggle() {
    document.body.classList.toggle('stop-scrolling');
};

//closeBtn
closeBtn.addEventListener('click', () => {
    popupToggle();
});

//popup
function popupToggle() {
    popup.classList.toggle('open');
    bodyScrollingToggle();
};

function popupSlideshow() {
    const imgSrc = screenshots[slideIndex];
    const popupImg = popup.querySelector(".pp-img");
    // activate loader until the popupImg loaded
    popup.querySelector('.pp-loader').classList.add('active');
    popupImg.src = imgSrc;
    popupImg.onload = () => {
        //desactive loader
        popup.querySelector('.pp-loader').classList.remove('active');
    }
    popup.querySelector('.pp-counter').innerHTML = (slideIndex + 1) + "/ " + screenshots.length;
};

// btn next slide
nextBtn.addEventListener('click', () => {
    if (slideIndex === screenshots.length - 1) {
        slideIndex = 0;
    } else {
        slideIndex++;
    }
    popupSlideshow();
});
// btn prev slide
prevBtn.addEventListener('click', () => {
    if (slideIndex === 0) {
        slideIndex = screenshots.length - 1;
    } else {
        slideIndex--;
    }
    popupSlideshow();
});

// get the project details
function popupDetails() {
    //get the project details
    const details = projectItems[itemIndex].querySelector('.project-item-details').innerHTML;
    popup.querySelector('.pp-project-details').innerHTML = details;
    //get the project title
    const title = projectItems[itemIndex].querySelector('.project-item-title').innerHTML;
    popup.querySelector('.pp-title h2').innerHTML = title;
    //get the project category
    const category = projectItems[itemIndex].getAttribute('data-category');
    popup.querySelector('.pp-project-category').innerHTML = category.split('-').join(' ');
};

/* hide section except active */

const sections = document.querySelectorAll('.section');
sections.forEach((section) => {
    if (!section.classList.contains('active')) {
        section.classList.add('hide');
    }
});