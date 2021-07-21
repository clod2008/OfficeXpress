const nav = document.querySelector('#navCont'); // Identify target

const navBg = () =>{
    window.addEventListener('scroll', function(event) { // To listen for event
        event.preventDefault();
    
        if (window.scrollY <= 450) { // Just an example
            nav.style.backgroundColor = '#343a40'; // or default color
        } else {
            nav.style.backgroundColor = 'rgba(52,58,64,0.7)';
            //transition: all 0.5s ease-out
            nav.style.transition = 'all 0.5s ease-out';
            
        }
    });

}
 navBg()
