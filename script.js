document.getElementById('demoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you! Your demo request has been received. We will contact you shortly.');
    this.reset();
});

document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.05)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const readMoreLinks = document.querySelectorAll('.read-more');
    
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const parentFeature = this.closest('.feature3-content');
            const expandedContent = parentFeature.querySelector('.expanded-content');
            
            if (expandedContent.style.display === 'block') {
                expandedContent.style.display = 'none';
                this.textContent = 'Read More.';
            } else {
                expandedContent.style.display = 'block';
                this.textContent = 'Read Less.';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
           
            const faqItem = this.parentNode;
            
           
            const answer = faqItem.querySelector('.faq-answer');
            
            
            const chevron = this.querySelector('.chevron');
            
           
            answer.classList.toggle('active');
            
            
            chevron.classList.toggle('up');
        });
    });
    
   
    const loadMoreBtn = document.querySelector('.load-more-btn');
    loadMoreBtn.addEventListener('click', function() {
        
        alert('More FAQs would load here!');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    
    const checkbox = document.getElementById('termsCheckbox');
    let isChecked = true; 
    
    checkbox.addEventListener('click', function() {
        isChecked = !isChecked;
        if (isChecked) {
            this.style.backgroundColor = 'white';
        } else {
            this.style.backgroundColor = 'transparent';
        }
    });
    
    
    const form = document.getElementById('demoForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
    
        
        if (!isChecked) {
            alert('Please accept the Terms & Conditions to proceed.');
            return;
        }
        
       
        const formData = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            whatsapp: document.getElementById('whatsapp').value,
            clinicName: document.getElementById('clinicName').value,
            country: document.getElementById('country').value,
            city: document.getElementById('city').value,
            numUsers: document.getElementById('numUsers').value,
            currentSoftware: document.getElementById('currentSoftware').value,
            message: document.getElementById('message').value
        };
        
      
        console.log('Form submitted with data:', formData);
        alert('Demo request submitted successfully! We will contact you shortly.');
        
       
        form.reset();
    });
    
    document.querySelector('.terms').addEventListener('click', function() {
        alert('Terms & Conditions document would open here.');
    });
});
document.querySelectorAll('.demo-button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'translateY(-2px)';
        button.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
    
    button.addEventListener('mouseout', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = 'none';
    });
});