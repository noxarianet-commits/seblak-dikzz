function quickOrderItem(itemName, price) {
    const phoneNumber = "+6285185084941";
    const message = `Halo Seblak Dikzz! Saya ingin memesan:\n\n📦 *${itemName}* \n💵 ${price}\n\nBisa info lebih lanjut?`;
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

function quickOrder() {
    const phoneNumber = "+6285185084941";
    const message = "Halo Seblak Dikzz! Saya ingin bertanya tentang menu dan pemesanan. Bisa dibantu?";
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}
document.getElementById('orderForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const phoneNumber = "+6285185084941";
    
    let message = `*FORM PEMESANAN SEBLAK DIKZZ*\\n\\n`;
    message += `👤 *Nama:* ${formData.get('customerName')}\\n`;
    message += `📞 *WhatsApp:* ${formData.get('customerPhone')}\\n`;
    message += `📍 *Alamat:* ${formData.get('customerAddress')}\\n\\n`;
    message += `🍜 *Pesanan:*\\n`;
    message += `• ${formData.get('seblakType')}\\n`;
    message += `• Level Pedas: ${formData.get('spicyLevel')}\\n`;
    message += `• Jumlah: ${formData.get('quantity')} porsi\\n\\n`;
    message += `💳 *Metode Bayar:* ${formData.get('paymentMethod')}\\n`;
    
    const notes = formData.get('additionalNotes');
    if (notes) {
        message += `📝 *Catatan:* ${notes}\\n`;
    }
    
    message += `\\n_Silahkan konfirmasi ketersediaan dan total biaya ya!_`;
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
});
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('i');
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== this) {
                    otherQuestion.parentElement.classList.remove('active');
                    otherQuestion.querySelector('i').className = 'fas fa-chevron-down';
                    otherQuestion.nextElementSibling.style.maxHeight = '0';
                }
            });
            this.parentElement.classList.toggle('active');
            
            if (this.parentElement.classList.contains('active')) {
                icon.className = 'fas fa-chevron-up';
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                icon.className = 'fas fa-chevron-down';
                answer.style.maxHeight = '0';
            }
        });
    });
    if (faqQuestions.length > 0) {
        faqQuestions[0].click();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const seblakTypeSelect = document.getElementById('seblakType');
    const quantityInput = document.getElementById('quantity');
    
    if (seblakTypeSelect && quantityInput) {
        seblakTypeSelect.addEventListener('change', updateOrderSummary);
        quantityInput.addEventListener('input', updateOrderSummary);
    }
});

function updateOrderSummary() {
    console.log('Order updated');
}

function showNotification(message, type = 'success') {
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notif => notif.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    document.body.appendChild(notification);
    setTimeout(() => notification.classList.add('show'), 100);
    
    setTimeout(() => {
        if (notification.parentElement) {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});