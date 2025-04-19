

// desktop nav link js
// const desktopNavLinks = document.querySelectorAll("#desktop__Nav--Menu .desktop__nav--link");

//   desktopNavLinks.forEach(link => {
//     link.addEventListener("click", function() {
//       desktopNavLinks.forEach(l => l.classList.remove("desktop__nav--active")); // remove from all
//       this.classList.add("desktop__nav--active"); // add to clicked
//     });
//   });

// menu open and close functionalit
  const openMenuBtn = document.getElementById('open__Menu--Btn');
  const menuSection = document.getElementById('mobile__menu--section');

  openMenuBtn.addEventListener('click', () => {
    menuSection.classList.toggle('-translate-y-full');
    menuSection.classList.toggle('opacity-0');
    menuSection.classList.toggle('translate-y-0');
    menuSection.classList.toggle('opacity-100');
  });

  // Optional: Close when clicking the X inside the menu
  const closeMenuBtn = document.getElementById('close__Menu--Btn'); // ID on your X button
  if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', () => {
      menuSection.classList.add('-translate-y-full', 'opacity-0');
      menuSection.classList.remove('translate-y-0', 'opacity-100');
    });
}
  
// counter js
  document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
      counter.innerText = '0';

      const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = target / 200; // adjust 200 for speed

        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          setTimeout(updateCounter, 300); // speed of update
        } else {
          counter.innerText = target.toLocaleString(); // format like 10,000
        }
      };

      updateCounter();
    });
  });



function toggleAccordion(contentId, iconId) {
  const allContents = document.querySelectorAll('[id^="content"]');
  const allIcons = document.querySelectorAll('[id^="icon"]');

  allContents.forEach(content => {
    if (content.id === contentId) {
      content.classList.toggle('hidden');
    } else {
      content.classList.add('hidden');
    }
  });

  allIcons.forEach(icon => {
    if (icon.id === iconId) {
      const content = document.getElementById(contentId);
      if (content.classList.contains('hidden')) {
        icon.innerHTML = '<i class="fa-solid fa-plus"></i>';
      } else {
        icon.innerHTML = '<i class="fa-solid fa-minus"></i>';
      }
    } else {
      icon.innerHTML = '<i class="fa-solid fa-plus"></i>';
    }
  });
}
 // Automatically open the first item on page load
  document.addEventListener("DOMContentLoaded", () => {
    const firstContent = document.querySelector('[id^="content"]');
    const firstIcon = document.querySelector('[id^="icon"]');

    if (firstContent && firstIcon) {
      firstContent.classList.remove('hidden');
      firstIcon.innerHTML = '<i class="fa-solid fa-minus"></i>';
    }
  });

// image movable functionality
   const parents = document.querySelectorAll('.parent');

  parents.forEach((parent) => {
    const movingDiv = parent.querySelector('.movingDiv');

    parent.addEventListener('mousemove', (e) => {
      const rect = parent.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      movingDiv.style.left = `${x + 100}px`;
      movingDiv.style.top = `${y}px`;
      movingDiv.style.transform = `translate(-50%, -50%)`;
    });

    parent.addEventListener('mouseenter', () => {
      movingDiv.classList.remove('opacity-0');
      movingDiv.classList.add('opacity-100');
    });

    parent.addEventListener('mouseleave', () => {
      movingDiv.classList.remove('opacity-100');
      movingDiv.classList.add('opacity-0');
    });
  });

  function toggleDropdown() {
    const dropdown = document.getElementById('dropdownMenu');
    const icon = document.getElementById('dropdownIcon');
    // dropdown.classList.toggle('hidden');

     if (dropdown.classList.contains('max-h-0')) {
      dropdown.classList.remove('max-h-0');
      dropdown.classList.add('max-h-96'); // You can adjust height based on your dropdown content
      icon.classList.remove('fa-chevron-right');
      icon.classList.add('fa-chevron-down');
    } else {
      dropdown.classList.remove('max-h-96');
      dropdown.classList.add('max-h-0');
      icon.classList.remove('fa-chevron-down');
      icon.classList.add('fa-chevron-right');
    }
    
    // Change the icon
   if (dropdown.classList.contains('max-h-0')) {
      icon.classList.remove('fa-chevron-down');
      icon.classList.add('fa-chevron-right');
    } else {
      icon.classList.remove('fa-chevron-right');
      icon.classList.add('fa-chevron-down');
    }
}

// change the portfolio image hover

 const triggers = document.querySelectorAll('.hover__element');
    const currentImage = document.getElementById('current-image');
    const nextImage = document.getElementById('next-image');
    const originalSrc = currentImage.src;

    triggers.forEach(trigger => {
        trigger.addEventListener('mouseenter', () => {
            const newSrc = trigger.getAttribute('data-img');
            if (newSrc === currentImage.src) return;

            nextImage.src = newSrc;
            nextImage.classList.remove('translate-x-[-100%]', 'opacity-0');
            nextImage.classList.add('translate-x-0', 'opacity-100');

            // after animation, swap src and reset positions
            setTimeout(() => {
                currentImage.src = newSrc;
                nextImage.classList.add('translate-x-[-100%]', 'opacity-0');
                nextImage.classList.remove('translate-x-0', 'opacity-100');
            }, 500); // match transition duration
        });

        // trigger.addEventListener('mouseleave', () => {
        //     nextImage.src = originalSrc;
        //     nextImage.classList.remove('translate-x-[-100%]', 'opacity-0');
        //     nextImage.classList.add('translate-x-0', 'opacity-100');

        //     setTimeout(() => {
        //         currentImage.src = originalSrc;
        //         nextImage.classList.add('translate-x-[-100%]', 'opacity-0');
        //         nextImage.classList.remove('translate-x-0', 'opacity-100');
        //     }, 500);
        // });
    });