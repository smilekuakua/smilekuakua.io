
const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');


button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});
  
  
  
  
  // It's best to inline this in `head` to avoid FOUC (flash of unstyled content) when changing pages or themes
  if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
  var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

  
  // Change the icons inside the button based on previous settings
  if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      themeToggleLightIcon.classList.remove('hidden');
  } else {
      themeToggleDarkIcon.classList.remove('hidden');
  }
  
  var themeToggleBtn = document.getElementById('theme-toggle');
  
  themeToggleBtn.addEventListener('click', function() {
  
      // toggle icons inside button
      themeToggleDarkIcon.classList.toggle('hidden');
      themeToggleLightIcon.classList.toggle('hidden');
  
      // if set via local storage previously
      if (localStorage.getItem('color-theme')) {
          if (localStorage.getItem('color-theme') === 'light') {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
          } else {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
          }
  
      // if NOT set via local storage previously
      } else {
          if (document.documentElement.classList.contains('dark')) {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
          } else {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
          }
      }
      
  });

  const the_animation = document.querySelectorAll('.animation')

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('scroll-animation')
          }
              else {
                  entry.target.classList.remove('scroll-animation')
              }
          
      })
  },
     { threshold: 0.5
     });
  //
    for (let i = 0; i < the_animation.length; i++) {
     const elements = the_animation[i];
  
      observer.observe(elements);
    } 

    
    function toggleAccordion(header) {
        // Get the parent accordion item
        var item = header.parentNode;
    
        // Toggle the active class on the accordion item
        item.classList.toggle('active');
    
        // Toggle the display of the accordion content
        var content = item.querySelector('.accordion-content');
        if (content.style.display === 'block') {
          content.style.display = 'none';
        } else {
          content.style.display = 'block';
        }
      } 